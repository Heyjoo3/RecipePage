<template>
    <base-modal>
    <template v-slot:titel> 
<h2>Rezepte bearbeiten</h2>
    </template>
    <template #formInput> 
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

</template></base-modal>
</template>