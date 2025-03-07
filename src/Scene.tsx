import { OrbitControls } from '@react-three/drei';
import CubeExample from './CubeExample';

const Scene = () => {
	return (
		<>
			<CubeExample />
			<OrbitControls />
		</>
	);
};

export default Scene;
