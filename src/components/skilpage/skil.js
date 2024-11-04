import React, { useState, useRef } from 'react';

import { useThree } from '@react-three/fiber';
import { 
    useGLTF, Center, Text3D, 
    OrbitControls,
} from "@react-three/drei";

export const SectionTitle = ({ color, children, ...props }) => {
    return (
        <Text3D 
            size={0.3} {...props}
            font={"font/Dancing Script_Regular.json"} 
        >
            {children}
            <meshPhysicalMaterial color={color ? color : 'white'} />
        </Text3D>
    );
};

const Scene = () => {
    const [view, setView] = useState('');

    const { width, height } = useThree((state) => state.viewport);

    const handleModel = (val) => {
        if(val!==view){
            setView(val);
        }else{
            setView('');
        }
    };

    // const UnityLogo = (props) => {
    //     const { nodes, materials } = useGLTF('/models/unity_logo.glb');

    //     return (
    //         <group {...props} dispose={null}>
    //             <group scale={0.01}>
    //                 <mesh
    //                     castShadow
    //                     receiveShadow
    //                     geometry={nodes.Unity_3DLogo_Material_0.geometry}
    //                     material={materials.Material}
    //                     rotation={[0, 0, 0]}
    //                     scale={100}
    //                 >
    //                     <meshToonMaterial color='whitesmoke' />
    //                 </mesh>
    //             </group>
    //         </group>
    //     )
    // };

    // const Screen = (props) => {
    //     const gltf = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');
    //     const webRef = useRef();

    //     return(
    //         <mesh 
    //             {...props} name='web' ref={webRef} 
    //             onClick={() => handleModel('web')}
    //             onPointerOver={(e) => {e.stopPropagation(); setHover(true)}}
    //             onPointerOut={(e) => setHover(false)}
    //         >
    //             <primitive object={gltf.scene} />
    //         </mesh>
    //     );
    // };

    const Star = (props) => {
        const gltf = useGLTF('/models/star.gltf');
        const starRef = useRef();

        return <primitive {...props} ref={starRef} object={gltf.scene.clone()} />
    };

    const ReactLogo = (props) => {
        const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/react-logo/model.gltf');
        const reactRef = useRef();

        return(
            <group 
                {...props} dispose={null} 
                name='react' ref={reactRef} 
                onClick={() => handleModel('react')}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={materials['default']}
                    position={[0, 1.311, 0]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={0.266}
                >
                    <meshStandardMaterial color={'#1E90FF'} />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus001.geometry}
                        material={materials['default']}
                        position={[0.336, -0.081, 0.024]}
                        rotation={[-0.16, 0, -Math.PI / 2]}
                        scale={[3.754, 1.468, 3.005]}
                    >
                        <meshStandardMaterial color={'#1E90FF'} />
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
                        <meshStandardMaterial color={'#1E90FF'} />
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
                        <meshStandardMaterial color={'#1E90FF'} />
                    </mesh>
                </mesh>
            </group>
        );
    };

    const UnrealEngineLogo = (props) => {
        const gltf = useGLTF('/models/unreal_engine_logo.glb');
        const unrealRef = useRef();

        return(
            <mesh 
                {...props} ref={unrealRef} name='unreal'
                onClick={() => handleModel('unreal')}
            >
                <primitive object={gltf.scene} />
            </mesh>
        );
    };

    const Mobile = (props) => {
        const gltf = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf');
        const mobileRef = useRef(); 

        return(
            <mesh 
                {...props} name='mobile' ref={mobileRef} 
                onClick={() => handleModel('mobile')}
            >
                <primitive object={gltf.scene} />
            </mesh>
        );
    };

    const BackNode = (props) => {
        const gltf = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/node/model.gltf');
        const nodeRef = useRef();

        return(
            <mesh 
                {...props} name='node' ref={nodeRef} 
                onClick={() => handleModel('node')}
            >
                <primitive object={gltf.scene} />
            </mesh>
        );
    };

    const VRSet = (props) => {
        const gltf = useGLTF('/models/vr_headset.glb');
        const vrRef = useRef();

        return(
            <mesh 
                {...props} name='webxr' ref={vrRef} 
                onClick={() => handleModel('webxr')}
            >
                <primitive object={gltf.scene} />
            </mesh>
        );
    };

    return(
        <>
            <OrbitControls />

            <Center>
                {view==='' && <group position={[0, 0, -(width/height)]}>
                    <ReactLogo 
                        scale={0.9} 
                    />

                    <UnrealEngineLogo 
                        scale={0.008} position={[0, 3, 0]} 
                    />

                    <Mobile 
                        scale={0.85} position={[2.5, 0, 0]} 
                    />

                    <VRSet 
                        scale={0.1} position={[-2.5, 0, 0]} 
                        rotation={[0, -Math.PI/2, 0]} 
                    />

                    <BackNode 
                        position={[0, -1.2, 0]} scale={[1, 1, 0.75]} 
                    />
                </group>}

                {view==='react' && <group>
                    <ReactLogo 
                        scale={0.9} 
                        position={[0, 0, -2]} 
                    />

                    <group position={[-0.5, 2.5, 0.5]}>
                        <Star position={[-1, 0, 0]} scale={0.5} />
                        <Star position={[0, 0, 0]} scale={0.5} />
                        <Star position={[1, 0, 0]} scale={0.5} />
                        <Star position={[2, 0, 0]} scale={0.5} />
                    </group>

                    <SectionTitle 
                        color={'#1E90FF'}
                        position={[-1.5, 0, 0.25]} 
                        scale={[1, 1, 0.25]}
                        children={'5.7 years in React Js'}
                    />
                </group>}
                
                {view==='unreal' && <group>
                    <UnrealEngineLogo 
                        scale={0.008} 
                        position={[0, 0, -2]} 
                    />

                    <group position={[0, 2.5, 0.5]}>
                        <Star position={[0, 0, 0]} scale={0.5} />
                    </group>

                    <SectionTitle 
                        color={'#1e90ff'}
                        children={'2 months in Unreal Engine'} 
                        position={[-1.75, -0.35, 0.25]}
                        scale={[1, 1, 0.25]}
                    />
                </group>}

                {view==='mobile' && <group>
                    <Mobile 
                        scale={0.85} 
                        position={[0, 0.5, -2]} 
                    />

                    <group position={[0, 3, 0.5]}>
                        <Star position={[-1, 0, 0]} scale={0.5} />
                        <Star position={[0, 0, 0]} scale={0.5} />
                        <Star position={[1, 0, 0]} scale={0.5} />
                    </group>

                    <SectionTitle 
                        color={'#1E90FF'} 
                        position={[-1.5, 0, 0.25]}
                        scale={[1, 1, 0.25]}
                        children={'3 years in React Native'} 
                    />
                </group>}

                {view==='node' && <group>
                    <BackNode 
                        position={[0, 0.85, -2]} 
                    />

                    <group position={[0, 2, 0.5]}>
                        <Star position={[-1, 0, 0]} scale={0.5} />
                        <Star position={[0, 0, 0]} scale={0.5} />
                    </group>

                    <SectionTitle 
                        color={'#1E90FF'} 
                        position={[-1, 0, 0.25]}
                        scale={[1, 1, 0.5]}
                        children={'1 year in Node Js'} 
                    />
                </group>}

                {view==='webxr' && <group>
                    <VRSet 
                        scale={0.15} 
                        position={[0, 0.5, -2]} 
                    />

                    <group position={[0, 2.5, 0.5]}>
                        <Star position={[-1, 0, 0]} scale={0.5} />
                        <Star position={[0, 0, 0]} scale={0.5} />
                    </group>

                    <SectionTitle 
                        color={'#1E90FF'} 
                        position={[-1, 0, 0.25]}
                        scale={[1, 1, 0.5]} 
                        children={'1 year in Web XR'} 
                    />
                </group>}
            </Center>
        </>
    );
};

export default Scene;