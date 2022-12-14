import { Canvas } from '@react-three/fiber'
import Cat from './components/cat.jsx'
import Planet from './components/planet.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from 'react'
import Background from './components/background.jsx'
import CameraController from './components/camera_controller.jsx'

function App() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas
        flat linear
        camera={{ fov: 75, position: [4, 4, 10]}}
      >
        <CameraController />
        <Suspense>
          <Background />
        </Suspense>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Router>
          <Routes>
            <Route path="/planet" element={
              <Suspense>
                <Planet position={[0, 0, 0]} />
              </Suspense>
            } />
            <Route path="/cat" element={
              <Suspense>
                <Cat position={[0, 0, 0]} />
              </Suspense>
            } />
          </Routes>
        </Router>
      </Canvas>
    </div>
  );
}

export default App;
