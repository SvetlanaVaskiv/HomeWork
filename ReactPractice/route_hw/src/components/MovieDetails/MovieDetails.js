import { useEffect, useState } from "react"
import { fetchMovieDetails } from "../../api/api";
import { ButtonStyle } from "../../common/StyleBtn";
import { StyleCard } from "../Root/StyleRootPage";
import { CommentsList } from "../CommentsList/CommentsList";
import { useHistory, useRouteMatch } from "react-router-dom";
import { StyledDescribe } from "./StyledDescribe";
import { StyleList } from "../MovieItem/StyleList";

export const MovieDetailsContainer = () => {
	const [move, setMove] = useState(null);
	const history = useHistory()
	const { params } = useRouteMatch()
	const movieId = params.id;

	useEffect(() => {
		if (movieId) {
			fetchMovieDetails(movieId).then((res) => setMove(res))
		}
	}, [])
	const path = move && (move.backdrop_path || move.poster_path || '')
	const onGoBack = () => history.push({
		pathname: `/movies`
	});
	const genresJsx = move && move.genres && move.genres.map(({ name, id }) => <StyleList key={id}> {name}</StyleList>)

	const titleJsx = move && move.title && <h1>{move.title}</h1>
	const describe = move && <StyledDescribe>{move.overview}<h5>Release's date: {move.release_date}</h5></StyledDescribe>
	return (<>
		<StyleCard>

			{titleJsx}
			<img
				src={`https://image.tmdb.org/t/p/w300/${path}`}
				width='700'
			/>
			<div style={{ textAlign: 'center', }}>
				Genres:	{genresJsx}
			</div>
			{describe}
			<ButtonStyle variant='contained' onClick={onGoBack}> Go Back</ButtonStyle>
		</StyleCard>
		<CommentsList />
	</>)
}