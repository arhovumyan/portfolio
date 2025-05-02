import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { Knife } from './Knife';

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  
  return (
    //setting up the camera for the 3D model
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/*light to see whats going on*/}
      <ambientLight intensity={0.2} color='#1a1a40' />  
      <directionalLight position={[5, 5, 5]} intensity={4} />
      
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <group
        scale={isMobile ? 0.2 : [0.3,0.3,0.3]}
        position={isMobile ? [0, -2.5, 0] : [0,0,0]}
        rotation={[0, -Math.PI/4, 0]}>
        <Knife/>
      </group>
      
    </Canvas>
  )
}

export default HeroExperience
