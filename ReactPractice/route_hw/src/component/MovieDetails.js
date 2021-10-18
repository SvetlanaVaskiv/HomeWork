import { useEffect, useState } from "react"
import { fetchMovieDetails } from "../api/api";
import { ButtonStyle } from "../Styles/StyleBtn";
import { StyleCard } from "../Styles/StyleRootPage";
import { CommentsList } from "./CommentsList";
import { useLocation, useHistory, useRouteMatch } from "react-router-dom";
import queryString from 'query-string';
import { StyledDescribe } from "../Styles/StyledDescribe";

export const MovieDetailsContainer = () => {
	const [move, setMove] = useState(null);
	const { search } = useLocation();
	const history = useHistory()
	const { params } = useRouteMatch()
	const { categories } = queryString.parse(search)
	const movieId = params.id;

	useEffect(() => {
		if (movieId) {
			fetchMovieDetails(movieId, categories).then((res) => setMove(res))
		}
	}, [])
	const path = move && (move.backdrop_path || move.poster_path || '')
	const onGoBack = () => history.push({
		pathname: `/movies`
	});

	const titleJsx = move && move.title && <h1>{move.title}</h1>
	const describe = move && <StyledDescribe>{move.overview}<h5>Release's date: {move.release_date}</h5></StyledDescribe>
	return (<>
		<StyleCard>
			{titleJsx}
			<img
				src={`https://image.tmdb.org/t/p/w300/${path}`}
				width='700'
			/>
			{describe}
			<ButtonStyle variant='contained' onClick={onGoBack}> Go Back</ButtonStyle>
		</StyleCard>
		<CommentsList />
	</>)
}