import { Box, Button } from '@mui/material';

export const Home = (): JSX.Element => (
	<Box>
		<Button onClick={() => window.alert('With typescript and Jest')}>
			test button
		</Button>
	</Box>
);

export default Home;
