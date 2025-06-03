import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleBackground() {
    const particlesRef = useRef<THREE.Points>(null);

    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = Math.random() * 10 - 5;
        positions[i * 3 + 1] = Math.random() * 10 - 5;
        positions[i * 3 + 2] = Math.random() * 10 - 5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    useFrame(() => {
        if (particlesRef.current) {
            particlesRef.current.rotation.y += 0.001;
        }
    });

    return (
        <points ref={particlesRef}>
            <primitive object={geometry} attach="geometry" />
            <pointsMaterial attach="material" color={0x8B5E3C} size={0.1} />
        </points>
    );
}

export default ParticleBackground;
