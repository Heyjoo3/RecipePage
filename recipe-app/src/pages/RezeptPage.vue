<template>
  <filter-bar @add-filter="forwardFilter"></filter-bar>
  <card-container :filter="filter"></card-container>
</template>

<script>
// import CardContainer from "../CardContainer.vue";
// import FilterBar from "../FilterBar.vue";

import CardContainer from "@/components/CardContainer.vue";
import FilterBar from "@/components/FilterBar.vue";

export default {
  data() {
    return { filter: "all" };
  },
  components: { CardContainer, FilterBar },
  methods: {
    forwardFilter(filter) {
      console.log(filter);
      this.filter = filter;
    },
  },
};
</script>
