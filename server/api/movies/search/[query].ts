const key = process.env.THE_MOVIE_DB_KEY
export default defineEventHandler((event) => {
  const query = event.context.params.query

  return fetch(`https://api.themoviedb.org/3/movie?query=${query}&page=1&api_key=${key}`).then(r => r.json())
})
