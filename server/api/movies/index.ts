const key = process.env.THE_MOVIE_DB_KEY

export default defineEventHandler(() => {
  return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}`).then(r => r.json())
})
