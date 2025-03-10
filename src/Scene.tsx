import { OrbitControls } from '@react-three/drei';
import SphereExample from './SphereExample';

const Scene = () => {
	return (
		<>
			<SphereExample />
			<OrbitControls />
		</>
	);
};

export default Scene;
