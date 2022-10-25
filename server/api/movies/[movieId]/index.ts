const key = process.env.THE_MOVIE_DB_KEY;

export default defineEventHandler(event => {
	const movieId = event.context.params.movieId;

	return fetch(
		`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&append_to_response=videos`,
	).then(r => r.json());
});
