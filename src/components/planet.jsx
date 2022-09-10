import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Planet(props) {
  const { nodes, materials } = useGLTF('/planet.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.001']} position={[0, 1, 0]} rotation={[1.57, 0.43, -0.43]} scale={2.72} />
    </group>
  )
}

useGLTF.preload('/planet.glb')

export default Planet;
