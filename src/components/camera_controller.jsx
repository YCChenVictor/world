import { useThree } from '@react-three/fiber'
import { useEffect } from 'react';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 0;
      controls.maxDistance = 1000;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};

export default CameraController;
