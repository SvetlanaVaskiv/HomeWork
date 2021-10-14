import Card from '@mui/material/Card';
import { StyleList } from '../Styles/StyleList';



export const MovieItem = ({ title, id, vote_average, poster_path, release_date, history, match }) => {
	const vote = vote_average * 10;
	const date = new Date(release_date).getFullYear();
	return <StyleList onClick={() => history.push(`/movie/movie${id}`)} >
		<h1>{title}</h1>
		<img
			src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
			alt={title}
			width='300'
			max-width='500'
		/>
		<p>Vote: {vote} %</p>
		<p>Date: {date}</p>
	</StyleList>
}