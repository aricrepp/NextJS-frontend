import * as THREE from "three";
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MarchingCubes,
  MarchingCube,
  Environment,
  Bounds,
} from "@react-three/drei";
import {
  Physics,
  RigidBody,
  BallCollider,
  RapierRigidBody,
} from "@react-three/rapier";

interface MetaBallProps {
  color: THREE.Color;
  position: [number, number, number];
  spread: boolean;
  melting: boolean;
  index: number;
}

const MetaBall: React.FC<MetaBallProps> = ({
  color,
  position,
  spread,
  melting,
  ...props
}) => {
  const api = useRef<RapierRigidBody>(null);
  const strength = useRef<number>(0.35);
  const meltProgress = useRef<number>(0);
  const meltDelay = useRef<number>(Math.random() * 2);
  const isMelting = useRef<boolean>(false);
  const vec = new THREE.Vector3();

  useFrame((state, delta) => {
    if (!api.current) return;

    if (melting) {
      if (meltDelay.current > 0) {
        meltDelay.current -= delta;
      } else {
        isMelting.current = true;
      }

      if (isMelting.current) {
        meltProgress.current = Math.min(meltProgress.current + delta * 0.5, 1);
        const easeProgress = Math.sin(meltProgress.current * Math.PI * 0.5);

        const meltForce = new THREE.Vector3(
          (Math.random() - 0.5) * 0.0005,
          -0.001 * easeProgress,
          (Math.random() - 0.5) * 0.0005
        );

        api.current?.applyImpulse(meltForce, true);
        strength.current = Math.max(0.35 * (1 - easeProgress * 0.5), 0.1);
      }
    } else {
      meltProgress.current = 0;
      strength.current = 0.35;
      meltDelay.current = Math.random() * 2;
      isMelting.current = false;

      if (!spread) {
        delta = Math.min(delta, 0.1);
        api.current?.applyImpulse(
          vec
            .copy(api.current.translation())
            .normalize()
            .multiplyScalar(delta * -0.05),
          true
        );
      }
    }
  });

  useFrame((state, delta) => {
    if (!api.current) return;
    if (melting) {
      meltProgress.current = Math.min(meltProgress.current + delta * 0.5, 1);

      const easeProgress = Math.sin(meltProgress.current * Math.PI * 0.5);

      const meltForce = new THREE.Vector3(
        (Math.random() - 0.5) * 0.0005,
        -0.001 * easeProgress,
        (Math.random() - 0.5) * 0.0005
      );

      api.current.applyImpulse(meltForce, true);
      strength.current = Math.max(0.35 * (1 - easeProgress * 0.5), 0.1);
    } else {
      meltProgress.current = 0;
      strength.current = 0.35;

      if (!spread) {
        delta = Math.min(delta, 0.1);
        api.current?.applyImpulse(
          vec
            .copy(api.current.translation())
            .normalize()
            .multiplyScalar(delta * -0.05),
          true
        );
      }
    }
  });

  useEffect(() => {
    if (!api.current) return;

    if (spread) {
      const spreadForce = new THREE.Vector3(
        (Math.random() - 0.5) * 1.1,
        (Math.random() - 0.5) * 1.1,
        (Math.random() - 0.5) * 1.1
      ).multiplyScalar(0.02);
      api.current.applyImpulse(spreadForce, true);
    }
  }, [spread]);

  return (
    <RigidBody
      ref={api}
      position={position}
      colliders={false}
      linearDamping={melting ? 3 : 4}
      angularDamping={0.95}
      {...props}
    >
      <MarchingCube strength={strength.current} subtract={6} color={color} />
      <BallCollider args={[0.1]} />
    </RigidBody>
  );
};

const Pointer = ({ vec = new THREE.Vector3() }) => {
  const ref = useRef<RapierRigidBody>(null!);
  useFrame(({ pointer, viewport }) => {
    const { width, height } = viewport.getCurrentViewport();
    vec.set(-pointer.x * (width / 2), pointer.y * (height / 2), 0);
    ref.current.setNextKinematicTranslation(vec);
  });
  return (
    <RigidBody type="kinematicPosition" colliders={false} ref={ref}>
      <MarchingCube
        strength={0.5}
        subtract={10}
        color={new THREE.Color("white")}
      />
      <BallCollider args={[0.1]} />
    </RigidBody>
  );
};

export const App = () => {
  const [spread, setSpread] = useState(false);
  const [melting, isMelting] = useState(false);

  const handleClick = () => {
    setSpread(true);
    setTimeout(() => setSpread(false), 500);
  };

  useEffect(() => {
    const handleCustomClick = (e: Event) => {
      const customEvent = e as CustomEvent<{ message: string }>;
      console.log("Received click:", customEvent.detail.message);
      if (customEvent.detail.message === "Start") {
        isMelting(true);
      } else {
        isMelting(false);
      }
    };

    window.addEventListener("customClick", handleCustomClick);
    return () => {
      window.removeEventListener("customClick", handleCustomClick);
    };
  }, []);

  return (
    <div className="absolute w-full h-dvh z-10">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 15], fov: 45 }}>
        <color attach="background" args={["#4e41e4"]} />
        <ambientLight intensity={1} />
        <Physics gravity={[0, 2, 0]}>
          <MarchingCubes
            resolution={80}
            maxPolyCount={10000}
            enableUvs={false}
            enableColors
            onClick={handleClick}
          >
            <meshStandardMaterial vertexColors roughness={4} />
            <MetaBall
              color={new THREE.Color("skyblue")}
              position={[1, 1, 0.5]}
              spread={spread}
              melting={melting}
              index={0}
            />
            <MetaBall
              color={new THREE.Color("skyblue")}
              position={[-1, -1, -0.5]}
              spread={spread}
              melting={melting}
              index={1}
            />
            <MetaBall
              color={new THREE.Color("skyblue")}
              position={[2, 2, 0.5]}
              spread={spread}
              melting={melting}
              index={2}
            />
            <MetaBall
              color={new THREE.Color("skyblue")}
              position={[-2, -2, -0.5]}
              spread={spread}
              melting={melting}
              index={3}
            />
            <MetaBall
              color={new THREE.Color("skyblue")}
              position={[3, 3, 0.5]}
              spread={spread}
              melting={melting}
              index={4}
            />
            <MetaBall
              color={new THREE.Color("skyblue")}
              position={[-3, -3, -0.5]}
              spread={spread}
              melting={melting}
              index={5}
            />
            <MetaBall
              color={new THREE.Color("skyblue")}
              position={[-1.5, -1.5, -0.5]}
              spread={spread}
              melting={melting}
              index={6}
            />
            <MetaBall
              color={new THREE.Color("skyblue")}
              position={[-2.5, -2.5, -0.5]}
              spread={spread}
              melting={melting}
              index={7}
            />
            <MetaBall
              color={new THREE.Color("skyblue")}
              position={[1.5, 1.5, -0.5]}
              spread={spread}
              melting={melting}
              index={8}
            />
            <MetaBall
              color={new THREE.Color("skyblue")}
              position={[2.5, 2.5, -0.5]}
              spread={spread}
              melting={melting}
              index={9}
            />
            <Pointer />
          </MarchingCubes>
        </Physics>
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/industrial_workshop_foundry_1k.hdr" />
        <Bounds fit margin={-1.3}>
          <mesh visible={false}>
            <boxGeometry />
          </mesh>
        </Bounds>
      </Canvas>
    </div>
  );
};
