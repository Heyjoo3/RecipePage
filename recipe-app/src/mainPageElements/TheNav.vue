<template>
  <div class="sidenav">
    <div class="links">
      <!-- <a href="#">Home</a>
      <a href="#">Rezepte</a>
      <a href="#">Notizen</a> -->

      <router-link to="/start">Home</router-link>
      <router-link to="/rezepte">Rezepte</router-link>
      <router-link to="/notizen"> Notizen</router-link>
    </div>
    <div>
      <button @click="openAddModal"><i class="fa-solid fa-plus"> </i> Rezept</button>
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    openAddModal() {
      this.$store.dispatch("toggleAddModal");
    }
  }
};
</script>

<style scoped>
.sidenav {
  background-color: aliceblue;
  height: 100%;
  width: 10vw;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 1%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

a {
  padding: 8px 8px 8px 16px;
  text-decoration: none;
  font-size: 80%;
  display: flex;
}

button {
  width: 80%;
  height: 2rem;
  border-color: cadetblue;
  border-radius: 5%;
  background-color: burlywood;
}
</style>
