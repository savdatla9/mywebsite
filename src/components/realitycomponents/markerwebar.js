import React, { useEffect, useRef } from 'react';
import { MindARThree } from 'mind-ar/dist/mindar-image-three.prod.js';
import { 
    Text3D, 
    // useGLTF, 
} from "@react-three/drei";

import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json'

function Content(){
    return (
        <group>
            <Text3D font={typefaceFont} size={0.3}>
                Welcome Darling
                <meshPhysicalMaterial color={'hotpink'} />
            </Text3D>
        </group>
    );
};

export default function MarkerAR ()  {
    const containerRef = useRef(null);

    useEffect(() => {
        const mindarThree = new MindARThree({
            container: containerRef.current,
            imageTargetSrc: "https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/card.mind"
        });

        const {renderer, scene, camera} = mindarThree;

        const anchor = mindarThree.addAnchor(0);

        const moesh =  Content();

        anchor.group.add(moesh);

        mindarThree.start();
            renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
        });

        return () => {
            renderer.setAnimationLoop(null);
            mindarThree.stop();
        };
    }, []);

    return (
        <div style={{textAlign: 'center'}}>
            <h1 style={{textDecorationLine: 'underline'}}>Web AR - (Image Target)</h1>

            <div 
                style={{width: "100vw", height: "85vh"}} 
                ref={containerRef}
            ></div>
        </div>
    )
};