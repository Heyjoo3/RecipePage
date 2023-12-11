export default {
  toggleModal(state) {
    state.modalStatus = !state.modalStatus;
  },

  toggleAddModal(state) {
    state.addModalStatus = !state.addModalStatus
  },

  closeAllModals(state) {
    state.addModalStatus = false;
    state.modalStatus = false
  },

  postComment(state, input) {
    state.comments.push(input);
  },

  updateStoredComments(state, newData) {
    state.storedComments = newData;
  },

  saveQuote(state, response) {
    state.quote = response.data.quote;
  },
};
