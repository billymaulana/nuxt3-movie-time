<template>
  <nav class="navbar w-screen">
    <div class="container">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-between w-full">
          <NuxtLink>
            <img src="@/assets/images/logo.svg" class="navbar-logo" alt="MoovieTime">
          </NuxtLink>
          <form role="search" class="form-search ml-10" w:sm="hidden" w:md="hidden" w:lg="flex">
            <div class="relative flex flex-grow items-center w-full">
              <span class="prepend">
                <Icon name="ic:round-movie" size="21" />
              </span>
              <label class="hidden">Search</label>
              <input type="search" placeholder="Find movie" aria-label="Search">
              <button type="submit" class="append">
                <Icon name="ic:baseline-search" size="24" />
              </button>
            </div>
          </form>
        </div>
        <ul class="nav-menu w-full">
          <li class="nav-item">
            <NuxtLink class="nav-link" href="#">
              <Icon name="ic:round-grid-view" size="16" class="mr-2" /> Categories
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link">
              Movies
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link">
              TV Shows
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link">
              Login
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
