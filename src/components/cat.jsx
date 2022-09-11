import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

function Cat(props) {
  console.log('loading cat!!!!!!!!')
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./cat.glb')

  const { actions } = useAnimations(animations, group)
  const { viewport } = useThree()
  useEffect(() => {
    actions.ArmatureAction.play()
  })
  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    group.current.position.set(x, y, 0)
    group.current.rotation.set(-y, x, 0)
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

useGLTF.preload('./cat.glb')

export default Cat;
