import React, { useState } from 'react';

import * as THREE from 'three';
// import { useThree } from '@react-three/fiber';
import { RoundedBox, MeshPortalMaterial, Environment, useCursor, Center, Text3D, Float } from '@react-three/drei';

export const SectionTitle = ({ color, title, ...props }) => {
    return (
        <Text3D font={"font/Inter_Bold.json"} size={0.3} {...props}>
            {title}

            <meshMatcapMaterial color={color} />
        </Text3D>
    );
};

const Scene = () => {
    const [active, setActive] = useState(null);
    const [hover, setHover] = useState(null);

    // const { width, height } = useThree()

    useCursor(hover);

    return (
        <>
            <ambientLight />

            <directionalLight />

            <Float>
                <Center>
                    <group position-z={-1}>
                        <RoundedBox
                            args={[2, 3, 0.1]} position={[0, -1.7, 0]}
                            onDoubleClick={() => setActive(active === 'marvij' ? null : 'marvij')}
                            onPointerEnter={() => setHover('')}
                            onPointerLeave={() => setHover(null)}
                        >
                            <MeshPortalMaterial side={THREE.DoubleSide} >
                                <ambientLight intensity={1} />

                                {/* <OrbitControls enableDamping={false} enablePan={false} enableZoom={false} /> */}

                                <Environment preset="sunset" />

                                <SectionTitle color={'hotpink'} title={'Marvij IT'} position={[-0.8, 0, -0.5]} />
                                
                                <mesh>
                                    <sphereGeometry args={[5, 64, 64]} />
                                    <meshStandardMaterial side={THREE.BackSide} color={'#1C0E3F'}  />
                                </mesh>
                            </MeshPortalMaterial>
                        </RoundedBox>

                        <RoundedBox
                            args={[2, 3, 0.1]} position={[0, 1.7, 0]}
                            onDoubleClick={() => setActive(active === 'loginsoft' ? null : 'loginsoft')}
                            onPointerEnter={() => setHover('')}
                            onPointerLeave={() => setHover(null)}
                        >
                            <MeshPortalMaterial side={THREE.DoubleSide} >
                                <ambientLight intensity={1} />

                                {/* <OrbitControls enableDamping={false} enablePan={false} enableZoom={false} /> */}

                                <Environment preset="sunset" />

                                <SectionTitle color={'white'} title={'LoginSoft'} position={[-1, 0, -0.5]} />
                                
                                <mesh>
                                    <sphereGeometry args={[5, 64, 64]} />
                                    <meshStandardMaterial side={THREE.BackSide} color={'#2b4657'}  />
                                </mesh>
                            </MeshPortalMaterial>
                        </RoundedBox>

                        <RoundedBox
                            args={[2, 3, 0.1]} position={[-2.5, 0, 0]}
                            onDoubleClick={() => setActive(active === '' ? null : '')}
                            onPointerEnter={() => setHover('')}
                            onPointerLeave={() => setHover(null)}
                        >
                            <MeshPortalMaterial side={THREE.DoubleSide}>
                                <ambientLight intensity={1} />

                                {/* <OrbitControls enableDamping={false} enablePan={false} enableZoom={false} /> */}

                                <Environment preset="sunset" />

                                <SectionTitle color={'white'} title={'PlugXR'} position={[-0.8, 0, -0.5]} />

                                <mesh>
                                    <sphereGeometry args={[5, 64, 64]} />
                                    <meshStandardMaterial side={THREE.BackSide} color={'#0085ff'} />
                                </mesh>
                            </MeshPortalMaterial>
                        </RoundedBox>

                        <RoundedBox
                            args={[2, 3, 0.1]} position={[2.5, 0, 0]}
                            onDoubleClick={() => setActive(active === 'visaka' ? null : 'visaka')}
                            onPointerEnter={() => setHover('')}
                            onPointerLeave={() => setHover(null)}
                        >
                            <MeshPortalMaterial side={THREE.DoubleSide}>
                                <ambientLight intensity={1} />

                                {/* <OrbitControls enableDamping={false} enablePan={false} enableZoom={false} /> */}

                                <Environment preset="sunset" />

                                <SectionTitle color={'white'} title={'Visaka'} position={[-0.8, 0, -0.5]} />
                                
                                <mesh>
                                    <sphereGeometry args={[5, 64, 64]} />
                                    <meshStandardMaterial side={THREE.BackSide} color={'#e41f26'} />
                                </mesh>
                            </MeshPortalMaterial>
                        </RoundedBox>
                    </group>
                </Center>
            </Float>
        </>
    );
};

export default Scene;