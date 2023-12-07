export default {
  toggleModal(state) {
    state.modalStatus = !state.modalStatus;
  },

  postComment(state, input) {
    state.comments.push(input);
  },

  saveQuote(state, response) {
    state.quote = response.data.quote;
  },
};
