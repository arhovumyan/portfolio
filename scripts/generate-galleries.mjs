// Scans the media folders under public/images and writes the gallery manifest
// the Hardware page renders from.
//
// The point is that dropping a photo or a clip into public/images/astra (or
// lspace, ng, avl, circuits) is all it takes — the file shows up on the site
// with no code change. Vite runs this before every dev server and build, and
// watches the folders while `npm run dev` is up.
//
// Per-folder curation is optional and lives in that folder's gallery.json:
//
//   {
//     "order":    ["hero.jpg", "clip.mov"],   // these first, in this order
//     "exclude":  ["not-a-gallery-image.png"],
//     "captions": { "hero.jpg": "What this shows" }
//   }
//
// Anything not named there still appears — sorted by name, after the ordered
// files, with a caption derived from its filename.

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { basename, extname, join } from "node:path";

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".avif"]);
const VIDEO_EXTENSIONS = new Set([".mov", ".mp4", ".webm", ".m4v"]);

export const GALLERY_FOLDERS = ["lspace", "astra", "ng", "avl", "circuits"];

// "ng-rover-payload.jpg" -> "Ng rover payload". Only a fallback: anything worth
// a real caption gets one in gallery.json.
const captionFromFilename = (file) => {
  const words = basename(file, extname(file))
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return words.charAt(0).toUpperCase() + words.slice(1);
};

const readConfig = (dir) => {
  const configPath = join(dir, "gallery.json");
  if (!existsSync(configPath)) return {};

  try {
    return JSON.parse(readFileSync(configPath, "utf8"));
  } catch (error) {
    console.warn(`[galleries] ignoring malformed ${configPath}: ${error.message}`);
    return {};
  }
};

const scanFolder = (imagesDir, folder) => {
  const dir = join(imagesDir, folder);
  if (!existsSync(dir)) return [];

  const { order = [], exclude = [], captions = {} } = readConfig(dir);
  const excluded = new Set(exclude);

  const files = readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => {
      const ext = extname(name).toLowerCase();
      return (
        !excluded.has(name) && (IMAGE_EXTENSIONS.has(ext) || VIDEO_EXTENSIONS.has(ext))
      );
    });

  // Curated order first, then whatever else turned up, alphabetically.
  const ranked = new Map(order.map((name, index) => [name, index]));
  files.sort((a, b) => {
    const rankA = ranked.get(a) ?? Number.MAX_SAFE_INTEGER;
    const rankB = ranked.get(b) ?? Number.MAX_SAFE_INTEGER;
    return rankA === rankB ? a.localeCompare(b) : rankA - rankB;
  });

  return files.map((name) => {
    const isVideo = VIDEO_EXTENSIONS.has(extname(name).toLowerCase());
    const item = {
      src: `/images/${folder}/${name}`,
      caption: captions[name] ?? captionFromFilename(name),
    };

    if (isVideo) {
      item.type = "video";
      return item;
    }

    // Use the small copy from `npm run make:thumbs` when it exists; fall back to
    // the original so a brand new photo still renders before thumbs are rebuilt.
    const thumb = join(dir, "thumbs", `${basename(name, extname(name))}.jpg`);
    if (existsSync(thumb)) item.thumb = `/images/${folder}/thumbs/${basename(thumb)}`;

    return item;
  });
};

export const generateGalleries = (repoRoot) => {
  const imagesDir = join(repoRoot, "public/images");
  const galleries = Object.fromEntries(
    GALLERY_FOLDERS.map((folder) => [folder, scanFolder(imagesDir, folder)])
  );

  const outPath = join(repoRoot, "src/constants/galleries.generated.js");
  const body = `// GENERATED FILE — do not edit by hand.
//
// Written by scripts/generate-galleries.mjs from the contents of
// public/images/{${GALLERY_FOLDERS.join(",")}}. Add or remove a photo or video
// in one of those folders and this regenerates on the next dev server start,
// build, or file change. Curate order and captions in that folder's
// gallery.json, not here.

export const galleries = ${JSON.stringify(galleries, null, 2)};

export default galleries;
`;

  // Only write when something actually changed, so the dev server doesn't
  // reload itself in a loop.
  const previous = existsSync(outPath) ? readFileSync(outPath, "utf8") : null;
  if (previous !== body) {
    mkdirSync(join(repoRoot, "src/constants"), { recursive: true });
    writeFileSync(outPath, body);
    return true;
  }

  return false;
};

// Also runnable on its own: `node scripts/generate-galleries.mjs`
if (process.argv[1] && import.meta.url.endsWith(basename(process.argv[1]))) {
  const repoRoot = join(import.meta.dirname, "..");
  const changed = generateGalleries(repoRoot);
  console.log(changed ? "galleries.generated.js updated" : "galleries.generated.js already current");
}
