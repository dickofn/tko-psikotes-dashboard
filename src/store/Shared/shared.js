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
    setError({ commit }, status) {
      commit('UPDATE_ERROR', status);
    },
    setLoading({ commit }, status) {
      commit('UPDATE_LOADING', status);
    }
  }
};
