const key = process.env.THE_MOVIE_DB_KEY || '7b082dd464ef4fd2369fdc571c5559f6'

export default defineEventHandler((event) => {
  const movieId = event.context.params.movieId
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${key}&page=1`).then(r => r.json())
})
