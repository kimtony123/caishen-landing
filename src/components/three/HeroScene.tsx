import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface NeuronData {
  position: THREE.Vector3;
  color: string;
  dendrites: THREE.Vector3[];
  axonEnd: THREE.Vector3;
}

function Neuron({ position, color, dendrites, axonEnd }: NeuronData) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime;
      const pulse = Math.sin(t * 1.5 + position.x * 2) * 0.06 + 1;
      groupRef.current.scale.setScalar(pulse);
    }
  });

  const dendritePositions = useMemo(() => {
    const pts: number[] = [];
    dendrites.forEach((d) => {
      pts.push(position.x, position.y, position.z);
      pts.push(d.x, d.y, d.z);
    });
    return pts;
  }, [dendrites, position]);

  const axonPositions = useMemo(() => {
    return [position.x, position.y, position.z, axonEnd.x, axonEnd.y, axonEnd.z];
  }, [position, axonEnd]);

  return (
    <group ref={groupRef} position={[position.x, position.y, position.z]}>
      <mesh>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.3}
        />
      </mesh>

      <mesh scale={[1, 1, 1]}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.15}
        />
      </mesh>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={dendritePositions.length / 3}
            array={new Float32Array(dendritePositions)}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={color} transparent opacity={0.35} linewidth={1} />
      </lineSegments>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array(axonPositions)}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={color} transparent opacity={0.6} linewidth={1} />
      </lineSegments>
    </group>
  );
}

function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);

  const { neurons, axonConnections } = useMemo(() => {
    const count = 14;
    const neurons: NeuronData[] = [];
    const connections: { from: number; to: number }[] = [];

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi * 0.7;
      const r = 2.0;
      const pos = new THREE.Vector3(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi) * 0.7
      );

      const isGreen = Math.random() > 0.35;
      const color = isGreen ? "#00ff88" : "#ff3366";

      const dendriteCount = 3 + Math.floor(Math.random() * 3);
      const dendrites: THREE.Vector3[] = [];
      for (let d = 0; d < dendriteCount; d++) {
        const dr = 0.25 + Math.random() * 0.35;
        const dphi = Math.random() * Math.PI;
        const dtheta = Math.random() * Math.PI * 2;
        dendrites.push(new THREE.Vector3(
          pos.x + dr * Math.sin(dphi) * Math.cos(dtheta),
          pos.y + dr * Math.sin(dphi) * Math.sin(dtheta),
          pos.z + dr * Math.cos(dphi)
        ));
      }

      const axr = 0.4 + Math.random() * 0.6;
      const axphi = Math.random() * Math.PI;
      const axtheta = Math.random() * Math.PI * 2;
      const axonEnd = new THREE.Vector3(
        pos.x + axr * Math.sin(axphi) * Math.cos(axtheta),
        pos.y + axr * Math.sin(axphi) * Math.sin(axtheta),
        pos.z + axr * Math.cos(axphi)
      );

      neurons.push({ position: pos, color, dendrites, axonEnd });
    }

    for (let i = 0; i < count; i++) {
      const links = 1 + Math.floor(Math.random() * 2);
      for (let l = 0; l < links; l++) {
        const target = Math.floor(Math.random() * count);
        if (target !== i) {
          connections.push({ from: i, to: target });
        }
      }
    }

    return { neurons, axonConnections: connections };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.07;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.04) * 0.15;
    }
  });

  const networkLines = useMemo(() => {
    const positions: number[] = [];
    axonConnections.forEach(({ from, to }) => {
      const a = neurons[from];
      const b = neurons[to];
      if (a && b) {
        positions.push(a.axonEnd.x, a.axonEnd.y, a.axonEnd.z);
        positions.push(b.position.x, b.position.y, b.position.z);
      }
    });
    return positions;
  }, [axonConnections, neurons]);

  return (
    <group ref={groupRef}>
      {neurons.map((n, i) => (
        <Neuron key={i} {...n} />
      ))}

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={networkLines.length / 3}
            array={new Float32Array(networkLines)}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00ff88" transparent opacity={0.12} />
      </lineSegments>
    </group>
  );
}

function BioCandlesticks() {
  const groupRef = useRef<THREE.Group>(null);

  const candles = useMemo(() => {
    const list: {
      pos: [number, number, number];
      isGreen: boolean;
      bodyH: number;
      wickT: number;
      wickB: number;
    }[] = [];
    for (let i = 0; i < 16; i++) {
      const angle = (i / 16) * Math.PI * 2;
      const r = 1.3 + Math.random() * 0.8;
      const x = Math.cos(angle) * r;
      const y = (Math.random() - 0.5) * 2.2;
      const z = Math.sin(angle) * r;
      const isGreen = Math.random() > 0.38;
      list.push({
        pos: [x, y, z],
        isGreen,
        bodyH: 0.18 + Math.random() * 0.3,
        wickT: 0.08 + Math.random() * 0.22,
        wickB: 0.08 + Math.random() * 0.22,
      });
    }
    return list;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = -state.clock.elapsedTime * 0.04;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.03) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {candles.map((c, i) => {
        const col = c.isGreen ? "#00ff88" : "#ff3366";
        const [px, py, pz] = c.pos;
        return (
          <group key={i}>
            <mesh position={[px, py + c.bodyH / 2 + c.wickT, pz]}>
              <cylinderGeometry args={[0.015, 0.015, c.wickT * 2 + 0.01, 6]} />
              <meshStandardMaterial color={col} emissive={col} emissiveIntensity={0.5} />
            </mesh>
            <mesh position={[px, py - c.bodyH / 2 - c.wickB, pz]}>
              <cylinderGeometry args={[0.015, 0.015, c.wickB * 2 + 0.01, 6]} />
              <meshStandardMaterial color={col} emissive={col} emissiveIntensity={0.5} />
            </mesh>
            <mesh position={[px, py, pz]}>
              <boxGeometry args={[0.14, c.bodyH, 0.1]} />
              <meshStandardMaterial
                color={col}
                emissive={col}
                emissiveIntensity={0.7}
                transparent
                opacity={0.88}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

function Particles() {
  const count = 600;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return arr;
  }, []);

  return (
    <Points positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ff88"
        size={0.022}
        sizeAttenuation
        depthWrite={false}
        opacity={0.45}
      />
    </Points>
  );
}

function GlowRing() {
  const ringRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.1;
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.06) * 0.1;
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[3.5, 0.01, 12, 150]} />
      <meshStandardMaterial
        color="#00ff88"
        emissive="#00ff88"
        emissiveIntensity={2}
        transparent
        opacity={0.35}
      />
    </mesh>
  );
}

const HeroScene: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 5]} intensity={0.6} color="#00ff88" />
      <pointLight position={[0, 0, -4]} intensity={0.3} color="#ff3366" />
      <Particles />
      <NeuralNetwork />
      <BioCandlesticks />
      <GlowRing />
    </Canvas>
  );
};

export default HeroScene;
