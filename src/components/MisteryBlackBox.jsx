import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const MisteryBlackBox = () => {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.to(boxRef.current, {
      opacity: 0,
      duration: 3,
      delay: 2.4,
      ease: "power2.inOut",
      pointerEvents: "none",
    });
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        // 100% rather than 100vw so the scrollbar isn't counted, which would
        // push the page sideways.
        width: "100%",
        height: "120px",
        background: "black",
        opacity: 1,
        zIndex: 9990,
        pointerEvents: "auto",
        transition: "opacity 0.3s",
      }}
    />
  );
};

export default MisteryBlackBox;