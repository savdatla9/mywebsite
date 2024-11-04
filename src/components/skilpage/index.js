import React from 'react';

import { Canvas } from '@react-three/fiber';

import { Stars } from '@react-three/drei';

import Scene from './skil';

const Skills = () => {
    
    return(
        <Canvas style={{width: '100%', height: '100vh'}}>
            <directionalLight />

            <ambientLight />

            <Stars radius={100} depth={50} count={10000} factor={4} saturation={0} fade speed={1} />

            <React.Suspense>
                <Scene />
            </React.Suspense>
        </Canvas>
    );
};

export default Skills;