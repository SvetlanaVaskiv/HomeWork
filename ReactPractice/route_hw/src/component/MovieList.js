import { useEffect, useState } from "react";

import { getTrending } from '../api/api'
import { MovieItem } from "./MovieItem";

export const MovieList = ({ history, match }) => {

	const [response, setResponse] = useState([])

	useEffect(() => {
		getTrending().then((data) => setResponse(data))
	}, [])
	return (
		<ul style={{ display: 'flex', flexWrap: 'wrap' }}>
			{response && response.map(({ title, id, vote_average, poster_path, release_date }) => <MovieItem history={history} id={id} release_date={release_date} title={title} key={id} poster_path={poster_path} vote_average={vote_average} />)}
		</ul>
	)
}