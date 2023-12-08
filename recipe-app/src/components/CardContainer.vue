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
      if (this.filterFavorite == false) {
        if (this.filter === "alle" || this.filter === "all") {
          return this.rezepteVegan;
        } else if (this.filter === "schnell") {
          return this.rezepteVegan.filter((rezept) => rezept.dauer <= 30);
        } else {
          return this.rezepteVegan.filter((rezept) => rezept.dauer >= 30);
        }
      } else {
        let temp = this.rezepteVegan.filter(
          (rezept) => rezept.isFavorite == this.filterFavorite
        );
        if (this.filter === "alle" || this.filter === "all") {
          return temp;
        } else if (this.filter === "schnell") {
          return temp.filter((rezept) => rezept.dauer <= 30);
        } else {
          return temp.filter((rezept) => rezept.dauer >= 30);
        }
      }
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
