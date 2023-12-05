import { createApp } from "vue";

import axios from "axios";
import VueAxios from "vue-axios";
import store from "./store/index.js";
// import router from "./router.js";

import App from "./App.vue";

import TheHeader from "./components/TheHeader.vue";
import TheNav from "./components/TheNav.vue";
import TheBody from "./components/TheBody.vue";
import BaseCard from "./components/baseComponents/BaseCard.vue";
import BaseModal from "./components/baseComponents/BaseModal.vue";

const app = createApp(App);

app.use(VueAxios, axios);
app.use(store);
// app.use(router);

app.component("TheHeader", TheHeader);
app.component("TheNav", TheNav);
app.component("BaseCard", BaseCard);
app.component("TheBody", TheBody);
app.component("BaseModal", BaseModal);

app.mount("#app");
