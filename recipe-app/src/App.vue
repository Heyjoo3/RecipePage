<template>
  <the-header></the-header>
  <the-nav></the-nav>
  <the-body></the-body>
  <base-modal v-if="modalStatus"></base-modal>
</template>

<script>
export default {
  computed: {
    modalStatus() {
      return this.$store.getters["getModalStatus"];
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
