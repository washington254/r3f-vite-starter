import * as THREE from 'three';
import { useRef } from 'react';
import { extend, useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import ShaderMaterialExample from './ShaderMaterialExample';
extend({ ShaderMaterialExample });

const SphereExample = () => {
	const materialref = useRef<THREE.ShaderMaterial>(null);

	const { frequency, speed } = useControls({
		frequency: { value: 3.5, min: 2, max: 10.0 },
		speed: { value: 2.5, min: 0, max: 15.0 },
	});

	useFrame(({ clock }) => {
		if (materialref.current) {
			const time = clock.getElapsedTime();
			materialref.current.uniforms.uTime.value = time;
		}
	});

	return (
		<mesh rotation={[Math.PI * 0.5, 0, 0]}>
			<sphereGeometry args={[1, 100]} />
			<shaderMaterialExample
				key={ShaderMaterialExample.key}
				ref={materialref}
				uFrequency={frequency}
				uSpeed={speed}
			/>
		</mesh>
	);
};

export default SphereExample;
