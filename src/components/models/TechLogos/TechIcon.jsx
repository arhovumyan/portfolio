import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useEffect } from "react"
import * as THREE from 'three'
import { useInView } from "../../../hooks/useInView.js"

const TechIcon = ({model}) => {
    const scene = useGLTF(model.modelPath)

    // Each icon is its own WebGL canvas; pause it while off-screen so the row
    // of canvases doesn't all animate every frame during scrolling.
    const [containerRef, inView] = useInView({ rootMargin: '200px' })

    useEffect(() => {
        if (model.name === 'Three.js') {
            scene.scene.traverse((child) => {
                if (child.isMesh && child.name === 'Object_5') {
                    child.material = new THREE.MeshStandardMaterial({
                        color: 'white'
                    })
                }
            })
        }
    }, [scene])

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      <Canvas dpr={[1, 1.5]} frameloop={inView ? 'always' : 'never'}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Environment preset="city" />

          <OrbitControls enableZoom={false} />

          <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
              <group scale={model.scale} rotation={model.rotation}>
                  <primitive object={scene.scene}/>
              </group>
          </Float>
      </Canvas>
    </div>
)}

export default TechIcon
