<script setup lang="ts">
const router = useRouter()
definePageMeta({
  layout: 'default',
})
const { data: discover, pending } = await useFetch<{ results: ApiMovie[] }>(
  '/api/discover',
)
</script>

<template>
  <main class="overflow-hidden pt-10">
    <div v-if="discover">
      <HeroSlider />
      <section class="section-discover relative pt-[6rem] my-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="flex items-center justify-between">
                <div>
                  <div class="accent mb-[12px]" />
                  <h1 class="text-title">
                    Discover Movies
                  </h1>
                </div>
                <div class="flex items-center mt-[12px]">
                  <NuxtLink class="btn btn-primary mr-5">
                    Popularity
                  </NuxtLink>
                  <NuxtLink class="btn btn-secondary">
                    Release Date
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="row pt-[40px]">
                <div
                  v-for="(listDiscover, id) in discover.results"
                  :key="id"
                  class="col-6 col-md-4 col-lg-2x"
                >
                  <NuxtLink
                    :key="`/movies/${listDiscover.id}`"
                    class="mb-[40px] block cursor-pointer"
                    :to="{ path: `/movies/${listDiscover.id}` }"
                  >
                    <img
                      class="image-poster mb-[12px]"
                      :src="`https://image.tmdb.org/t/p/w500/${listDiscover.poster_path}`"
                      loading="lazy"
                    >
                    <h2 class="font-semibold text-gray lh-20 mb-[3px]">
                      {{ listDiscover.title }}
                    </h2>
                    <div class="text-gray-2">
                      {{ listDiscover.release_date.toString().slice(0, 4) }}
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-else>
      <Loaders />
    </div>
  </main>
</template>

<style scoped>
.section-discover:before {
 content: '';
 top: 0;
 left: 0;
 position: absolute;
 background: rgba(255, 255, 255, 0.05);
 height: 333px;
 width: 100%;
 z-index: -1;
}
</style>
