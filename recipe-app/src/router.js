import { createRouter, createWebHistory } from "vue-router";
import FilterBarVue from "./components/FilterBar.vue";
import CardContainerVue from "./components/CardContainer.vue";
import HomePageVue from "./components/HomePage.vue";
import NotizPageVue from "./components/NotizPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/start",
      name: "home",
      // components: { filter: FilterBarVue, content: CardContainerVue },
    },
    {
      path: "/start",
      // redirect: "/start",
      name: "start",
      components: { page: HomePageVue },
    },
    {
      path: "/rezepte",
      name: "rezpete",
      components: { filter: FilterBarVue, content: CardContainerVue },
    },
    {
      path: "/notizen",
      name: "notizen",
      components: { page: NotizPageVue },
    },
  ],
});

export default router;
