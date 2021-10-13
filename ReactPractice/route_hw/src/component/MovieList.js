import { useEffect, useState } from "react";

import { getTrending } from '../api/api'
import { MovieItem } from "./MovieItem";

export const MovieList = () => {

	const [response, setResponse] = useState([])

	useEffect(() => {
		getTrending().then((data) => console.log(data))
	}, [])

	return (
		<>
			{response && response.map(({ title, id }) => <MovieItem title={title} key={id} />)}
		</>
	)
}