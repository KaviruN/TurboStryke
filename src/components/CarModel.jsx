import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import laferrariModel from "../assets/laferrari.glb";

// Preload the model
useGLTF.preload(laferrariModel);

function Model(props) {
  const { scene } = useGLTF(laferrariModel);
  return <primitive object={scene} {...props} />;
}

function CarModels() {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ fov: 40 }}
      className="car-models-canvas"
    >
      <PresentationControls
        speed={1.5}
        global
        zoom={1}
        polar={[-0.1, Math.PI / 4]}
      >
        <Stage environment={null} intensity={0.1} shadows={false}>
          <ambientLight intensity={0.05} />
          <directionalLight position={[5, 5, 5]} intensity={0.15} castShadow />
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}

export default CarModels;
