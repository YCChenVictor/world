import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

function Cat(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/cat.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    console.log(actions)
    actions.ArmatureAction.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[0, 0, 0]} scale={2.35}>
          <primitive object={nodes.Bone001} />
          <primitive object={nodes.Bone018} />
          <skinnedMesh name="Cat" geometry={nodes.Cat.geometry} material={materials.Cat} skeleton={nodes.Cat.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/cat.glb')

export default Cat;
