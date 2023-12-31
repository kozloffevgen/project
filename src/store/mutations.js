export default {
  setStatus(state, playload) {
    state.isLoading = playload;
  },

  setData(state, playload) {
    state.data = playload;
  }
};
