import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei';

const Background = props => {

  const {gl} = useThree();
  
  const texture = useTexture('./space.jpeg')
  const formatted = new THREE.WebGLCubeRenderTarget(texture.image.height).fromEquirectangularTexture(gl, texture)
  return(
    <primitive attach="background" object={formatted.texture} />
  )
}

export default Background;
