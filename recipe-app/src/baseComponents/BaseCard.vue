<template>
  <div class="card">
    <h2>{{ rezept.titel }}</h2>
    <p>
      <b>{{ rezept.dauer }} min</b>
    </p>

    <div @click="toggleFavorite()">
      <i v-if="rezept.isFavorite" class="fa-solid fa-star"></i>
      <i v-else class="fa-regular fa-star"></i>
    </div>

    <br />
    <!-- brauct requiqre() für dynamische img paths, when using webpack oder ähnliche module budler  -->
    <!-- <img src="@/assets/burger.jpg" alt="" /> -->
    <img :src="require('@/assets/' + rezept.imgID)" :alt="rezept.imgID" />
    <!-- <img :src="source" alt="shit" /> -->
    <br />
    <h3>Zutaten für 4 Personen</h3>
    <ul v-for="(zutat, index) in rezept.zutaten" :key="JSON.stringify(new Date()) + index">
      <li>{{ zutat }}</li>
    </ul>
    <br />
    <h3>Anleitung</h3>
    <!-- <ol v-for="(schritt, index) in rezept.anleitung" :key="JSON.stringify(new Date())">
      <li>{{ schritt }}</li>
    </ol> -->
    <div v-show="isOpen">
      <ol v-if="rezept.anleitung.length > 0" start="1">
        <li v-for="(schritt, index) in rezept.anleitung" :key="JSON.stringify(new Date()) + index">
          {{ schritt }}
        </li>
      </ol>
    </div>

    <button @click="openAnleitung">
      <i v-if="isOpen" class="fa-solid fa-chevron-up"></i>
      <i v-else class="fa-solid fa-chevron-down"></i>
    </button>

    <div class="buttonBox">
      <button @click="openModal"><i class="fa-solid fa-pencil"></i></button>
      <button><i class="fa-solid fa-trash-can"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // source: require("@/assets/default.jpg"),
      isOpen: false,
    };
  },
  // watch: {
  //   "rezept.imgID": function (newImgID) {
  //     if (newImgID) {
  //       this.source = require(`@/assets/${newImgID}`);
  //     }
  //   },
  // },
  props: {
    rezept: Object,
  },
  methods: {
    openModal() {
      this.$store.dispatch("toggleModal");
    },
    openAnleitung() {
      this.isOpen = !this.isOpen;
    },
    toggleFavorite() {
      const info = this.rezept.titel;
      this.$eventBus.emit("toggleFavorite", info);
    },
  },
  // mounted() {
  //   if (this.rezept && this.rezept.imgID) {
  //     this.source = require(`@/assets/${this.rezept.imgID}`);
  //     console.log(this.source);
  //   }
  // },
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
