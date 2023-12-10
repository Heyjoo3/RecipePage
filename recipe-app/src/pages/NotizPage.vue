<template>
  <h2>Du hast Ideen oder Anregungen?</h2>
  <p>Dann schreibe sie mir gerne hier auf</p>

  <div>
    <input type="text" v-model="inputText" />
    <button @click="saveLocal()">Posten</button>
  </div>

  <div>
    <div v-if="storedComments.length === 0">
      <p>Noch keine Ideen vorhanden. Sei der Erste!</p>
    </div>
    <div v-else>
      <ul  v-for="(comment, index) in storedComments" :key="JSON.stringify(new Date()) + index">
        <li>
          {{ comment }}
        </li>
      </ul>
    </div>
  </div>

  <div></div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      inputText: "",
    };
  },

  computed: {
    ...mapGetters(["storedComments"]),
  },

  watch: {
    inputText(newText, oldText) {
      if (newText.length > 50) {
        alert("Der Text darf maximal 50 Zeichen lang sein.");
        this.inputText = oldText;
      }
    },
  },

  methods: {
    saveLocal() {
      if (this.inputText.trim() !== "") {
        this.$store.dispatch("saveInputToLocalStorage", this.inputText);
      this.inputText = "";}
      
    },
  },
};
</script>
