<template>
  <div class="flex items-center justify-center h-[calc(100vh-66px)]">
    <span class="loader">L &nbsp; ading...</span>
  </div>
</template>

<style scoped lang="css">
.loader {
  display: inline-block;
  font-size: 48px;
  font-family: 'Montserrat',sans-serif;
  font-weight: 600;
  color: #FFF;
  position: relative;
}
.loader::before {
  content: '';
  position: absolute;
  left: 34px;
  bottom: 17px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 6px solid #FFF;
  border-bottom-color: #FF3D00;
  box-sizing: border-box;
  animation: rotation 0.6s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
