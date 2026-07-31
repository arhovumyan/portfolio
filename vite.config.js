import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { GALLERY_FOLDERS, generateGalleries } from './scripts/generate-galleries.mjs'

const repoRoot = dirname(fileURLToPath(import.meta.url))

// Keeps src/constants/galleries.generated.js in step with what's actually in
// public/images/<program>. Regenerates before every build and dev server start,
// and again whenever a file is added to or removed from those folders while the
// dev server is running — so a photo dropped in shows up without a restart.
const galleryManifest = () => ({
  name: 'gallery-manifest',
  buildStart() {
    generateGalleries(repoRoot)
  },
  configureServer(server) {
    const watched = GALLERY_FOLDERS.map((folder) => join(repoRoot, 'public/images', folder))
    server.watcher.add(watched)

    const refresh = (file) => {
      if (!watched.some((dir) => file.startsWith(dir))) return
      if (generateGalleries(repoRoot)) server.ws.send({ type: 'full-reload' })
    }

    server.watcher.on('add', refresh)
    server.watcher.on('unlink', refresh)
    server.watcher.on('change', refresh)
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [galleryManifest(), react(), tailwindcss()],
  assetsInclude: ['**/*.lottie'],
})
