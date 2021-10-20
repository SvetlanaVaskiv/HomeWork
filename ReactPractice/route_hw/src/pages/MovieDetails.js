
import { MovieDetailsContainer } from "../components/MovieDetails/MovieDetails";

export const MovieDetails = ({ match, history }) => {
	return <MovieDetailsContainer history={history} match={match} />
}