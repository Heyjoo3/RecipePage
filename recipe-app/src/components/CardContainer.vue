<template>
  <div class="content">
    <base-card
      v-for="rezept in rezepteVegan"
      :key="rezept.titel"
      :rezept="rezept"
    ></base-card>
  </div>
</template>

<script>
export default {
  inject: ["rezepteVegan"],
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
