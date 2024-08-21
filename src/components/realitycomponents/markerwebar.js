import React from 'react';

const MarkerAR = () => {
    return (
        <div style={{margin: '0px', overflow: 'hidden'}}>
            <h3 style={{textAlign: 'center'}}>Marker AR</h3>

            <a-scene 
                vr-mode-ui="enabled: false;"
                renderer='antialias: true; alpha: true; precision: medium;'
                embedded arjs='trackingMethod: best; sourceType: webcam; debugUIEnabled: false; patternRatio: 0.80'
            >
                <a-marker type="pattern" url='./logo.patt'>
                    <a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>
                </a-marker>

                <a-entity camera></a-entity>
            </a-scene>
        </div>
    );
};

export default MarkerAR;