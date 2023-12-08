<template>
  <div class="container">
    <router-view name="page"></router-view>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  top: 10vh;
  left: 10vw;
  width: 90vw;
  min-height: 90vh;
  background-color: cadetblue;
}
</style>
