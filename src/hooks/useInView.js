import { useEffect, useRef, useState } from 'react';

// Tracks whether the referenced element is currently in the viewport.
// Used to pause expensive WebGL canvases (which otherwise render every frame,
// even while off-screen) so scrolling the rest of the page stays smooth.
export const useInView = ({ threshold = 0.05, rootMargin = '0px' } = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
};
