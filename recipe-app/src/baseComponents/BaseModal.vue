<template>
  <Transition><div class="backdrop" v-if="isShowing" @click="closeModal"></div></Transition>
  
  <Transition>
  <div class="modal" v-if="isShowing">
    <slot name="title"></slot>
    <slot name="formInput"></slot>
    <slot></slot>
  </div>
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      isShowing: false,
    };
  },
  methods: {
    closeModal() {
     
      this.isShowing = false;
      setTimeout(() => {
        this.$store.dispatch("closeAllModals");
      }, 600);
  },
  },

  mounted() {
  this.isShowing = true;
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
  transition: opacity 0.5s ease-out;
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
