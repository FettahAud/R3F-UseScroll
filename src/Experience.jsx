import {
  MeshReflectorMaterial,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import CubeObject from "./Object";

export default function Experience() {
  const viewport = useThree((state) => state.viewport);
  const canvasSize = useThree((state) => state.size);
  return (
    <ScrollControls distance={1} pages={2}>
      <mesh scale={1.5} position={[0, 0, -2]}>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <MeshReflectorMaterial resolution={1024} color="#2B3467" />
      </mesh>
      <Scroll html style={{ width: "100%", height: "100vh" }}>
        <h1
          style={{
            position: "absolute",
            top: `-15vh`,
            left: `50%`,
            transform: "translateX(-50%)",
            textAlign: "center",
            fontSize: "10em",
            color: "#FCFFE7",
            userSelect: "none",
            fontFamily: "Sans-serif",
            width: "100%",
          }}
        >
          Hello R3F
        </h1>
      </Scroll>
      <Scroll>
        <mesh position={[viewport.width / 3, -viewport.height * 0, 0]}>
          <boxGeometry />
          <meshBasicMaterial color="#FCFFE7" />
        </mesh>
        <mesh position={[-viewport.width / 5, -viewport.height * 0.7, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color="#BAD7E9" />
        </mesh>
        <mesh
          rotation-y="21"
          position={[viewport.width / 3.5, -viewport.height * 1.2, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial color="#EB455F" />
        </mesh>
      </Scroll>
    </ScrollControls>
  );
}
