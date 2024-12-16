import React, { useState, useEffect } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { Mesh, MeshStandardMaterial, Object3D } from "three"; // ESLint
import "./ModelViewer.css";

const ModelViewer = ({
  modelPath = "/models/Sofa 01.glb",
  initialColor = "#808080",
  rotationSpeed = 0.002,
}: {
  modelPath?: string;
  initialColor?: string;
  rotationSpeed?: number;
}) => {
  const [color, setColor] = useState(initialColor);

  // Update color when the initialColor prop changes
  useEffect(() => {
    setColor(initialColor);
    console.log("Picked color:", initialColor); // Debugging, fix issue
  }, [initialColor]);

  return (
    <>
      <div className="model-viewer-container">
        <Canvas
          camera={{
            position: [0, 5, 10],
            fov: 50,
          }}
        >
          <OrbitControls minDistance={140} maxDistance={300} target={[0, 1, 0]} />
          <ambientLight intensity={10} />
          <pointLight position={[10, 10, 10]} />
          <React.Suspense fallback={null}>
            <Model path={modelPath} color={color} rotationSpeed={rotationSpeed} />
          </React.Suspense>
        </Canvas>
      </div>
    </>
  );
};

const Model = ({
  path,
  color,
  rotationSpeed,
}: {
  path: string;
  color: string;
  rotationSpeed: number;
}) => {
  const gltf = useLoader(GLTFLoader, path);

  // useFrame (rotating 3d-object)
  useFrame(() => {
    gltf.scene.rotation.y += rotationSpeed;
  });

  // change color of the 3d-object
  useEffect(() => {
    gltf.scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh;
        if (mesh.material && "color" in mesh.material) {
          (mesh.material as THREE.MeshStandardMaterial).color.set(color);
          console.log("Picked color:", color); // Debugging color, fix issue
        }
      }
    });
  }, [color]);

  return (
    // @ts-ignore: Ignore a library issue with the primitive prop
    <primitive object={gltf.scene as THREE.Object3D} />
  );
};

export default ModelViewer;
