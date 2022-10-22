<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>

<template>
  <main class="overflow-hidden">
    <HeroSlider />
    <section class="section-discover">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>Discover</h1>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.section-discover{
  background: rgba(255, 255, 255, 0.05);
  height: 333px;
  padding-top: 333px;
}
</style>
