<script lang="ts" setup>
definePageMeta({
  layout: 'default',
})
const route = useRoute()
const movieId = Number(route.params.movieId)
const imagePath = 'https://image.tmdb.org/t/p/original/'
const isAvatarBroken = ref(false)
const { data: movie } = await useFetch<ApiMovieDetail>(
  `/api/movies/${movieId}`,
  {
    initialCache: false,
  },
)
const { data: reviews }: any = await useFetch<ApiReviews>(`/api/movies/${movieId}/reviews`, {
  initialCache: false,
})
const { data: recommendations }: any = await useFetch<ApiMovie>(`/api/movies/${movieId}/recommendations`, {
  initialCache: false,
})
const moneyFormat = (n: any) => {
  const val = n
  return `$${val?.toFixed(0).replace(/./g, (c: any, i: any, a: any) => {
    return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? `.${c}` : c
  })}`
}

const checkImgAreBroken = () => {
  isAvatarBroken.value = true
}
</script>

<template>
  <div>
    <section v-if="movie" class="page-detail-section bg-white">
      <div class="container-fluid">
        <div
          v-if="movie" class="hero-section"
          :style="{ 'background-image': `url(${imagePath}${movie.backdrop_path})` }"
        >
          <div class="container z-4 flex">
            <img class="image-poster" alt="" :src="`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`">
            <div class="movie-detail">
              <div class="movie-title">
                <div class="font-medium text-gray f-18">
                  {{ movie?.release_date.slice(0, 4) }}
                </div>
                <h1 class="font-semibold text-gray f-36 lh-44">
                  {{ movie?.title }}
                </h1>
                <div>
                  <span v-for="(genre, id) in movie.genres" :key="id" class="font-medium text-gray f-14 lh-16">
                    <span> {{ id + 1 === movie.genres.length ? genre.name : `${genre.name}, ` }}</span>
                  </span>
                </div>
              </div>
              <div class="movie-info row flex items-center">
                <div class="col-6 col-md-auto col-lg-auto flex items-center">
                  <Icon name="ic:baseline-star" size="32" class="text-yellow mr-[5px]" />
                  <span class="f-36 text-gray font-semibold">{{ Math.ceil(movie.vote_average).toFixed(1) }}</span>
                </div>
                <div class="col-6 col-md-auto col-lg-auto v-separator uppercase">
                  <div>
                    <div>User Score</div>
                    <div class="text-gray">
                      {{ movie.vote_count }} Votes
                    </div>
                  </div>
                </div>
                <div class="col-6 col-md-2 v-separator uppercase">
                  <div>Status</div>
                  <div class="text-gray">
                    {{ movie.status }}
                  </div>
                </div>
                <div class="col-6 col-md-2 v-separator uppercase">
                  <div>Language</div>
                  <div class="text-gray">
                    {{ movie.original_language }}
                  </div>
                </div>
                <div class="col-6 col-md-2 v-separator uppercase">
                  <div>Budget</div>
                  <div class="text-gray">
                    {{ moneyFormat(movie.budget) }}
                  </div>
                </div>
                <div class="col-6 col-md uppercase">
                  <div>Production</div>
                  <div>
                    <span v-for="(production, id) in movie.production_companies" :key="id" class="text-gray">
                      {{ id + 1 === movie.production_companies.length
                        ? production.name
                        : `${production.name}, `
                      }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row pt-5">
          <div class="empty-cols">
          &nbsp;
          </div>
          <div class="col-12 col-md-6 col-lg-8 col-xl-12">
            <h2 class="f-14 text-red font-semibold lh-[18px] mb-3">
              Overview
            </h2>
            <p> {{ movie?.overview }}</p>
          </div>
        </div>
      </div>
    </section>
    <section v-if="reviews" class="reviews-section bg-white pb-10">
      <div class="container flex">
        <div class="row">
          <div class="col-md-12">
            <h3 class="f-14 text-red font-semibold lh-[18px] mb-3">
              Review
            </h3>
          </div>
          <div v-for="(review, id) in reviews?.results.slice(0, 2)" :key="id" class="col-md-6 flex-1">
            <div class="card-reviews">
              <div class="flex justify-between">
                <div class="flex items-center">
                  <img v-if="review.author_details?.avatar_path" :src="isAvatarBroken === true ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5xh1TEMCLzKUNP3G8GY7ID5eBpoVNLZjdpSY6NcjI5A&s' : `https://image.tmdb.org/t/p/original${review.author_details?.avatar_path}`" class="rounded-full" width="48px" height="48px" alt="avatar image" @error="checkImgAreBroken">
                  <img v-else src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5xh1TEMCLzKUNP3G8GY7ID5eBpoVNLZjdpSY6NcjI5A&s" class="rounded-full" width="48px" height="48px" :alt="review?.author_details?.username">
                  <div class="font-semibold ml-2">
                    {{ review.author_details?.username }}
                  </div>
                </div>
                <div class="flex items-center">
                  <Icon name="ic:baseline-star" size="32" class="text-yellow mr-[5px]" />
                  <span class="f-36 text-black font-semibold">{{ Math.ceil(review.author_details?.rating).toFixed(1) }}</span>
                </div>
              </div>
              <div class="pt-2">
                <div class="italic lh-20 text-ellipsis-10">
                  {{ review?.content }}
                </div>
                <NuxtLink v-if="review.url" class="inline-flex text-red f-14 italic justify-end w-full px-3" :to="review.url" target="_blank">
                  Read More
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="recommendations" class="recommendation-section py-10">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h4 class="uppercase font-semibold lh-[18px] mb-3">
              Recommendation Movies
            </h4>
          </div>
        </div>

        <div class="row">
          <div
            v-for="(listRecommendation, id) in recommendations.results.slice(0, 5)"
            :key="id"
            class="col-6 col-md-4 col-lg-2x"
          >
            <NuxtLink
              :key="`/movies/${listRecommendation.id}`"
              class="mb-[40px] block cursor-pointer"
              :to="{ path: `/movies/${listRecommendation.id}` }"
            >
              <img
                class="image-poster mb-[12px]"
                :src="`https://image.tmdb.org/t/p/w500/${listRecommendation.poster_path}`"
                loading="lazy"
              >
              <h2 class="font-semibold text-gray lh-20 mb-[3px]">
                {{ listRecommendation.title }}
              </h2>
              <div class="text-gray-2">
                {{ listRecommendation.release_date.toString().slice(0, 4) }}
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
