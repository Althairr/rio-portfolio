import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  Float,
  MeshDistortMaterial,
  Sparkles,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

// Model komputer detail — dipakai untuk desktop saja
const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <group>
      <hemisphereLight intensity={0.25} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.65}
        position={isMobile ? [0, -2.8, -2.2] : [0, -2.8, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

// Versi ringan untuk mobile — tanpa load file eksternal sama sekali
const MobileHero = () => {
  return (
    <group position={[0, -1.8, 0]}>
      <hemisphereLight intensity={0.4} groundColor="black" />
      <pointLight intensity={1} position={[5, 5, 5]} />

      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1}>
        <mesh>
          <icosahedronGeometry args={[0.9, 1]} />
          <MeshDistortMaterial
            color="#915EFF"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.3}
          />
        </mesh>
      </Float>

      <Sparkles
        count={40}
        scale={3.5}
        size={2}
        speed={0.3}
        color="#00cea8"
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows={!isMobile}
      dpr={isMobile ? 1 : [1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        preserveDrawingBuffer: true,
        powerPreference: "default",
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {isMobile ? <MobileHero /> : <Computers isMobile={isMobile} />}
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;