import { useRef } from 'react';
import { Float } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { Knife } from './Knife';
import HeroLights from './HeroLights.jsx';
import { useInView } from '../../hooks/useInView.js';

// Kept under the point where the tools above the handle clip off the top of
// the camera frustum. The canvas stays full-bleed so the model's on-screen
// size only depends on this — position moves it, not the canvas box.
const DESKTOP_SCALE = [0.3, 0.3, 0.3];
// Up and to the right, in world units (~72px each at hero size).
const DESKTOP_POSITION = [5, 2, 0];
const MOBILE_POSITION = [-1, -2.5, 0];
// Module constants so r3f doesn't re-apply (and reset) the rotation we mutate.
const BASE_ROTATION = [0.3, -0.7, -0.6];
const DRAG_SENSITIVITY = 0.008;

const HeroExperience = ({ onInteract }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // Pause the render loop when the canvas scrolls out of view so it doesn't
  // keep burning GPU/CPU (and competing with scroll) while off-screen.
  const [containerRef, inView] = useInView({ rootMargin: '200px' });

  // Dragging spins the model about its own axes. OrbitControls would instead
  // swing the camera around the scene origin, which reads as the knife
  // orbiting the middle of the page rather than turning in place.
  const spinRef = useRef(null);
  const isDragging = useRef(false);
  const lastPointer = useRef({ x: 0, y: 0 });

  const handlePointerDown = (event) => {
    if (isMobile) return;
    isDragging.current = true;
    lastPointer.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture?.(event.pointerId);
    onInteract?.();
  };

  const handlePointerMove = (event) => {
    if (!isDragging.current || !spinRef.current) return;

    const deltaX = event.clientX - lastPointer.current.x;
    const deltaY = event.clientY - lastPointer.current.y;
    lastPointer.current = { x: event.clientX, y: event.clientY };

    spinRef.current.rotation.y += deltaX * DRAG_SENSITIVITY;
    spinRef.current.rotation.x += deltaY * DRAG_SENSITIVITY;
  };

  const endDrag = (event) => {
    isDragging.current = false;
    event.currentTarget.releasePointerCapture?.(event.pointerId);
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        cursor: isMobile ? 'default' : 'grab',
        touchAction: 'pan-y',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        dpr={[1, 1.5]}
        frameloop={inView ? 'always' : 'never'}
        style={isMobile ? { pointerEvents: 'none' } : {}}
      >
        <HeroLights />

        {/* Float Component for Floating Knife */}
        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
          <group
            scale={isMobile ? 0.3 : DESKTOP_SCALE}
            position={isMobile ? MOBILE_POSITION : DESKTOP_POSITION}
          >
            <group ref={spinRef} rotation={BASE_ROTATION}>
              <Knife />
            </group>
          </group>
        </Float>
      </Canvas>
    </div>
  );
};

export default HeroExperience;
