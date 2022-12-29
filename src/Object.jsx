export default function CubeObject(args) {
  return (
    <mesh rotation={args.rotation} position={args.position} scale={args.scale}>
      <boxGeometry />
      <meshStandardMaterial color={args.color} />
    </mesh>
  );
}
