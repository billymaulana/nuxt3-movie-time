const key = process.env.THE_MOVIE_DB_KEY

export default defineEventHandler((event) => {
  const movieId = event.context.params.movieId
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}&page=1`).then(r => r.json())
})
