<template>
  <header>
    <div>
      <label for="">Hintergrundfarbe?</label> <input type="color" />
      <button><i class="fa-regular fa-floppy-disk"></i></button>
    </div>
    <h1>Friedas Rezepte</h1>
  </header>
</template>

<script></script>

<style scoped>
header {
  background-color: burlywood;
  width: 100vw;
  height: 10vh;
  z-index: 2;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 3vw;
  padding-left: 13vw;
}

input,
button {
  width: 2rem;
  height: 1.5rem;
  background-color: transparent;
  border: none;
}

div {
  display: flex;
  align-items: center;
}
</style>
