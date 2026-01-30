'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, Sparkles } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import styles from './Hero3D.module.css';

function Donut({ color, position, rotation, scale = 1, interact = false }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    if (interact) {
        // Subtle rotation on mouse move
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, state.pointer.y * 0.2, 0.1);
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, state.pointer.x * 0.2, 0.1);
    }
    
    if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(scale * 1.1, scale * 0.8, scale * 1.1), 0.1);
    } else {
        meshRef.current.scale.lerp(new THREE.Vector3(scale, scale * 0.7, scale), 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={interact ? 0.5 : 1} floatIntensity={interact ? 0.5 : 1}>
      <mesh 
        ref={meshRef}
        position={position} 
        rotation={rotation} 
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.3} 
          metalness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.canvasWrapper}>
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Environment preset="city" />
          <ambientLight intensity={0.7} />
          <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={1.5} color="#FFF8E1" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D4AF37" />
          
          <Sparkles count={50} scale={10} size={4} speed={0.4} opacity={0.5} color="#FFF" />

          {/* Main Hero Donut */}
          <Donut color="#5D4037" position={[2.5, 0, 0]} rotation={[0.5, -0.5, 0]} scale={1.8} interact={true} /> 
          
          {/* Background Elements */}
          <Donut color="#F4E4BC" position={[-3, 2, -4]} rotation={[-0.5, -0.2, 0]} scale={1.2} /> 
          <Donut color="#8D6E63" position={[-4, -3, -2]} rotation={[0, 0, 0.5]} scale={0.9} /> 
          <Donut color="#EFEBE9" position={[4, -4, -5]} rotation={[1, 0, 0]} scale={0.6} />
          
          <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={2.5} far={4} color="#3E2723" />
        </Canvas>
      </div>

      <div className={styles.overlay}>
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
           className={styles.contentBox}
        >
            <h1 className={styles.title}>
              OhDough<span className={styles.dot}>.</span>
            </h1>
            <p className={styles.subtitle}>
              Artisan Bomboloni &<br/>Japanese Soft Bread
            </p>
            <motion.a 
                href="#menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.ctaButton}
            >
                View Collection
            </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
