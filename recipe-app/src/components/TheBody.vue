<template>
  <div class="container">
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
    <div class="content">
      <base-card></base-card>
      <base-card></base-card>
      <base-card></base-card>
      <base-card></base-card>
      <base-card></base-card>
      <base-card></base-card>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  top: 10vh;
  left: 10vw;
  width: 90vw;
  min-height: 90vh;
  background-color: cadetblue;
}

.filter {
  background-color: blanchedalmond;
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding: 2rem;
  align-items: stretch;
}
</style>
