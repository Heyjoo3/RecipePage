<template>
  <h2>Du hast Ideen oder Anregungen?</h2>
  <p>Dann schreibe sie mir gerne hier auf</p>

  <div>
    <input type="text" v-model="inputText" />
    <button @click="savelocal">Posten</button>
  </div>

  <div>
    <div>
      <h3>Na? Irgendwelche Ideen? 🤔</h3>
    </div>

    <div>
      <li></li>
    </div>
  </div>

  <div></div>
</template>
