import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const CubeExample = () => {
	const meshRef = useRef<THREE.Mesh>(null);

	useFrame(({ clock }) => {
		if (meshRef.current) {
			meshRef.current.rotation.z = clock.getElapsedTime();
		}
	});

	return (
		<mesh ref={meshRef} rotation={[Math.PI * 0.25, Math.PI * 0.25, 0]}>
			<boxGeometry />
			<meshNormalMaterial />
		</mesh>
	);
};

export default CubeExample;
