import * as THREE from 'three'

const HeroLights = () => {
    return (
    <>
        <spotLight
            position={[1, 3, 3]}
            intensity={50}
            penumbra={0.2}
            />
            
        <spotLight
            position={[5, 4, 4]}
            intensity={50}
            penumbra={0.2}
                color="#4cc0f0"
                angle={0.30}
            />
        <spotLight
            position={[4, 4, 4]}
            intensity={50}
            penumbra={0.2}
                color="blue"
                angle={0.30}
            />
            <primitive
                object={new THREE.RectAreaLight('#A259FF')}
            />
            <pointLight
                position={[0, 1, 0]}
                intensity={10}
                color="#7209b7"
            />
            

    </>
  )
}

export default HeroLights