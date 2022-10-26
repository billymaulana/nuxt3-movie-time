<script setup lang="ts">
import { Carousel, Pagination, Slide } from 'vue3-carousel'

const { data: nowMovies } = await useFetch<{ results: ApiMovie[] }>(
  '/api/movies')
const { data: genreList } = await useFetch<{ genres: ApiGenre[] }>(
  '/api/genre')
const setting = ref({
  breakpoints: {
    1366: {
      itemsToShow: 2.5,
    },
    800: {
      itemsToShow: 1,
    },
  },
})
</script>

<template>
  <section class="section-hero">
    <div class="container-fluid px-0">
      <div class="row px-0">
        <div v-if="nowMovies" class="col-md-12 px-0">
          <Carousel :wrap-around="true" snap-align="center" :autoplay="3000" :breakpoints="setting.breakpoints">
            <Slide v-for="movie in nowMovies.results.slice(0, 5)" :key="movie.title">
              <NuxtLink :key="`/movies/${movie.id}/`" class="block card-slider-wrapper" :to="`/movies/${movie.id}/`">
                <div class="card-slider-poster">
                  <img
                    class="image-poster"
                    :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
                    loading="lazy"
                  >
                </div>
                <div class="card-slider-content text-left">
                  <div class="text-white lh-22 f-18 font-weight-700 flex items-center mb-[10px]">
                    <Icon name="ic:baseline-star" size="18" class="text-yellow mr-[5px]" /><span> {{ Math.ceil(movie.vote_average).toFixed(1) }}</span>
                  </div>
                  <div class="movie-title mb-[10px]">
                    {{ movie.title }}
                  </div>
                  <div class="mb-[12px] flex items-center">
                    <span>{{ movie.release_date.slice(0, 4) }}</span>
                    <span class="dot" />
                    <span v-for="(genreResult, id) in genreList!.genres" :key="id">
                      {{ genreResult.id === movie?.genre_ids[0] ? `${genreResult?.name}` : null }}
                    </span>
                  </div>
                  <div class="f-12 lh-18 font-weight-normal text-white overview">
                    {{ movie.overview }}
                  </div>
                </div>
              </NuxtLink>
            </Slide>
            <template #addons>
              <Pagination />
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
</template>
