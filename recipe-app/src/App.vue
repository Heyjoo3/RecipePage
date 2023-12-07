<template>
  <the-header></the-header>
  <the-nav></the-nav>
  <the-body></the-body>
  <base-modal v-if="modalStatus"></base-modal>
</template>

<script>
export default {
  data() {
    return {
      rezepteVegan: [
        {
          titel: "Süßkartoffel - pommes",
          imgID: "fries.jpg",
          dauer: 10,
          isFavorite: true,
          zutaten: [
            "1 kg Süßkartoffel",
            "8 El Öl",
            "1 El Salz",
            "3 El Speisestärke",
            "1 Tl Paprikapulver",
          ],
          anleitung: [
            "Süßkartoffeln schälen und in etwa 1 cm dicke und 8 cm lange Stifte schneiden. Diese etwa 1 Stunde in eine große Schüssel mit Wasser legen.",
            "Backofen auf 200 °C Umluft vorheizen. Ein Backblech mit Backpapier auslegen.",
            "Wasser wegschütten und Süßkartoffeln gut abtrocknen, ausbreiten und gleichmäßig mit Speisestärke bestreuen (am besten mit Hilfe eines Siebs). In einer großen Schüssel Süßkartoffeln, Olivenöl, Salz und Paprikapulver vermengen, so dass die Süßkartoffeln gut überzogen sind. Die Süßkartoffelpommes gleichmäßig auf dem Backblech verteilen. Sie sollten sich dabei möglichst nicht berühren, ggf. zwei Bleche benutzen.",
            "Im Backofen insgesamt ca. 20 Minuten backen. Damit die Süßkartoffelpommes möglichst knusprig werden, zwischendurch immer mal wieder die Backofentür öffnen, damit die Feuchtigkeit entweichen kann. Nach der Hälfte der Zeit die Süßkartoffelpommes wenden.",
          ],
        },
        {
          titel: "Penne mit Spinat und Tomaten",
          imgID: "penne.jpg",
          dauer: 35,
          isFavorite: false,
          zutaten: [
            "2 Tomaten",
            "1 Bund Spinat (junge Blätter)",
            "2 EL Magerine",
            "1 Msp Muskatnuss",
            "250 g Nudeln",
            "1 Becher Vegane Sahne",
            "1 EL Senf",
            "1 Prise Pfeffer",
            "1 Prise Salz",
          ],
          anleitung: [
            "Spinat gut waschen und die Tomaten klein schneiden. Nudeln in Salzwasser bissfest kochen, dann gut abtropfen lassen.",
            "In einer tiefen Pfanne die Magerine erhitzen und den Spinat und die Tomaten darin weich dünsten.",
            "Sahne mit dem Senf vermengen, einrühren und etwas köcheln lassen.",
            "Mit Salz, Pfeffer und Muskat würzen, dann die Nudeln unterheben.",
          ],
        },
        {
          titel: "Veganes Grilled Cheese Sandwich",
          imgID: "toast.jpg",
          dauer: 20,
          isFavorite: false,
          zutaten: {
            oel: "2 TL Olivenöl",
            knoblauch: "4 Knoblauchzehen gehackt",
            spinat: "6 Handvoll frischer Spinat",
            salz: "Prise Salz oder mehr nach Geschmack",
            veganerFrischkaese: "4 EL veganer Frischkäse",
            brot: "8 Scheiben Brot nach Wahl",
            veganeButterOderOel: "2 EL vegane Butter oder Öl",
            veganerCheddarKaese: "250 g veganer Cheddar Käse gerieben",
          },
          anleitung: [
            "Einen Teelöffel Olivenöl in einer Pfanne erhitzen und den Knoblauch ca. 1/2 Minute anbraten.",
            "Dann den Spinat und eine Prise Salz dazugeben und eine weitere Minute dünsten, bis der Spinat zusammengefallen ist.",
            "Anschließend in eine Schüssel geben und die überschüssige Flüssigkeit ausdrücken.",
            "Zuletzt den veganen Frischkäse und eine weitere Prise Salz nach Geschmack hinzugeben und verrühren.",
            "Die Pfanne säubern (oder eine andere große Pfanne nehmen) und auf mittlere Hitze erhitzen.",
            "Eine Seite der Brotscheiben mit etwas veganer Butter (oder Öl) bestreichen.",
            "Sobald die Pfanne heiß genug ist, 2 Scheiben Brot mit der gebutterten Seite nach unten hineinlegen.",
            "Auf jede Scheibe etwas geriebenen Käse streuen und dann die Spinat-Creme darauf verteilen und noch etwas mehr Käse (ca. 60g Käse pro Sandwich).",
            "Nun die anderen 2 Scheiben Brot darauf legen.",
            "Mit einem Pfannenwender leicht auf das Käse-Sandwich drücken, damit der Käse besser schmelzen kann und es besser zusammenhält.",
            "Sobald das untere Brot gebräunt ist, das Sandwich umdrehen und auch die andere Seite goldbraun knusprig braten (ca. 2-4 Minuten pro Seite).",
            "Warm servieren und genießen!",
          ],
        },
      ],
    };
  },
  computed: {
    modalStatus() {
      return this.$store.getters["getModalStatus"];
    },
  },

  methods: {
    handleToggleFavorite(info) {
      const rezept = this.rezepteVegan.find((r) => r.titel === info);

      if (rezept) {
        rezept.isFavorite = !rezept.isFavorite;
      } else {
        console.error(`Rezept mit dem Titel "${info}" wurde nicht gefunden.`);
      }
    },
  },

  provide() {
    return {
      rezepteVegan: this.rezepteVegan,
    };
  },

  mounted() {
    this.$eventBus.on("toggleFavorite", this.handleToggleFavorite);
  },

  beforeUnmount() {
    this.$eventBus.off("toggleFavorite", this.handleToggleFavorite);
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
