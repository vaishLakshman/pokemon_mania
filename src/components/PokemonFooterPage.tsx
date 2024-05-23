import { OrbitControls, useFBX, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import "./PokemonFooterPage.css";

function PokemonFooterPage() {
  const pokeball = useFBX("./pokemon/pokeball.fbx");
//   const pokemonball = useGLTF("./pokemon/new.blend");

  return (
    <div className="container">
      <Canvas
        frameloop="demand"
        camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
      >
        <OrbitControls
          autoRotate
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        />
        <ambientLight intensity={0.5} />
        <primitive object={pokeball} scale={1} />
      </Canvas>
    </div>
  );
}

export default PokemonFooterPage;
