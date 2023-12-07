<template>
  <h1>Wilkommen auf meiner Rezeptsammlung😊</h1>
  <p>Finde hier leckere Ideen für dein Essen</p>
  <p>Schreibe mir gerne auch eine Notiz mit eigenen Ideen oder anregungen</p>
  <br />
  <h3>Quote of the day</h3>
  <p id="quote">{{ quote }}</p>
  <button @click="saveQuote">Zitat</button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: { ...mapActions(["saveQuote"]), ...mapGetters(["getQuote"]) },
  computed: {
    quote() {
      return this.getQuote();
    },
  },
};
</script>

<style scoped>
#quote {
  font-family: "Times New Roman", Times, serif;
  font-size: xx-large;
}
</style>
