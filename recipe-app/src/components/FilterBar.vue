<template>
  <div class="filter">
    <div>
      <label for="">Wie lange soll es dauern? </label>
      <select>
        <option value="">---</option>
        <option value="schnell">unter 30 min</option>
        <option value="langsam">über 30 min</option>
      </select>
      <button>Suchen</button>
    </div>
  </div>
</template>

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
