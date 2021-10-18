import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export const Progressive = ({ vote_average }) => {
	const vote = vote_average * 10;

	return (
		<Box sx={{
			position: 'relative',
			display: 'inline-flex',
			top: '56px',
			right: '50px',
		}}>
			<CircularProgress variant="determinate" value={vote} />
			<Box
				sx={{
					left: 0,
					bottom: 0,
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					right: 0,
					top: 0,
				}}
			>
				<Typography variant="caption" component="div" color="success.main">
					{`${vote}%`}
				</Typography>
			</Box>
		</Box>)
}