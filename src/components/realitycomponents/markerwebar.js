// import React, { useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { XRButton, XR } from "@react-three/xr";

// import { trackableImage as createTrackableImage } from "./markercomps/timg";
// // import Scene from "./Scene"

// function MarkerAR() {
//     const [trackableImage, setTrackableImage] = useState()

//     // const doCreateTrackableImage = async () => {
//     //     try {
//     //         const currTrackableImage = await createTrackableImage(image.current, 0.1)
//     //         setTrackableImage(currTrackableImage.image)
//     //     } catch (err) {
//     //         console.log(err);
//     //     }
//     // }

//     useEffect(() => {
//         const currTrackableImage = createTrackableImage('./logo.png', 0.1)
//         setTrackableImage(currTrackableImage.image);
//     }, []);

//     return (
//         <div>
//             <h1>WebXR Image Target</h1>
            
//             {/* <img
//                 className="trackedImage"
//                 onLoad={() => doCreateTrackableImage()}
//                 alt="webxr imagetracking"
//                 ref={image}
//                 src={process.env.PUBLIC_URL + "/logo.png"} 
//             /> */}
                
//             {trackableImage && <Canvas
//                 style={{ position: "absolute", left: 0, top: 0, width: '100vw' }}
//             >
//                 <XR>
//                     <XRButton 
//                         mode="AR"
//                         sessionInit={{
//                             requiredFeatures: ["image-tracking"],
//                             trackedImages: [trackableImage],
//                             // optionalFeatures: ['local-floor', 'bounded-floor']
//                         }}
//                     >
//                         Enter AR
//                     </XRButton>

//                     <mesh>
//                         <sphereGeometry />
//                         <meshPhongMaterial color={'skyblue'} />
//                     </mesh>
//                 </XR>
//             </Canvas>}
//         </div>
//     )
// }

// export default MarkerAR

import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
// import { Image } from 'react-bootstrap';
// import * as THREE from 'three';

function MarkerAR() {
    const [imageTarget, setImageTarget] = useState(null);

    let imgTrg = createImageBitmap('./logo.png');

    useEffect(() => {
        navigator.xr.requestSession('immersive-ar', {
            requiredFeatures: ['image-tracking'],
            trackedImages: [
                {
                    image: imgTrg, 
                    widthInMeters: 0.2
                }
            ]
        }).then((session) => {
            session.addEventListener('image-tracking', (event) => {
                const imageTarget = event.target;
                setImageTarget(imageTarget);
            });
        });
    }, []);

    return(
        <Canvas>
            <ambientLight />

            <directionalLight />

            {imageTarget && (
                <group ref={(ref) => {
                    if(ref){
                        ref.position.copy(imageTarget.position);
                        ref.quaternion.copy(imageTarget.quaternion);
                    }
                }}>
                    <mesh>
                        <sphereGeometry />
                        <meshPhongMaterial color={'skyblue'} />
                    </mesh>
                </group>
            )}
        </Canvas>
    );
};

export default MarkerAR;