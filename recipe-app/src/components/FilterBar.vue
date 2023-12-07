<template>
  <div class="filter">
    <div>
      <label for="">Wie lange soll es dauern? </label>
      <select v-model="timeFilter">
        <option value="">---</option>
        <option value="schnell">unter 30 min</option>
        <option value="langsam">über 30 min</option>
      </select>
      <button @click="saveFilter">Suchen</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["addFilter"],

  data() {
    return {
      timeFilter: null,
    };
  },

  methods: {
    saveFilter() {
      if (this.timeFilter === null) {
        console.log("empty");
        return this.timeFilter;
      } else {
        console.log(this.timeFilter);
        this.$emit("addFilter", this.timeFilter);
      }
    },
  },
};
</script>

<style scoped>
.filter {
  background-color: blanchedalmond;
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
