import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, SoftShadows } from '@react-three/drei';

import Pages from './pages.js';
import HomeHtml from './home.js';
// import ExportButton from '../others/exporter.jsx';

export const config = {
    sections: ["home", "skills", "projects", "contact"],
};

function Home() {
    return(
        <>
            <Canvas camera={{ position: [0, 0.5, 5], fov: 42 }} style={{width: '100%', height: '100vh'}}>
                <color attach="background" args={["#282c34"]} />

                <ambientLight intensity={1} color={'#cccccc'} />

                <fog attach="fog" args={["#f5f3ee", 10, 50]} />

                <ScrollControls pages={0}>                    
                    <Scroll>
                        <Pages />
                    </Scroll>
                    <Scroll html>
                        <HomeHtml />
                    </Scroll>
                </ScrollControls>
                
                <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1.01, 0]} receiveShadow>
                    <planeGeometry args={[10, 10, 1, 1]} />
                    <shadowMaterial transparent opacity={0.75} />
                </mesh>

                <SoftShadows size={40} samples={16} />
            </Canvas>
        </>
    );
};

export default Home;