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

  computed: {
    rezepte() {
      if (this.filter === "all") {
        return this.rezepteVegan;
      } else if (this.filter === "schnell") {
        return this.rezepteVegan.filter((rezept) => rezept.dauer <= 30);
      } else {
        return this.rezepteVegan.filter((rezept) => rezept.dauer >= 30);
      }
    },
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
