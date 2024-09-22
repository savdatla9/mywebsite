import { Loader, PerformanceMonitor, SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, Fragment } from "react";

import { Experience } from "./Experience";
import { Leaderboard } from "./Leaderboard";

export default function Shooters() {
  const [downgradedPerformance, setDowngradedPerformance] = useState(false);

  return (
    <Fragment>
        <Loader />

        <Leaderboard />
        
        <Canvas
            shadows style={{width: '100%', height: '100vh', position: 'absolute'}}
            camera={{ position: [0, 30, 0], fov: 30, near: 2 }}
            dpr={[1, 1.5]} // optimization to increase performance on retina/4k devices
        >
            <SoftShadows size={42} />

            <PerformanceMonitor
            // Detect low performance devices
                onDecline={(fps) => {
                    setDowngradedPerformance(true);
                }}
            />

            <Suspense>
                <Physics>
                    <Experience downgradedPerformance={downgradedPerformance} />
                </Physics>
            </Suspense>

            {!downgradedPerformance && (
            // disable the postprocessing on low-end devices
                <EffectComposer disableNormalPass>
                    <Bloom luminanceThreshold={1} intensity={1.5} mipmapBlur />
                </EffectComposer>
            )}
        </Canvas>
    </Fragment>
  );
};