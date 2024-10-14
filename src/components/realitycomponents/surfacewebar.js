import '@google/model-viewer';
import React, { useRef, useState, useEffect } from 'react';
import { MdOutlineViewInAr } from "react-icons/md";

const SurfaceAR = () => {
    const arBtn = useRef({});
    const [hide, setHide] = useState(false);

    const isHidden = (element) => {
        return element.offsetParent === null;
    };

    useEffect(() => {
        document.title = 'WebXR - Surface';

        if(arBtn){
            isHidden(arBtn.current) ? setHide(true) : setHide(false);
        };
    }, [arBtn]);

    const arCheck = () => {
        setTimeout(() => {
            isHidden(arBtn.current) ? setHide(true) : setHide(false);
        }, 500);
    };

    return (
        <div style={{textAlign: 'center'}}>
            <h1 style={{textDecorationLine: 'underline'}}>Web AR - (Surface Target)</h1>

            <p>
                <a 
                    href="https://developers.google.com/ar/discover/supported-devices"
                    target='blank' style={{color: 'red', display: hide ? 'block' : 'none'}}
                >
                    AR not supported in this device.
                </a>
            </p>

            <div style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'center'
            }}>
                <model-viewer
                    poster={ARCard.img}
                    src={ARCard.glbLink}
                    ios-src={ARCard.usdzLink}
                    ar-modes={ARCard.arModes}
                    ar={ARCard.ar}
                    ar-scale={ARCard.arScale}
                    camera-controls={ARCard.cameraControls}
                    exposure={ARCard.exposure}
                    loading={ARCard.loading}
                    shadow-intensity={ARCard.shadowIntensity}
                    shadow-softness={ARCard.shadowSoftness}
                    alt={ARCard.alt}
                    style={{ 
                        display: 'block', width: '75vw', height: '35vh',
                        backgroundColor: '#f0f5f5', borderRadius: '10px',
                    }}
                >
                    <button
                        ref={arBtn}
                        slot="ar-button" id="ar-button"
                        onClick={arCheck}
                        style={{
                            position:'absolute', bottom:'7.5px', right:'7.5px', 
                            backgroundColor:'#ffa50050', display: 'flex', flexDirection: 'row',
                            borderRadius:'15px', color:'#282c34', alignItems: 'center'
                        }}
                    >
                       <MdOutlineViewInAr size={25} />
                    </button>

                    <div slot="poster" style={{
                        backgroundColor: '#000', color: 'white',
                        cursor: 'pointer', borderRadius: '10px',
                        display: 'inline-block', fontWeight: '500',
                        boxShadow: '0 0 8px rgba(0,0,0,.2), 0 0 4px rgba(0,0,0,.25)',
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate3d(-50%, -50%, 0)', zIndex: '100',
                    }}>Load AR Scene</div>
                </model-viewer>
            </div>
        </div>
    );
};

export default SurfaceAR;

let ARCard = {
    glbLink: 'https://cdn.glitch.com/535530f6-0b12-4f5f-9140-39b40f6af82b%2FOffice_Couch.glb?v=1614846691007',
    usdzLink: 'https://cdn.glitch.com/535530f6-0b12-4f5f-9140-39b40f6af82b%2FOffice_Couch.usdz?v=1614846692051',
    img: 'https://cdn.jsdelivr.net/gh/devhims/model-viewer-react/src/assets/Couch.png',
    loading: 'eager',
    reveal: 'auto',
    autoRotate: true,
    cameraControls: true,
    shadowIntensity: '1',
    shadowSoftness: '0',
    environmentImage: 'neutral',
    skyboxImage: null,
    exposure: '2',
    ar: true,
    arModes: 'scene-viewer quick-look',
    arScale: 'auto',
    arPlacement: 'floor',
    alt: 'A 3D model',
    title: 'Web AR - (Surface Target)',
};