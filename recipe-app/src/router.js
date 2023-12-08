import { createRouter, createWebHistory } from "vue-router";
import HomePageVue from "./pages/HomePage.vue";
import NotizPageVue from "./pages/NotizPage.vue";
import RezeptPageVue from "./pages/RezeptPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/start",
      name: "home",
    },
    {
      path: "/start",
      name: "start",
      components: { page: HomePageVue },
    },
    {
      path: "/rezepte",
      name: "rezpete",
      components: { page: RezeptPageVue },
    },
    {
      path: "/notizen",
      name: "notizen",
      components: { page: NotizPageVue },
    },
  ],
});

export default router;
