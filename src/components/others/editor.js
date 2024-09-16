import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from "three-stdlib";

import { 
    Button, UncontrolledDropdown, 
    DropdownToggle, DropdownMenu, 
    DropdownItem 
} from "reactstrap";

const Editor = () => {
    const mountRef = useRef(null);
    const [sceneObjects, setSceneObjects] = useState([]);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5; camera.position.x = 0.75;

        const size = 15;
        const divisions = 15;

        const gridHelper = new THREE.GridHelper( size, divisions );
        scene.add(gridHelper);
        gridHelper.position.y = -0.5;

        const light = new THREE.AmbientLight( 0xcccccc ); // soft white light
        scene.add( light );

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        sceneObjects.forEach((object) => {
            scene.add(object);
        });

        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, [sceneObjects]);

    const addCube = () => {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshPhysicalMaterial({ color: 0xffb900 });
        const cube = new THREE.Mesh(geometry, material);
        setSceneObjects((prev) => [...prev, cube]);
    };

    const addSphere = () => {
        const geometry = new THREE.SphereGeometry();
        const material = new THREE.MeshPhysicalMaterial({ color: 0x808080 });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.x = 1.75; cube.position.y = 0.5;
        setSceneObjects((prev) => [...prev, cube]);
    };

    const addObj = async() => {
        const loader = new GLTFLoader();

        let model;

        loader.load(
            'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-farm/model.gltf', 
            (gltf) => {
                model = gltf.scene;
                model.scale.set(2.5, 2.5, 2.5);
            },
            undefined, 
            (error) => {
                console.error( error );
            } 
        );
        
        setSceneObjects((prev) => [...prev, model]);
    };

    const clearObjects = () => {
        setSceneObjects([]);
    };

    return (
        <>
            <div ref={mountRef} style={{backgroundColor: '#282c34'}} />

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', position: 'absolute', top: '5px'}}>
                <UncontrolledDropdown group style={{marginLeft: '5px'}}>
                    <Button
                        color="info"
                        outline
                    >
                        Add
                    </Button>
                    <DropdownToggle
                        caret
                        color="info"
                        outline
                    />

                    <DropdownMenu>
                        <DropdownItem onClick={addCube}>
                            Cube
                        </DropdownItem>

                        <DropdownItem onClick={addSphere}>
                            Sphere
                        </DropdownItem>
                        
                        <DropdownItem onClick={addObj}>
                            3d Object
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>

                <Button
                    color="secondary"
                    outline
                    onClick={clearObjects}
                    style={{marginRight: '15px'}}
                >
                    Clear
                </Button>
            </div>
        </>
    );
};

export default Editor;