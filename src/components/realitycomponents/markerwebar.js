// import React from 'react';
// import 'aframe';

// const MarkerAR = () => {
//     return (
//         <div>
//             <h3 style={{textAlign: 'center'}}>Marker AR</h3>

//             <main>
//                 <a-scene
//                     vr-mode-ui="enabled: false"
//                     embedded arjs="sourceType: webcam; debugUIEnabled: false;"
//                 >
//                     <a-marker preset="hiro">
//                         <a-box
//                             position="0 0.5 0"
//                             material="color: blue;"
//                             animation="property: rotation; to: 0 360 0; loop: true; dur: 5000"
//                         />
//                     </a-marker>

//                     <a-entity camera></a-entity>
//                 </a-scene>
//             </main>
//         </div>
//     );
// };

// export default MarkerAR;

import React, { useEffect, useRef } from 'react';
import {MindARThree} from 'mind-ar/dist/mindar-image-three.prod.js';
import * as THREE from 'three';

export default function MarkerAR ()  {
    const containerRef = useRef(null);

    useEffect(() => {
        const mindarThree = new MindARThree({
            container: containerRef.current,
            imageTargetSrc: "https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/card.mind"
        });
        
        const {renderer, scene, camera} = mindarThree;

        const anchor = mindarThree.addAnchor(0);

        const geometry = new THREE.PlaneGeometry(1, 0.55);

        const material = new THREE.MeshBasicMaterial( {color: 0x00ffff, transparent: true, opacity: 0.5} );

        const plane = new THREE.Mesh( geometry, material );

        anchor.group.add(plane);

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
        <div 
            style={{width: "100%", height: "100%"}} 
            ref={containerRef}
        ></div>
    )
};

// import React, { useRef, useEffect } from 'react';
// import { Canvas } from '@react-three/fiber';
// // import * as THREE from 'three';

// const MarkerAR = () => {
//     const markerRef = useRef(null);

//     useEffect(() => {
//         const arToolkitSource = new window.THREEx.ArToolkitSource({
//             sourceType: 'webcam'
//         });

//         const arToolkitContext = new window.THREEx.ArToolkitContext({
//             cameraParametersUrl: 'camera_para.dat',
//             detectionMode: 'mono',
//         });

//         arToolkitSource.init(() => {
//             arToolkitContext.init(() => {
//                 const camera = markerRef.current.children[0];
//                 camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
//             });
//         });

//         const onResize = () => {
//             arToolkitSource.onResize();
//             arToolkitSource.copySizeTo(markerRef.current);
            
//             if (arToolkitContext.arController !== null) {
//                 arToolkitSource.copySizeTo(markerRef.current.children[0]);
//             }
//         };

//         window.addEventListener('resize', onResize);

//         return () => {
//             window.removeEventListener('resize', onResize);
//         };
//     }, []);

//     return (
//         <Canvas>
//             <group ref={markerRef}>
//                 <ambientLight />

//                 <pointLight position={[10, 10, 10]} />
                
//                 <mesh position={[0, 0, 0]}>
//                     <boxGeometry args={[1, 1, 1]} />
//                     <meshStandardMaterial color="orange" />
//                 </mesh>
//             </group>
//         </Canvas>
//     );
// };

// export default MarkerAR;