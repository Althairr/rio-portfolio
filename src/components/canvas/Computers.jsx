import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

import CanvasLoader from "../Loader";

// Model komputer detail — dipakai untuk desktop saja
const Computers = ({ isMobile, isTablet }) => {
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
        scale={isMobile ? 0.55 : isTablet ? 0.58 : 0.65}
        position={
          isMobile
            ? [0, -2.8, -2.2]
            : isTablet
            ? [0, -2.8, -1.5]
            : [0, -2.8, -1.5]
        }
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

// Pengganti untuk mobile — murni CSS/framer-motion, tanpa WebGL sama sekali
const MobileFallback = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full translate-y-[80px]">
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.55, 0.85, 0.55],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute rounded-full w-52 h-52 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #915EFF 0%, #00cea8 60%, transparent 80%)",
        }}
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="relative w-36 h-36 rounded-3xl border-2 border-[#915EFF]/40"
        style={{
          background:
            "linear-gradient(135deg, rgba(145,94,255,0.25), rgba(0,206,168,0.15))",
        }}
      />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-16 h-16 rounded-2xl bg-[#050816] border border-[#00cea8]/60"
      />
    </div>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    const tabletQuery = window.matchMedia(
      "(min-width: 501px) and (max-width: 1024px)"
    );

    setIsMobile(mobileQuery.matches);
    setIsTablet(tabletQuery.matches);

    const handleMediaQueryChange = () => {
      setIsMobile(mobileQuery.matches);
      setIsTablet(tabletQuery.matches);
    };

    mobileQuery.addEventListener("change", handleMediaQueryChange);
    tabletQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mobileQuery.removeEventListener("change", handleMediaQueryChange);
      tabletQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Mobile: tidak menggunakan WebGL
  // if (isMobile) {
  //   return <MobileFallback />;
  // }

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={isTablet ? 1 : [1, 2]}
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

        <Computers
          isMobile={isMobile}
          isTablet={isTablet}
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;