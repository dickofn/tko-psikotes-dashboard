export default {
  state: {
    isError: false,
    isLoading: false
  },
  mutations: {
    UPDATE_ERROR(state, payload) {
      state.isError = payload;
    },
    UPDATE_LOADING(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    loadingError({ commit }, status) {
      commit('UPDATE_ERROR', status);
    },
    loadingStatus({ commit }, status) {
      commit('UPDATE_LOADING', status);
    }
  }
};
