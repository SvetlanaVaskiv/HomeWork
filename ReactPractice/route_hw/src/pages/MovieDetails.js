
import { MovieDetailsContainer } from "../component/MovieDetails/MovieDetails";

export const MovieDetails = ({ match, history }) => {
	return <MovieDetailsContainer history={history} match={match} />
}