import { Environment } from "@react-three/drei";

const Pages = () => {
    return (
        <>
            <Environment preset="sunset" />
            <mesh>
                <boxGeometry />
                <meshStandardMaterial color="white" />
            </mesh>
        </>
    );
};

export default Pages;