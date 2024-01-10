import { Cloud, Environment, Lightformer, OrbitControls, Sky, Sparkles, Stars, useHelper,} from "@react-three/drei";
import { useControls } from "leva";
import { useRef } from "react";
import * as THREE from "three";

const Scene = () => {
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, THREE.DirectionalLightHelper);
  const { sunPosition } = useControls("sky", {
    sunPosition: { value: [0, 1, 0] },
  });
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight castShadow ref={directionalLightRef} />

      <mesh castShadow position-y={1}>
        <boxGeometry />
        <meshStandardMaterial color="#C7CAC7" />
      </mesh>
      {/* <Sparkles count={3000} speed={0.2} size={2} scale={[10, 10, 10]} /> */}
      {/* <Stars
        radius={2}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Cloud
        opacity={1}
        speed={0.2}
        width={10}
        depth={2.5}
        segments={20}
        depthTest={false}
      /> */}

      {/* <Sky sunPosition={sunPosition} /> */}
      {/* <Environment
        background
        files={[
          "./envMap/px.png",
          "./envMap/nx.png",
          "./envMap/py.png",
          "./envMap/ny.png",
          "./envMap/pz.png",
          "./envMap/nz.png",
        ]}
      /> */}

      <Environment
        // background/
        files={"./envMap/1.hdr"}
        ground={{ height: 6, radius: 60, scale: 70 }}
      >
        {/* <Lightformer position-z={-1} scale={5} color={"orange"} intensity={2} /> */}
      </Environment>

      <mesh receiveShadow position-y={0} rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#CC3941" />
      </mesh>
    </>
  );
};

export default Scene;
