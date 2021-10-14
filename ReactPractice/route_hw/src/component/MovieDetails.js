import { Button } from "@mui/material";
import { useEffect, useState } from "react"
import { fetchMovieDetails } from "../api/api";
import { ButtonStyle } from "../Styles/StyleBtn";
import { StyleCard } from "../Styles/StyleRootPage";

export const MovieDetailsContainer = ({ match, history }) => {
	const [move, setMove] = useState(null);

	const movieId = match.params.id;

	useEffect(() => {
		if (movieId) {
			fetchMovieDetails(movieId).then((res) => setMove(res))
		}
	}, [])
	const path = move && (move.backdrop_path || move.poster_path || '')
	const onGoBack = () => history.push('/movies');
	const titleJsx = move && move.title && <h1>{move.title}</h1>

	return (
		<StyleCard>
			{titleJsx}
			<img
				src={`https://image.tmdb.org/t/p/w300/${path}`}
				width='700'
			/>
			<ButtonStyle variant='contained' onClick={onGoBack}> Go Back</ButtonStyle>

		</StyleCard>
	)
}