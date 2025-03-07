import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';

const CubeExample = () => {
	const meshRef = useRef<THREE.Mesh>(null);

	const { speed } = useControls({
		speed: { value: 2, min: 0, max: 10.0 },
	});

	useFrame(({ clock }) => {
		if (meshRef.current) {
			meshRef.current.rotation.z = clock.getElapsedTime() * speed;
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
