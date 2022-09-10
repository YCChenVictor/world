import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Cat(props) {
  const { nodes, materials } = useGLTF('/cat.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
      <mesh geometry={nodes['12221_Cat_v1_l3'].geometry} material={materials.Cat} />
    </group>
  )
}

useGLTF.preload('/cat.glb')

export default Cat;
