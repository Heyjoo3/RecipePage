<template>
  <div class="card">
    <h2>Nudeln mit Pesto</h2>
    <p><b>10min</b></p>

    <input type="checkbox" name="isFavorit" id="" />
    <label for="isFavorit">Favorit</label>
    <br />
    <img
      src="../../assets/default.jpg"
      alt="Leider kann kein Bild angeizeigt werden ..."
    />
    <br />
    <h3>Zutaten für 4 Personen</h3>
    <ul>
      <li>500 g Nudeln</li>
      <li>1 Glas Pesto</li>
    </ul>
    <br />
    <h3>Schritte</h3>
    <ol>
      <li>Nudeln nach Packungsanweisung kochen</li>
      <li>Pesto hinzumischen</li>
    </ol>

    <div class="buttonBox">
      <button @click="openModal"><i class="fa-solid fa-pencil"></i></button>
      <button><i class="fa-solid fa-trash-can"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openModal() {
      this.$store.dispatch("toggleModal");
    },
  },
};
</script>

<style scoped>
.card {
  background-color: blanchedalmond;
  border-radius: 1rem;
  box-shadow: 3px 3px rgba(1, 2, 3, 0.123);
  padding: 2rem;
  padding-bottom: 1rem;
}

.buttonBox {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
button {
  width: 2rem;
  height: 2rem;
  border-color: cadetblue;
  border-radius: 50%;

  background-color: burlywood;
}

ul {
  list-style-type: none;
}

ol {
  text-align: justify;
  padding-left: 1rem;
}

img {
  width: 90%;
}
</style>
