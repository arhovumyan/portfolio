import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

// Pop-up viewer for a gallery item.
//
// Rendered through a portal onto <body> on purpose: .domain-section animates in
// with a transform, and a transformed ancestor becomes the containing block for
// its `position: fixed` descendants. Left inside the section, this overlay gets
// trapped in — and scaled by — that section instead of covering the page.
const MediaLightbox = ({ items, index, onClose, onNavigate }) => {
  const item = items[index];

  const step = useCallback(
    (delta) => {
      onNavigate((index + delta + items.length) % items.length);
    },
    [index, items.length, onNavigate]
  );

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    window.addEventListener("keydown", onKeyDown);
    // The page behind must not scroll while the pop-up is up.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, step]);

  if (!item) return null;

  const isVideo = item.type === "video";

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.caption ?? "Media viewer"}
      onClick={onClose}
    >
      <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
        <div className="lightbox-toolbar">
          <a href={item.src} target="_blank" rel="noreferrer">
            Open original
          </a>
          <button type="button" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="lightbox-stage">
          {isVideo ? (
            <video
              key={item.src}
              className="lightbox-video"
              src={item.src}
              controls
              autoPlay
              playsInline
              preload="metadata"
            />
          ) : (
            // The web-sized copy, not the original: these are phone photos
            // several thousand pixels wide, and decoding one at full resolution
            // to fill a panel this size is what made opening them crawl.
            <img
              className="lightbox-image"
              src={item.thumb ?? item.src}
              alt={item.caption ?? ""}
              decoding="async"
            />
          )}
        </div>

        <div className="lightbox-footer">
          {item.caption && <p className="lightbox-caption">{item.caption}</p>}

          {items.length > 1 && (
            <div className="lightbox-nav">
              <button type="button" onClick={() => step(-1)} aria-label="Previous">
                ‹
              </button>
              <span className="lightbox-counter">
                {index + 1} / {items.length}
              </span>
              <button type="button" onClick={() => step(1)} aria-label="Next">
                ›
              </button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default MediaLightbox;
