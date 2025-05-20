import { OrbitControls } from '@react-three/drei';
import { CustomGeometryParticles } from './ParticleExample';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';
import { useRef } from 'react';

const Scene = () => {
	const bloom = useRef(1);
	return (
		<>
		<CustomGeometryParticles count={1000} />
		<EffectComposer>
				<Bloom
					mipmapBlur
					intensity={bloom.current}
					luminanceThreshold={0.23}
					luminanceSmoothing={0.01}
					opacity={0.7}
				/>
				<ToneMapping adaptive={true} />
			</EffectComposer>
	  	<OrbitControls />
		</>
	);
};

export default Scene;
