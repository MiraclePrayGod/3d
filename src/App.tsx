    import React from 'react';
    import { Canvas } from '@react-three/fiber';
    import { Environment, OrbitControls, useGLTF, useTexture } from '@react-three/drei';
    import * as THREE from 'three';
    import ParticleBackground from './ParticleBackground';

    // ✅ Avatar principal
    function Avatar() {
        const { scene } = useGLTF('/avatar.glb');
        return <primitive object={scene} scale={1.5} />;
    }

    // ✅ Chaqueta 3D
    function Chaqueta() {
        const { scene } = useGLTF('/saco.glb');

        React.useEffect(() => {
            scene.traverse((child) => {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                    child.material.envMapIntensity = 2.5;
                    child.material.roughness = 0.4;
                    child.material.metalness = 0.1;
                }
            });
        }, [scene]);

        return (
            <primitive
                object={scene}
                scale={1.5}
                position={[-0.05, 1.56, 0.082]}
                rotation={[0, 199.48, 0]}
            />
        );
    }

    // ✅ Piso texturizado
    const Piso = () => {
        const texture = useTexture('/ff.jpg');
        return (
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial map={texture} roughness={0.2} metalness={0.3} />
            </mesh>
        );
    };

    // ✅ Habitacion con paredes texturizadas
    const Habitacion = () => {
        const textura = useTexture('/pared.jpg');
        return (
            <>
                {/* Pared trasera */}
                <mesh position={[0, 5, -5]}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial map={textura} />
                </mesh>

                {/* Pared delantera */}
                <mesh position={[0, 5, 5]} rotation={[0, Math.PI, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial map={textura} />
                </mesh>

                {/* Pared izquierda */}
                <mesh position={[-5, 5, 0]} rotation={[0, Math.PI / 2, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial map={textura} />
                </mesh>

                {/* Pared derecha */}
                <mesh position={[5, 5, 0]} rotation={[0, -Math.PI / 2, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial map={textura} />
                </mesh>
            </>
        );
    };

    // ✅ Componente principal
    const App: React.FC = () => {
        return (
            <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
                {/* Visor 3D */}
                <div style={{ flex: 1, backgroundColor: '#ffffff' }}>
                    <Canvas camera={{ position: [0, 1.6, 3] }} shadows>
                        <ambientLight intensity={1.2} />
                        <directionalLight intensity={2} position={[5, 5, 5]} castShadow />
                        <Environment preset="city" />
                        <OrbitControls target={[0, 1.6, 0]} />

                        {/* Fondo dinámico */}
                        <ParticleBackground />

                        {/* Modelos */}
                        <Avatar />
                        <Chaqueta />
                        <Piso />
                        <Habitacion />
                    </Canvas>
                </div>

                {/* Panel lateral */}
                <div style={{
                    flex: 0.4,
                    padding: '2rem',
                    backgroundColor: '#111',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <h2>Opciones del Avatar</h2>
                    <button style={buttonStyle}>Cambiar Avatar</button>
                    <button style={buttonStyle}>Comprar Ropa</button>
                    <button style={buttonStyle}>Guardar Cambios</button>
                </div>
            </div>
        );
    };

    const buttonStyle: React.CSSProperties = {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
    };

    export default App;

    // ✅ Precargar modelos
    useGLTF.preload('/avatar.glb');
    useGLTF.preload('/saco.glb');
