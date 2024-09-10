import { useThree } from '@react-three/fiber';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter';

const ExportButton = () => {
    const { scene } = useThree();

    const exportGLTF = () => {
        const exporter = new GLTFExporter();

        exporter.parse(scene, (result) => {
            const output = JSON.stringify(result, null, 2);
            const blob = new Blob([output], {type: 'application/json'});
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'scene.glb';
            link.click();
        });
    };

    return <button onClick={exportGLTF}>Export GLTF</button>;
};

export default ExportButton;