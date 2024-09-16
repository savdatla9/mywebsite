import React from 'react';
import 'aframe';

const MarkerAR = () => {
    return (
        <div>
            <h3 style={{textAlign: 'center'}}>Marker AR</h3>

            <main>
                <a-scene
                    vr-mode-ui="enabled: false"
                    embedded arjs="sourceType: webcam; debugUIEnabled: false;"
                >
                    <a-marker preset="hiro">
                        <a-box
                        position="0 0.5 0"
                        material="color: blue;"
                        animation="property: rotation; to: 0 360 0; loop: true; dur: 5000"
                        />
                    </a-marker>

                    <a-entity camera></a-entity>
                </a-scene>
            </main>
        </div>
    );
};

export default MarkerAR;

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