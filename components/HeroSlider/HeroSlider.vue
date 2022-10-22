<script setup lang="ts">
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const { data: nowMovies } = await useFetch<{ results: ApiMovie[] }>(
  '/api/movies')
const { data: genreList } = await useFetch<{ results: ApiGenre[] }>(
  '/api/genre')
const setting = ref({
  breakpoints: {
    1024: {
      itemsToShow: 2.5,
      snapAlign: 'center',
    },
    260: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
  },
})
</script>

<template>
  <div class="container-fluid px-0">
    <div class="row px-0">
      <div class="col-md-12 px-0">
        <Carousel v-if="nowMovies" class="section-carousel" :items-to-show="2.5" :wrap-around="true" snap-align="center" :autoplay="3000" :breakpoints="setting.breakpoints">
          <Slide v-for="movie in nowMovies.results.slice(0, 5)" :key="movie.title" class="wrapper-slider">
            <div class="card-slider-wrapper">
              <div class="card-slider-poster">
                <img
                  class="image-poster"
                  :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
                  loading="lazy"
                >
              </div>
              <div class="card-slider-content text-left">
                <div class="text-white lh-22 f-18 font-weight-700 flex items-center mb-[10px]">
                  <Icon name="ic:baseline-star" size="18" class="text-yellow mr-[5px]" /><span> {{ movie.vote_average }}</span>
                </div>
                <div class="movie-title mb-[10px]">
                  {{ movie.title }}
                </div>
                <div class="mb-[12px] flex items-center">
                  <span>{{ movie.release_date.slice(0, 4) }}</span>
                  <span class="dot" />
                  <span v-for="(genreResult, id) in genreList" :key="id">
                    <span v-for="(genre, idx) in genreResult" :key="idx">
                      {{ genre.id === movie.genre_ids[0] ? genre.name : null }}
                    </span>
                  </span>
                </div>
                <div class="f-12 lh-18 font-weight-normal text-white overview">
                  {{ movie.overview }}
                </div>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<style>
.section-carousel{
    height: 550px;
}
.wrapper-slider{
    display: inline-flex;
    justify-content: center;
    width:100%;
    /* overflow: unset; */
}
.carousel__slide{
    /* flex-shrink: 0; */
    flex: 1 1 1;
    width: 100%;
    padding: 0 40px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    opacity: 0.5;
}
/* .wrapper-card{
    display: flex;
    justify-content: center;
    align-items: center;
} */
/* .card-slider{ */
    /* background-color: black; */
    /* border-radius: 8px; */
    /* padding: 20px 60px; */
    /* width: 450px; */
    /* height: 320px; */
    /* width: 300px; */
/* } */
/* .image-poster{ */
    /* width:250px; */
    /* height:365px; */
    /* object-fit: cover; */
/* } */
/* .carousel__item { */
  /* min-height: 350px; */
  /* width: 100%; */
  /* color: #fff; */
  /* padding: 20px; */
  /* font-size: 20px; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
/* } */
/* .wrapper-card{ */
    /* width: 00px; */
    /* margin: 0 auto; */
/* } */
/* .carousel__slide {
  padding: 0 30px;
}
.carousel__item{
    margin: 0 auto;
    text-align: center;
    width: 100%;
} */
/* .card-slider{
    background-color: black;
    color: #fff;
    height: 325px;
    margin: 20px;
    width: 200px;
} */
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  color: #E74C3C;
  position: fixed;
  display: none;
}
.carousel__pagination{
    position: absolute;
    bottom: 0px;
    left: 20px;
    right: 20px;
    margin: 16px;
}
/* .carousel__pagination-item{
    margin-right: 16px;
} */
.carousel__pagination-button::after{
    background: rgba(255, 255, 255, 0.5);
    border-radius: 6px;
    width: 12px;
    height: 12px;
    margin: 0 3px;
}
.carousel__pagination-button:hover::after{
    background: rgba(255, 255, 255, 1);
    transition: background 1.2s;
}
.carousel__pagination-button--active:after{
    background: #E74C3C;
    transition: background 1.2s;
    width: 60px;
}

.carousel__viewport {
    margin-left: 0vw;
    height: 500px;
    display: flex;
}

/* .carousel__track { */
  /* transform-style: preserve-3d; */
/* } */

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide--prev {
  opacity: 0.5;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 0.5;
}

.carousel__slide--active {
  opacity: 1!important;
}
</style>
