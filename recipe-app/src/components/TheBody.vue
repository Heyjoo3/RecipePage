<template>
  <div class="container">
    <RouterView name="filter" @add-filter="forwardFilter"></RouterView>
    <router-view name="content" :filter="filter"></router-view>
    <router-view name="page"></router-view>

    <!-- <filter-bar @add-filter="forwardFilter"></filter-bar> -->
    <!-- <card-container :filter="filter"></card-container> -->
  </div>
</template>

<script>
// import { RouterView } from "vue-router";
// import CardContainer from "./CardContainer.vue";
// import FilterBar from "./FilterBar.vue";

export default {
  data() {
    return { filter: "all" };
  },
  // components: { CardContainer, FilterBar, RouterView },
  methods: {
    forwardFilter(filter) {
      console.log(filter);
      this.filter = filter;
    },
  },
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
