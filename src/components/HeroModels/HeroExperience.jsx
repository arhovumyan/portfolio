import { OrbitControls, Float } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { Knife } from './Knife';
import HeroLights from './HeroLights.jsx';

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <HeroLights />
      
      {/* Float Component for Floating Knife */}
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group
          scale={isMobile ? 0.3 : [0.3, 0.3, 0.3]}
          position={isMobile ? [-1, -2.5, 0] : isTablet ? [0, -2.5, 0] : [0, 0, 0]}
          rotation={[0.3, -0.7, -0.6]}
        >
          <Knife />
        </group>
      </Float>
    </Canvas>
  );
};

export default HeroExperience;