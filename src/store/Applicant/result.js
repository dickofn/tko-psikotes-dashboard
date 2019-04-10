import Axios from "axios";

export default {
  state: {
    result: null
  },
  mutations: {
    UPDATE_RESULT(state, payload) {
      state.result = payload;
    }
  },
  actions: {
    getResult({ commit }, applicantId) {
      commit("UPDATE_LOADING", true);
      Axios.get(process.env.VUE_APP_API_URL + "/exam/result/get/" + applicantId)
        .then(res => {
          commit("UPDATE_RESULT", res.data.data);
          commit("UPDATE_LOADING", false);
        })
        .catch(e => {
          console.log(e);
        });
    },
    clearResult({ commit }) {
      commit("UPDATE_LOADING", true);
      commit("UPDATE_RESULT", null);
      commit("UPDATE_LOADING", false);
    }
  }
};
