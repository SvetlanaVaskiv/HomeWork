import { StyleList } from './StyleList';
import { useHistory } from "react-router-dom";
import { Progressive } from '../../common/Progressive';

export const MovieItem = ({ title, id, vote_average, poster_path, release_date, }) => {
	const date = new Date(release_date).getFullYear();
	const history = useHistory()
	const onPushPass = () => {
		history.push({
			pathname: `/movie/${id}`,
		})
	}

	return <StyleList onClick={onPushPass}>
		<h1>{title}</h1>
		<img
			src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
			alt={title}
			width='300'
			max-width='500'
		/>
		<div>
			<Progressive vote_average={vote_average} /><h4> Rating</h4>
		</div>
		<p>Date: {date}</p>
	</StyleList >
}

