import React from 'react';

// import * as THREE from 'three'; #0085ff
import { useThree } from '@react-three/fiber';
import { Center, Text3D, Float } from '@react-three/drei';

export const SectionTitle = ({ color, title, ...props }) => {
    return (
        <Text3D font={"font/Inter_Bold.json"} size={0.3} {...props}>
            {title}

            <meshMatcapMaterial color={color} />
        </Text3D>
    );
};

const Scene = () => {

    const { height, width } = useThree((state) => state.viewport);

    return (
        <>
            <ambientLight />

            <directionalLight />

            <Float>
                <Center>
                    <group position-z={-((width*2)/height)} scale={[1, 1, width/height]}>
                        <SectionTitle color={'white'} title={'Three Js'} position={[-0.6, 0.85, 0]} scale={[1, 1, 0.15]} />

                        <SectionTitle color={'white'} title={'AR'} position={[-0.5, -0.8, 0]} scale={[1, 1, 0.15]} />
                        <SectionTitle color={'white'} title={'VR'} position={[0.2, -0.8, 0]} scale={[1, 1, 0.15]} />

                        <SectionTitle color={'white'} title={'React'} position={[-1.5, 0.35, 0]} scale={[1, 1, 0.15]} />
                        <SectionTitle color={'white'} title={'Native'} position={[-1.5, -0.05, 0]} scale={[1, 1, 0.15]} />

                        <SectionTitle color={'white'} title={'React Js'} position={[0.5, 0.1, 0]} scale={[1, 1, 0.15]} />
                        {/* <RoundedBox
                            args={[2, 2, 0.1]} position={[0, -1.2, 0]}
                            onDoubleClick={() => setActive(active === 'three' ? null : 'three')}
                            onPointerEnter={() => setHover('')}
                            onPointerLeave={() => setHover(null)}
                        >
                            <MeshPortalMaterial side={THREE.DoubleSide} >
                                <ambientLight intensity={1} />

                                <Environment preset="sunset" />

                                <SectionTitle color={'Black'} title={'Three Js'} position={[-0.8, 0, -0.5]} scale={[1, 1, 0.35]} />
                                
                                // #1C0E3F

                                <mesh>
                                    <sphereGeometry args={[5, 64, 64]} />
                                    <meshStandardMaterial side={THREE.BackSide} color={'white'}  />
                                </mesh>
                            </MeshPortalMaterial>
                        </RoundedBox>

                        <RoundedBox
                            args={[2, 2, 0.1]} position={[0, 1.2, 0]}
                            onDoubleClick={() => setActive(active === 'xr' ? null : 'xr')}
                            onPointerEnter={() => setHover('')}
                            onPointerLeave={() => setHover(null)}
                        >
                            <MeshPortalMaterial side={THREE.DoubleSide} >
                                <ambientLight intensity={1} />

                                <Environment preset="sunset" />

                                <SectionTitle color={'white'} title={'AR'} position={[-0.65, 0, -0.5]} scale={[1, 1, 0.15]} />
                                <SectionTitle color={'white'} title={'VR'} position={[0.2, 0, -0.5]} scale={[1, 1, 0.15]} />
                                
                                <mesh>
                                    <sphereGeometry args={[5, 64, 64]} />
                                    <meshStandardMaterial side={THREE.BackSide} color={'#2b4657'}  />
                                </mesh>
                            </MeshPortalMaterial>
                        </RoundedBox>

                        <RoundedBox
                            args={[2, 2, 0.1]} position={[-2.5, 0, 0]}
                            onDoubleClick={() => setActive(active === 'rn' ? null : 'rn')}
                            onPointerEnter={() => setHover('')}
                            onPointerLeave={() => setHover(null)}
                        >
                            <MeshPortalMaterial side={THREE.DoubleSide}>
                                <ambientLight intensity={1} />

                                <Environment preset="sunset" />

                                <SectionTitle color={'#0085ff'} title={'React'} position={[-1.1, 0.2, -0.5]} scale={[1, 1, 0.15]} />
                                <SectionTitle color={'#0085ff'} title={'Native'} position={[-1.1, -0.2, -0.5]} scale={[1, 1, 0.15]} />

                                <mesh>
                                    <sphereGeometry args={[5, 64, 64]} />
                                    <meshStandardMaterial side={THREE.BackSide} color={'white'} />
                                </mesh>
                            </MeshPortalMaterial>
                        </RoundedBox>

                        <RoundedBox
                            args={[2, 2, 0.1]} position={[2.5, 0, 0]}
                            onDoubleClick={() => setActive(active === 'react' ? null : 'react')}
                            onPointerEnter={() => setHover('')}
                            onPointerLeave={() => setHover(null)}
                        >
                            <MeshPortalMaterial side={THREE.DoubleSide}>
                                <ambientLight intensity={1} />

                                <Environment preset="sunset" />

                                // #58CCDC 

                                <SectionTitle color={'#0085ff'} title={'React Js'} position={[-0.5, 0, -0.5]} scale={[1, 1, 0.15]} />
                                
                                <mesh>
                                    <sphereGeometry args={[5, 64, 64]} />
                                    <meshStandardMaterial side={THREE.BackSide} color={'#ffffff'} />
                                </mesh>
                            </MeshPortalMaterial>
                        </RoundedBox> */}
                    </group>
                </Center>
            </Float>
        </>
    );
};

export default Scene;