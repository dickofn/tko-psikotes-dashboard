import Axios from "axios";

const auth = {
  headers: { Authorization: "Bearer " + localStorage.getItem("token") }
};

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
      return new Promise((resolve, reject) => {
        commit("UPDATE_LOADING", true);
        Axios.get(
          process.env.VUE_APP_API_URL + "/exam/result/get/" + applicantId,
          auth
        )
          .then(res => {
            commit("UPDATE_RESULT", res.data.data);
            commit("UPDATE_LOADING", false);
            resolve(res);
          })
          .catch(e => {
            reject(e);
          });
      });
    },
    clearResult({ commit }) {
      commit("UPDATE_LOADING", true);
      commit("UPDATE_RESULT", null);
      commit("UPDATE_LOADING", false);
    }
  }
};
