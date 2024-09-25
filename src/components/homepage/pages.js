import React, { useRef } from 'react';
import * as THREE from 'three';
import { useThree } from "@react-three/fiber";
import { 
    Environment, Float, Text3D, useIntersect, Html, useProgress,
    useTexture, useGLTF, Center, MeshWobbleMaterial, RoundedBox, 
} from "@react-three/drei";
// import { OrbitControls } from '@react-three/drei';

import ProgressBar from 'react-bootstrap/ProgressBar';

export const SectionTitle = ({ color, children, ...props }) => {
    return (
        <Text3D font={"font/Inter_Bold.json"} size={0.3} {...props}>
            {children}
            <meshPhysicalMaterial color={color ? color : 'white'} />
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

    const emoji = useTexture('/profile.jpg');

    const walpaper = useTexture('/codwall.png');

    const ReactLogo = (props) => {
        const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/react-logo/model.gltf');

        return(
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={materials['default']}
                    position={[0, 1.311, 0]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={0.266}
                >
                    <meshToonMaterial color={'#1E90FF'} />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus001.geometry}
                        material={materials['default']}
                        position={[0.336, -0.081, 0.024]}
                        rotation={[-0.16, 0, -Math.PI / 2]}
                        scale={[3.754, 1.468, 3.005]}
                    >
                        <meshToonMaterial color={'#1E90FF'} />
                    </mesh>

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus002.geometry}
                        material={materials['default']}
                        position={[-0.515, -0.104, 0.165]}
                        rotation={[-1.179, 0, -Math.PI / 2]}
                        scale={[3.754, 1.468, 3.005]}
                    >
                        <meshToonMaterial color={'#1E90FF'} />
                    </mesh>

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus003.geometry}
                        material={materials['default']}
                        position={[-0.035, -0.107, 0.004]}
                        rotation={[0.89, 0, -Math.PI / 2]}
                        scale={[3.754, 1.468, 3.005]}
                    >
                        <meshToonMaterial color={'#1E90FF'} />
                    </mesh>
                </mesh>
            </group>
        );
    };

    const Screen = (props) => {
        const gltf = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');

        return(
            <mesh {...props}>
                <primitive object={gltf.scene} />
            </mesh>
        );
    };

    const Mobile = (props) => {
        const gltf = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf');

        return(
            <mesh {...props}>
                <primitive object={gltf.scene} />
            </mesh>
        );
    };

    const BackNode = (props) => {
        const gltf = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/node/model.gltf');

        return(
            <mesh {...props}>
                <primitive object={gltf.scene} />
            </mesh>
        );
    };

    const UnrealEngineLogo = (props) => {
        const {nodes, materials} = useGLTF('/models/unreal_engine_logo.glb');

        return(
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_Material_0.geometry}
                    material={materials.Material}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                >
                    <meshToonMaterial color='#808080' />
                </mesh>

                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_Material_0.geometry}
                    material={materials.Material}
                    rotation={[-Math.PI / 2, 0, 0]}
                > 
                    <meshToonMaterial color='#808080' />
                </mesh>
          </group>
        );
    };

    const VRSet = (props) => {
        const gltf = useGLTF('/models/vr_headset.glb');

        return(
            <mesh {...props}>
                <primitive object={gltf.scene} />
            </mesh>
        );
    };

    const UnityLogo = (props) => {
        const { nodes, materials } = useGLTF('/models/unity_logo.glb');

        return (
            <group {...props} dispose={null}>
                <group scale={0.01}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Unity_3DLogo_Material_0.geometry}
                        material={materials.Material}
                        rotation={[0, 0, 0]}
                        scale={100}
                    >
                        <meshToonMaterial color='whitesmoke' />
                    </mesh>
                </group>
            </group>
        )
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
            <Environment preset="sunset" />

            <pointLight color="white" position={[8, -25, 5]} intensity={20} />
                
            <pointLight color='grey' position={[0, -height * 2.25, 5]} intensity={10} />

            <React.Suspense fallback={<Loader />}>
                <React.Fragment>
                    <Item position={[0, 0, 0]}>
                        <Center>
                            <Float intensity={1.5}>
                                <group scale={width/height}>
                                    <mesh scale={5} position={[-0.75, 0.5, -0.85]}>
                                        <planeGeometry args={[0.7, 0.65, 10, 10]} />
                                        <meshPhysicalMaterial wireframe color={'lawngreen'} side={THREE.DoubleSide} />
                                    </mesh>

                                    <mesh position={[-0.75, -0.65, 0]} scale={[3, 1, 1]}>
                                        <boxGeometry args={[1, 0.65, 1, 50, 50, 50]} />
                                        <meshPhysicalMaterial color={'darksalmon'} wireframe />
                                    </mesh>

                                    <UnrealEngineLogo scale={0.001} position={[-0.2, 0.08, -0.43]} rotation={[0, 0, 0]} />

                                    <UnityLogo scale={0.1} position={[-0.5, 0.32, -0.48]} rotation={[-0.90, 0, 5.5]} />

                                    <ReactLogo scale={0.125} position={[0.25, -0.1, -0.4]} rotation={[0, 0, Math.PI/2]} />

                                    <Screen position={[-0.5, -0.513, 0]} scale={0.4} rotation={[0, 0, 0]} />
                                
                                    <mesh 
                                        position={[-0.5, 0.11, -0.56]}
                                        rotation={[50, 0, 0]} 
                                        scale={[1.25, 0.86, 0.01]}
                                    >
                                        <RoundedBox args={[1, 1, 0.6]}>
                                            <meshBasicMaterial map={walpaper} />
                                        </RoundedBox>
                                    </mesh>

                                    <Mobile position={[0.35, -0.313, 0]} scale={0.15} rotation={[-Math.PI/2, 0, 0]} />

                                    <VRSet position={[-1.5, -0.35, 0]} scale={0.03} rotation={[0, -Math.PI/2, 0]} />

                                    <BackNode position={[-0.9, 0.15, -0.4]} scale={0.15} rotation={[0, 0, 0]} />
                                </group>
                            </Float>
                        </Center>
                        
                        <mesh position={[width/3.15, height/6, 0]} scale={width/8}>
                            <circleGeometry />
                            <MeshWobbleMaterial color="lightgray" map={emoji} side={THREE.DoubleSide} speed={2.5} factor={0.1} />
                        </mesh>
                    </Item>
                </React.Fragment>
            </React.Suspense>
            
                    
            {/* <Item position={[-width / 5, -height * 0.985, -2]}>
                <SectionTitle position-x={0.5}>SKILLS</SectionTitle>
            </Item>

            <Item position={[-width / 6, -height * 1.985, -2]}>
                <SectionTitle position-x={0.5} color={'springgreen'}>PROJECTS</SectionTitle>
            </Item>

            <Item position={[-1.85, -height * 3, -2]}>
                <SectionTitle position-x={0} color={'dodgerblue'} rotation={[0, 0.15, 0]}>CONTACT</SectionTitle>
            </Item> */}
        </>
    );
};

export default Pages;

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/react-logo/model.gltf');
useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');
useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf');
useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/node/model.gltf');
useGLTF.preload('/models/unreal_engine_logot.glb');
useGLTF.preload('/models/vr_headset.glb');