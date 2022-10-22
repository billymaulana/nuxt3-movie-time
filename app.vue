<script setup lang="ts">
useHead({
  title: 'MoovieTime',
})
</script>

<template>
  <Html lang="en">
    <NuxtLayout>
      <NuxtPage :key="$route.fullPath" />
    </NuxtLayout>
  </Html>
</template>
