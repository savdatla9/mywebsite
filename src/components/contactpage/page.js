import React, { useRef, useState, useEffect } from 'react';

import * as THREE from 'three';
import { useThree, useFrame } from "@react-three/fiber";
import { 
    Environment, Text3D, useIntersect, Center,
    useTexture, Html, useProgress, useGLTF,
    RoundedBox, Float, MeshTransmissionMaterial,
} from "@react-three/drei";
// import { OrbitControls } from '@react-three/drei';

import ProgressBar from 'react-bootstrap/ProgressBar';

export const SectionTitle = ({ color, children, ...props }) => {
    return (
        <Text3D font={"font/Inter_Bold.json"} size={0.3} {...props}>
            {children}

            <MeshTransmissionMaterial 
                clearcoat={1} samples={3} thickness={40} 
                chromaticAberration={0.25} anisotropy={0.4} 
            />
        </Text3D>
    );
};

export const Item = ({ position, children }) => {
    const visible = useRef();
    
    const ref = useIntersect((isVisible) => (visible.current = isVisible));
  
    return (
        <group ref={ref} position={position}>
            {children}
        </group>
    );
};

const Pages = () => {
    const { height, width } = useThree((state) => state.viewport);

    const [view, setView] = useState(false);

    const walpaper = useTexture('/contact.jpg');

    const Screen = (props) => {
        const gltf = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');

        return(
            <mesh {...props}>
                <primitive object={gltf.scene} />
            </mesh>
        );
    };

    const MailBox = (props) => {
        const gltf = useGLTF('/models/Mailbox.glb');

        const [mailHover, setMHover] = useState(false);

        useEffect(() => {
            const emissiveColor = new THREE.Color("#ffc527");

            Object.values(gltf.materials).forEach((material) => {
                material.emissive = emissiveColor;
            });
        }, []);

        useFrame(() => {
            Object.values(gltf.materials).forEach((material) => {
                material.emissiveIntensity = THREE.MathUtils.lerp(
                    material.emissiveIntensity,
                    mailHover ? 0.32 : 0,
                    0.1
                );
            });
        });

        return(
            <group 
                dispose={null} {...props} 
                onPointerEnter={() => setMHover(true)} 
                onPointerLeave={() => setMHover(false)}
                onClick={() => setView(!view)}
            >
                <mesh>
                    <primitive object={gltf.scene} />
                </mesh>
            </group>
        );
    };

    function Loader() {
        const { progress } = useProgress();

        return (
            <Html>
                <div style={{
                    position: 'fixed'
                }}>
                    <ProgressBar 
                        animated striped 
                        now={Math.round(progress)} 
                        label={`${Math.round(progress)}%`} 
                        style={{height: '25px', top: '50%'}}
                    />
                </div>
            </Html>
        );
    };

    return (
        <>
            <Environment preset='sunset' />

            <pointLight color="white" position={[8, -15, 5]} intensity={20} />

            {/* <OrbitControls /> */}

            <pointLight color='grey' position={[0, -height * 2.25, 5]} intensity={10} />

            <React.Suspense fallback={<Loader />}>
                <React.Fragment>
                    <Item position={[0, 0, 0]}>
                        <Center>
                            <group scale={width/height}>
                                <Float>
                                    <Screen 
                                        position={[-0.5, -0.513, 0]} 
                                        scale={0.4} rotation={[0, 0, 0]} 
                                    />

                                    <mesh 
                                        position={[-0.5, 0.11, -0.56]}
                                        rotation={[50, 0, 0]} 
                                        scale={[1.25, 0.86, 0.01]}
                                    >
                                        <RoundedBox args={[1, 1, 0.1]}>
                                            <meshBasicMaterial map={walpaper} />
                                        </RoundedBox>
                                    </mesh>
        
                                    <SectionTitle 
                                        position={[-1, 0.16, -0.5]} 
                                        scale={[0.5, 0.5, 0.2]}
                                    >LET</SectionTitle>

                                    <SectionTitle 
                                        position={[-0.5, 0.16, -0.5]} 
                                        scale={[0.5, 0.5, 0.2]}
                                    >US</SectionTitle>

                                    <SectionTitle 
                                        position={[-1, -0.12, -0.45]} 
                                        scale={[0.5, 0.5, 0.2]}
                                    >DISCUSS</SectionTitle>
                                </Float>

                                <MailBox 
                                    position={[0.75, -0.2, 0]} 
                                    scale={[0.15, 0.2, 0.15]} 
                                    rotation={[0, 54, 0]} 
                                />

                                <Html position={[-1, 0, 0]}>
                                    {view ? <div style={{
                                        display: 'flex', flexDirection: 'column', cursor: 'pointer', width: '65vw', 
                                        justifyContent: 'center', alignItems: 'center', textAlign: 'center',
                                        borderRadius: '5px', height: '25vh', backgroundColor: '#00000050', 
                                        boxShadow: '0px 0px 44px 4px rgba(240,235,240,1)', padding: '5%',
                                    }}>
                                        <div style={{width: '100%'}} onClick={() => window.open(`mailto:dsavarma.9@gmail.com`)}>
                                            dsavarma.9@gmail.com
                                        </div>

                                        <div>&nbsp;</div>

                                        <div style={{width: '100%'}} onClick={() => window.open(`tel:+917893000778`)}>
                                            +91 7893000778
                                        </div>
                                    </div> : ''}
                                </Html>
                            </group>
                        </Center>
                    </Item>
                </React.Fragment>
            </React.Suspense>
        </>
    );
};

export default Pages;

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');
useGLTF.preload('/models/Mailbox.glb');