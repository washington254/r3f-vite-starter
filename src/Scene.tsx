import { OrbitControls } from '@react-three/drei';
import { FBOParticles } from './ParticleExample';

const Scene = () => {
	return (
		<>
		<FBOParticles />
	  	<OrbitControls />
		</>
	);
};

export default Scene;
