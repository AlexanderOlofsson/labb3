import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ModelViewer = () => {
  const sofaModelPath = "/models/Sofa 01.glb";

  return (
    <div style={{ width: "100%", height: "450px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Canvas
        camera={{
          position: [0, 5, 10],
          fov: 50,
        }}
      >
        <OrbitControls
          minDistance={140}
          maxDistance={300}
          target={[0, 1, 0]}
        />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <React.Suspense fallback={null}>
          <Model path={sofaModelPath} />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

const Model = ({ path }: { path: string }) => {
  const gltf = useLoader(GLTFLoader, path);

  return (
    // @ts-ignore: Ignoring because library bug
    <primitive object={gltf.scene as THREE.Object3D} />
  );
};

export default ModelViewer;
