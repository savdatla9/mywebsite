import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';

import Pages from './pages';

export const config = {
    sections: ["home", "skills", "projects", "contact"],
};

function Home() {
    return(
        <>
            <Canvas camera={{ position: [0, 0.5, 5], fov: 42 }} style={{width: '100%', height: '100vh'}}>
                <color attach="background" args={["#282c34"]} />
                <fog attach="fog" args={["#f5f3ee", 10, 50]} />
                <ScrollControls
                    pages={config.sections.length}
                    damping={0.1}
                    maxSpeed={0.2}
                >
                    <group position-y={-1}>
                        <Pages />
                    </group>
                </ScrollControls>
            </Canvas>
        </>
    );
};

export default Home;