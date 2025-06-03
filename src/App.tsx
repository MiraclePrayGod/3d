import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// Avatar principal
function Avatar() {
    const { scene } = useGLTF('https://models.readyplayer.me/683f1068e7966b80ca0a5447.glb');
    return <primitive object={scene} scale={1.5} />;
}

// Chaqueta 3D cargada desde /public/chaqueta.glb
function Chaqueta() {
    const { scene } = useGLTF('/chaqueta.glb');
    return (
        <primitive
            object={scene}
            scale={1}
            position={[0.01, 1.83, 0.1]}  // Ajustado para ponerla a la altura del torso
            rotation={[0, 199.48, 0]}  // Rotación estable
        />
    );
}

const App: React.FC = () => {
    return (
        <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
            {/* Visor 3D */}
            <div style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <Canvas camera={{ position: [0, 1.6, 3] }}>
                    <ambientLight />
                    <directionalLight position={[5, 5, 5]} />
                    <OrbitControls target={[0, 1.6, 0]} />
                    <Avatar />
                    <Chaqueta />
                </Canvas>
            </div>

            {/* Panel de control */}
            <div style={{
                flex: 0.4,
                padding: '2rem',
                backgroundColor: '#111',
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

// Estilo de los botones
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
