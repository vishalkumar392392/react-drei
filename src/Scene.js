import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
  CubeCamera,
} from "@react-three/drei";

const Scene = () => {
  return (
    <>
      <OrbitControls />
      <Environment background files="./envMap/1.hdr" />
      {/* <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} /> */}
      <CubeCamera>
        {(texture) => (
          <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial
              envMap={texture}
              roughness={0}
              metalness={0.9}
            />
          </mesh>
        )}
      </CubeCamera>

      <mesh position-z={-5}>
        <boxGeometry />
        <meshBasicMaterial color={"purple"} />
      </mesh>
    </>
  );
};

export default Scene;
