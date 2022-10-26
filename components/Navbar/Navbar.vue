<script setup lang="ts">
const pages = [
  {
    path: '/categories',
    title: 'Categories',
    icon: 'ic:round-grid-view',
  },
  {
    path: '/movies',
    title: 'movies',
    icon: null,
  },
  {
    path: '/shows/',
    title: 'TV Shows',
    icon: null,
  },
  {
    path: '/login/',
    title: 'Login',
    icon: null,
  },

]
</script>

<template>
  <nav class="navbar w-screen">
    <div class="container">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-between w-full">
          <NuxtLink to="/">
            <img src="@/assets/images/logo.svg" class="navbar-logo" alt="MoovieTime">
          </NuxtLink>
          <form role="search" class="form-search ml-10" w:sm="hidden" w:md="hidden" w:lg="flex">
            <div class="relative flex flex-grow items-center w-full">
              <span class="prepend">
                <Icon name="ic:round-movie" size="21" />
              </span>
              <input type="search" placeholder="Find movie" aria-label="Search">
              <button type="submit" class="append">
                <Icon name="ic:baseline-search" size="24" />
              </button>
              <label class="hidden">Search</label>
            </div>
          </form>
        </div>
        <ul class="nav-menu">
          <li v-for="page in pages" :key="page.path" class="nav-item" :to="page.path">
            <NuxtLink :key="page.path" class="nav-link" :to="page.path">
              <Icon v-if="page.icon" :name="page.icon" size="16" class="mr-2" /> {{ page.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
