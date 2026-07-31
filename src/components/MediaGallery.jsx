import { useState } from "react";

import MediaLightbox from "./MediaLightbox.jsx";

// A grid of thumbnails that opens MediaLightbox on click. Each item is
// { src, thumb?, type?: "image" | "video", caption? } — `thumb` lets the grid
// load a small file while the pop-up shows the item on its own.
const MediaGallery = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  if (items.length === 0) return null;

  return (
    <>
      <ul className="media-grid">
        {items.map((item, index) => {
          const isVideo = item.type === "video";

          return (
            <li key={item.src}>
              <button
                type="button"
                className="media-thumb"
                onClick={() => setOpenIndex(index)}
                aria-label={
                  item.caption
                    ? `Open ${isVideo ? "video" : "image"}: ${item.caption}`
                    : `Open ${isVideo ? "video" : "image"} ${index + 1}`
                }
              >
                {isVideo ? (
                  // No poster frames for these clips, so the first frame is
                  // pulled in via a metadata-only preload instead.
                  <video src={`${item.src}#t=0.1`} preload="metadata" muted playsInline />
                ) : (
                  <img
                    src={item.thumb ?? item.src}
                    alt={item.caption ?? ""}
                    loading="lazy"
                    decoding="async"
                  />
                )}

                <span className="media-thumb-badge" aria-hidden="true">
                  {isVideo ? (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 3 3 3 3 9" />
                      <polyline points="15 21 21 21 21 15" />
                      <line x1="3" y1="3" x2="10" y2="10" />
                      <line x1="21" y1="21" x2="14" y2="14" />
                    </svg>
                  )}
                </span>

                {item.caption && <span className="media-thumb-caption">{item.caption}</span>}
              </button>
            </li>
          );
        })}
      </ul>

      {openIndex !== null && (
        <MediaLightbox
          items={items}
          index={openIndex}
          onNavigate={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
};

export default MediaGallery;
