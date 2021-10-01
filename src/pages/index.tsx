import { Box, Button } from '@mui/material';

export const Home = (): JSX.Element => (
	<Box>
		{/* eslint-disable-next-line no-alert */}
		<Button onClick={() => window.alert('With typescript and Jest')}>
			test button
		</Button>
	</Box>
);

export default Home;
