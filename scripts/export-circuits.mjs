// Re-exports the KiCad project into the web assets the Hardware page serves.
//
//   node scripts/export-circuits.mjs [path/to/project.kicad_pro]
//
// The site never reads .kicad_sch / .kicad_pcb directly (browsers can't render
// them), so everything under public/circuits and public/images/circuits is
// generated here. Run this after changing the board, then commit the output.

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";

const KICAD_CLI =
  process.env.KICAD_CLI ?? "C:/Program Files/KiCad/10.0/bin/kicad-cli.exe";

const PROJECT = resolve(
  process.argv[2] ?? "C:/Users/aroho/Documents/pcb/newnew/newnew.kicad_pro"
);
const SLUG = "stm32f103";

const projectDir = dirname(PROJECT);
const stem = basename(PROJECT, ".kicad_pro");
const schematic = join(projectDir, `${stem}.kicad_sch`);
const board = join(projectDir, `${stem}.kicad_pcb`);

const repoRoot = resolve(import.meta.dirname, "..");
const pdfDir = join(repoRoot, "public/circuits");
const imgDir = join(repoRoot, "public/images/circuits");

// Copper + silkscreen + outline: enough to read the layout, without the fab and
// courtyard layers that only matter to a manufacturer.
const PLOT_LAYERS = "F.Cu,B.Cu,F.SilkS,B.SilkS,Edge.Cuts";

const kicad = (args) => {
  execFileSync(KICAD_CLI, args, { stdio: "inherit" });
};

// KiCad plots SVG with a transparent background, which leaves the schematic's
// dark ink invisible on a dark page and the board's dark-theme colours washed
// out on a light one. Paint each one onto the background it was drawn for.
const setSvgBackground = (file, color) => {
  const svg = readFileSync(file, "utf8");
  if (svg.includes("data-generated-background")) return;

  const patched = svg.replace(
    /(<svg\b[^>]*>)/,
    `$1\n<rect data-generated-background="true" x="0" y="0" width="100%" height="100%" fill="${color}"/>`
  );
  writeFileSync(file, patched);
};

for (const dir of [pdfDir, imgDir]) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

// PDFs — what the "Schematic PDF" / "PCB layout PDF" links open.
kicad(["sch", "export", "pdf", schematic, "-o", join(pdfDir, `${SLUG}-board-schematic.pdf`)]);
kicad([
  "pcb", "export", "pdf", board,
  "-o", join(pdfDir, `${SLUG}-board-pcb.pdf`),
  "--mode-single",
  "--layers", PLOT_LAYERS,
  "--include-border-title",
]);

// SVGs — the zoomable images in the gallery.
kicad(["sch", "export", "svg", schematic, "-o", imgDir, "--no-background-color"]);
// `sch export svg` names its output after the sheet, so rename to the slug.
const schSvg = join(imgDir, `${SLUG}-schematic.svg`);
const schSvgRaw = join(imgDir, `${stem}.svg`);
if (existsSync(schSvgRaw)) {
  writeFileSync(schSvg, readFileSync(schSvgRaw));
  rmSync(schSvgRaw);
}
setSvgBackground(schSvg, "#ffffff");

const pcbSvg = join(imgDir, `${SLUG}-pcb.svg`);
kicad([
  "pcb", "export", "svg", board,
  "-o", pcbSvg,
  "--mode-single",
  "--layers", PLOT_LAYERS,
  "--page-size-mode", "2",
  "--exclude-drawing-sheet",
]);
setSvgBackground(pcbSvg, "#12121a");

// 3D render — the card's hero image. Transparent so it sits on the dark card.
kicad([
  "pcb", "render", board,
  "-o", join(imgDir, `${SLUG}-board.png`),
  "--width", "1600", "--height", "900",
  "--side", "top", "--zoom", "0.95",
  "--background", "transparent",
]);

console.log("\nCircuit assets written to public/circuits and public/images/circuits.");
