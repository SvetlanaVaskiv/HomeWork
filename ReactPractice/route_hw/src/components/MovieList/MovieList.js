import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getTrending } from '../../api/api'
import { MovieItem } from "../MovieItem/MovieItem";

export const MovieList = () => {
	const [response, setResponse] = useState([])

	useEffect(() => {
		getTrending().then((data) => setResponse(data))
	}, [])
	return (
		<ul style={{ display: 'flex', flexWrap: 'wrap' }}>

			{response && response.map(({ title, id, vote_average, poster_path, release_date, }) => <MovieItem id={id} release_date={release_date} title={title} key={id} poster_path={poster_path} vote_average={vote_average} />)}
		</ul>
	)
}
MovieList.propTypes = {
	response: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			title: PropTypes.bool.isRequired,
			poster_path: PropTypes.string.isRequired,
			release_date: PropTypes.string.isRequired,
			poster_path: PropTypes.string.isRequired,
			id: PropTypes.number.isRequired,
			vote_average: PropTypes.number.isRequired,
		})
	)
}