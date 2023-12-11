import { createApp } from "vue";

import axios from "axios";
import VueAxios from "vue-axios";
import store from "./store/index.js";
import router from "./router.js";

import eventBus from "./event-bus.js";

import App from "./App.vue";

import TheHeader from "./mainPageElements/TheHeader.vue";
import TheNav from "./mainPageElements/TheNav.vue";
import TheBody from "./mainPageElements/TheBody.vue";
import BaseCard from "./baseComponents/BaseCard.vue";
import BaseModal from "./baseComponents/BaseModal.vue";
import EditModal from "./components/EditModal.vue";
import AddModal from "./components/AddModal.vue";


const app = createApp(App);

app.use(VueAxios, axios);
app.use(store);
app.use(router);

app.use(eventBus);

app.component("TheHeader", TheHeader);
app.component("TheNav", TheNav);
app.component("BaseCard", BaseCard);
app.component("TheBody", TheBody);
app.component("BaseModal", BaseModal);
app.component("EditModal", EditModal)
app.component("AddModal", AddModal)

app.mount("#app");
