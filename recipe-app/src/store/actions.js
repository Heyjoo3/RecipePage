import service from "@/service.js";

export default {
  toggleModal({ commit }) {
    commit("toggleModal");
  },
  postCommnent({ commit }, payload) {
    commit("postComment", payload);
  },

  saveInputToLocalStorage({ commit }, newData) {
    // ersertzt wert von myData mit newDAta
    // localStorage.setItem("myData", newData);

    //für newData zu  myData array hinzu
    const existingData = JSON.parse(localStorage.getItem("myData")) || [];

    existingData.push(newData);
    if (existingData.length > 15) {
      existingData.shift();
    }
    localStorage.setItem("myData", JSON.stringify(existingData));

    commit("updateStoredComments", existingData);
  },

  async saveQuote({ commit }) {
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
