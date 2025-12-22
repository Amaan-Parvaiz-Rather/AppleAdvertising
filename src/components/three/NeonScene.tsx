import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function NeonTorus({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
      // Add floating effect manually
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[1, 0.3, 16, 50]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

function NeonSphere({ position, color, offset = 0 }: { position: [number, number, number]; color: string; offset?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7 + offset) * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

function ParticleField() {
  const count = 150;
  const particlesRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#a855f7"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#a855f7" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#06b6d4" />
      
      <NeonTorus position={[-3, 1, -2]} color="#a855f7" speed={0.8} />
      <NeonTorus position={[3, -1, -3]} color="#06b6d4" speed={0.6} />
      <NeonSphere position={[0, 2, -4]} color="#ec4899" offset={0} />
      <NeonSphere position={[-2, -2, -3]} color="#22d3ee" offset={1} />
      <NeonSphere position={[2.5, 0.5, -2]} color="#a855f7" offset={2} />
      
      <ParticleField />
    </>
  );
}

export default function NeonScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
          dpr={[1, 2]}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
