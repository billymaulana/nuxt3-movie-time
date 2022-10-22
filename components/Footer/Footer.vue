<template>
  <footer class="footer w-screen text-gray-2 f-12">
    <div class="container">
      <div class="row justify-between">
        <div class="w-screen flex items-center justify-between">
          <div>© 2021 MoovieTime. All rights reserved.</div>
          <div class="px-2">
            <img src="@/assets/images/logo.svg" alt="MoovieTime logo" class="logo-grey" width="90px" height="25px">
          </div>
          <div>Made with Nuxt3</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="css">
.footer{
    padding: 3% 0px;
    background: rgba(0, 0, 0, 0.29);
}
.logo-grey{
    filter: grayscale(1) saturate(1) brightness(0.5) invert(0.5) opacity(0.5)
}
</style>
