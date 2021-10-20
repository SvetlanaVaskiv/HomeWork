const apiKey = '1793f1d1bd070eb7923f4cdaee264029';

export const getTrending = () => {
	return fetch(
		`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
		.then(res => {
			if (res.ok) {
				return res.json()
			}
			throw new Error('not found');
		})
		.then(data => data.results)
		.catch(err => {
			throw err;
		});
}
export const fetchMovieDetails = movieId => {

	return fetch(
		`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
	)
		.then(res => {
			if (res.ok) {
				return res.json()
			}
			throw new Error('not found');
		})
		.then(data => data)
		.catch(err => {
			throw err;
		})
}