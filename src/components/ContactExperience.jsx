import { Environment, Float, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { Mail } from './Models/TechLogos/Mail.jsx'

const ContactExperience = () => {
  return (
    <Canvas camera={{ position: [0, 3, 8], fov: 45 }} shadows>
      <ambientLight intensity={0.5} color='#EAEFEF' />
      <directionalLight position={[5, 5, 3]} intensity={2.5} color='#EAEFEF' />
      <directionalLight
        position={[5, 9, 1]}
        intensity={2.5}
        color='#EAEFEF'
        castShadow
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <group position={[0, -1, 0]} scale={0.03} castShadow>
        <Mail />
      </group>
      <group scale={[1, 1, 1]}>
        <mesh
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color='#6E7FF3' />
        </mesh>
      </group>
    </Canvas>
  )
}

export default ContactExperience
