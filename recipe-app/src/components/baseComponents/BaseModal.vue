<template>
  <div class="backdrop" @click="closeModal"></div>
  <Transition>
    <div class="modal" v-if="isShowing">
      <form @submit.prevent="">
        <h2>Füge ein Rezept hinzu</h2>
        <label for="">Titel</label> <br />
        <input type="text" /><br />
        <label for="">Dauer</label><br />
        <input type="number" /><br />
        <label for="">Foto</label><br />
        <input type="file" /><br />
        <label for="">Zutaten</label><br />
        <input type="text" /><br />
        <label for="">Schritte</label><br />
        <input type="text" /><br />

        <input type="radio" name="diet" value="Carnivore" id="carnivore" />
        <label for="">Carnivore</label><br />
        <input
          type="radio"
          name="diet"
          value="Vegetrarisch"
          id="vegetrarisch"
        /><label for="">Vegetarisch</label><br />
        <input type="radio" name="diet" value="Vegan" id="vegan" />
        <label for="">Vegan</label><br />
        <button>Speichern</button>
      </form>
    </div>
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      isShowing: true,
    };
  },
  methods: {
    closeModal() {
      this.$store.dispatch("toggleModal");
      this.isShowing = false;
    },
  },
};
</script>

<style scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.modal {
  position: fixed;
  width: 60vw;
  height: 60vh;
  top: 20vh;
  left: 20vw;
  z-index: 20;
  background-color: azure;
  border-radius: 2rem;
  padding: 2rem;
  transition: all 1s;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 19;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
