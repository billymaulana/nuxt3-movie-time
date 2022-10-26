# nuxt3-movie-time

Techstack:
- Nuxt 3 rc.12
- Vue 3
- Typescript
- Windi Css
- Pinia
- PNPM



```bash
npm install -g pnpm
```
## installation
```bash
git clone https://github.com/billymaulana/nuxt3-movie-time.git
cd nuxt3-movie-time
cp .env.example .env
open .env
```

Set this credential to .env:
```bash
THE_MOVIE_DB_KEY='7b082dd464ef4fd2369fdc571c5559f6'
API_URL='https://api.themoviedb.org/3'
```

This project using pnpm as package manager. (https://pnpm.io/installation)
If you don't have pnpm installed, run: 

```bash
npm install -g pnpm
```

How to Run:
```bash
pnpm install # If you don't have pnpm installed, run: npm install -g pnpm
pnpm build
pnpm dev
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

Demo: (https://nuxt-moovie-time.netlify.app/)