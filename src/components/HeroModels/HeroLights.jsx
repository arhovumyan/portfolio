import { Environment, Lightformer } from '@react-three/drei'

// Even, wrap-around lighting. The old setup used tight spotlights sitting a
// couple of units from the model — fine when it was small, but a spotlight's
// intensity falls off with distance, so at hero scale only the nearest corner
// lit up. Directional lights don't fall off, so the whole knife reads no
// matter how large it gets or how it's rotated.
//
// The steel is metallic, and metal shows reflections rather than direct light,
// so the Environment below builds a small studio out of coloured panels. It's
// generated in-engine from the Lightformers — no HDR file is fetched — and it
// is what gives the blades their purple/blue sheen as they turn.
const HeroLights = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <hemisphereLight args={['#d9ecff', '#0e0e10', 0.5]} />

      {/* Key light, front-right */}
      <directionalLight position={[6, 7, 8]} intensity={1.8} />

      {/* Clean white spot on the knife itself */}
      <spotLight
        position={[5, 9, 7]}
        target-position={[5, 2, 0]}
        angle={0.75}
        penumbra={0.85}
        intensity={320}
        color="#ffffff"
      />

      {/* Cool fill from the left so the shadowed side doesn't go flat black */}
      <directionalLight position={[-7, 3, 4]} intensity={0.9} color="#839cb5" />

      {/* Purple wash across the blades, sitting near the knife so it actually
          lands on it rather than falling off before it gets there. */}
      <pointLight position={[3, 0.5, 5]} intensity={160} color="#a259ff" />
      <spotLight
        position={[1, 8, 5]}
        target-position={[5, 2, 0]}
        angle={1}
        penumbra={1}
        intensity={420}
        color="#8b5cf6"
      />
      {/* Purple rim from behind the tools */}
      <pointLight position={[8, 3, -4]} intensity={140} color="#7b3ff2" />

      {/* Rim from behind to pick out the tools fanning out */}
      <directionalLight position={[3, 2, -7]} intensity={0.7} color="#4cc0f0" />

      <Environment resolution={128}>
        <Lightformer
          form="rect"
          intensity={1.6}
          color="#d9ecff"
          position={[0, 4, -8]}
          scale={[14, 8, 1]}
        />
        <Lightformer
          form="rect"
          intensity={3.4}
          color="#a259ff"
          position={[-7, 0, 2]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[12, 7, 1]}
        />
        <Lightformer
          form="rect"
          intensity={2.2}
          color="#8b5cf6"
          position={[0, -6, 2]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[12, 8, 1]}
        />
        <Lightformer
          form="rect"
          intensity={1.5}
          color="#4cc0f0"
          position={[7, 1, 2]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[12, 7, 1]}
        />
        <Lightformer
          form="circle"
          intensity={2.2}
          color="#ffffff"
          position={[0, 7, 3]}
          scale={6}
        />
      </Environment>
    </>
  )
}

export default HeroLights
