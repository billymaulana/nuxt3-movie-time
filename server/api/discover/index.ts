const key = process.env.THE_MOVIE_DB_KEY || '7b082dd464ef4fd2369fdc571c5559f6'

export default defineEventHandler(() => {
  return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&sort_by=popularity.desc`).then(r => r.json())
})
