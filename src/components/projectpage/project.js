import React from 'react';

import { Canvas } from '@react-three/fiber';
import Scene from './scene';

const Project = () => {
    return (
        <Canvas style={{width: '100vw', height: '100vh'}}>
            <Scene />
        </Canvas>
    )
};

export default Project;