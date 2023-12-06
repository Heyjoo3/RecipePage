<template>
  <div class="container">
    <filter-bar></filter-bar>
    <card-container></card-container>
  </div>
</template>

<script>
import CardContainer from "./CardContainer.vue";
import FilterBar from "./FilterBar.vue";

export default {
  components: { CardContainer, FilterBar },
};
</script>

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
