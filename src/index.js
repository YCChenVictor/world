import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Cat from './components/cat.jsx'
import Planet from './components/planet.jsx'
import Background from './components/background.jsx'
import CameraController from './components/camera_controller.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <div style={{ width: "100%", height: "100vh" }}>
    <BrowserRouter>
      <Canvas
        flat linear
        camera={{ fov: 75, position: [50, 5, 30]}}
      >
        <Suspense>
          <Background />
        </Suspense>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* <Planet position={[0, 0, 0]} /> */}
        {/* <Cat position={[-0, -20, -20]} /> */}
      </Canvas>
      <Routes>
        {/* <Route path="/" component={<Planet position={[-1.2, 0, 0]} />} /> */}
      </Routes>
    </BrowserRouter>
  </div>
)
