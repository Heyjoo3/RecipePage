import { createStore } from "vuex";

import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

const store = createStore({
  state: {
    modalStatus: false,
    addModalStatus: false, 
    quote: "",
    storedComments: JSON.parse(localStorage.getItem("myData")) || [],
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
