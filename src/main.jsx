import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// NOTE: StrictMode is intentionally disabled. It double-mounts components in
// dev, which makes react-three-fiber create and immediately destroy a WebGL
// context for every <Canvas> (this page has several). That burst exceeds the
// browser's WebGL context limit and the canvases render blank ("Context Lost").
createRoot(document.getElementById('root')).render(
  <App />,
)
