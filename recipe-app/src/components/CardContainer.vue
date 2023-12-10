<template>
  <div class="content">
    <base-card
      v-for="rezept in rezepte"
      :key="rezept.titel"
      :rezept="rezept"
    ></base-card>
  </div>
</template>

<script>
export default {
  inject: ["rezepteVegan"],
  props: ["filter"],
  data() {
    return {
      filterFavorite: false,
    };
  },
  computed: {
    rezepte() {
  const filteredRezepte = this.filterFavorite
    ? this.rezepteVegan.filter((rezept) => rezept.isFavorite === this.filterFavorite)
    : this.rezepteVegan;

  if (this.filter === "schnell") {
    return filteredRezepte.filter((rezept) => rezept.dauer <= 30);
  } else if (this.filter === "langsam") {
    return filteredRezepte.filter((rezept) => rezept.dauer >= 30);
  }

  return filteredRezepte;
},
  },

  methods: {
    handleToggleFavorite(info) {
      this.filterFavorite = info;
    },
  },
  mounted() {
    this.$eventBus.on("filterFavorite", this.handleToggleFavorite);
  },
  beforeUnmount() {
    this.$eventBus.off("toggleFavorite", this.handleToggleFavorite);
  },
};
</script>

<style scoped>
.content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding: 2rem;
  align-items: stretch;
}
</style>
