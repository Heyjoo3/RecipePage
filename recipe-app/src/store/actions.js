import service from "@/service.js";

export default {
  toggleModal({ commit }) {
    commit("toggleModal");
  },
  postCommnent({ commit }, payload) {
    commit("postComment", payload);
  },

  async saveQuote({ commit }) {
    console.log("action");
    await service
      .getFoodQuote()
      .then((response) => {
        if (response.status === 200) {
          commit("saveQuote", response);
        } else {
          console.warn("ERROR");
        }
      })
      .catch((error) => {
        console.error("connection problem", error);
      });
  },
};
