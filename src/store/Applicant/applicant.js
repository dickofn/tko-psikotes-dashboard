import Axios from "axios";

const auth = {
  headers: { Authorization: "Bearer " + localStorage.getItem("token") }
};

export default {
  state: {
    applicants: [],
    applicant: null
  },
  mutations: {
    UPDATE_APPLICANTS(state, payload) {
      state.applicants = payload;
    },
    UPDATE_APPLICANT(state, payload) {
      state.applicant = payload;
    }
  },
  actions: {
    getApplicants({ commit }) {
      return new Promise((resolve, reject) => {
        commit("UPDATE_LOADING", true);
        Axios.get(process.env.VUE_APP_API_URL + "/applicant/get/all", auth)
          .then(res => {
            commit("UPDATE_APPLICANTS", res.data.data);
            commit("UPDATE_LOADING", false);
            resolve(res);
          })
          .catch(e => {
            commit("UPDATE_LOADING", false);
            reject(e);
          });
      });
    },
    getApplicant({ commit }, applicantId) {
      return new Promise((resolve, reject) => {
        commit("UPDATE_LOADING", true);
        Axios.get(
          process.env.VUE_APP_API_URL + "/applicant/get/" + applicantId,
          auth
        )
          .then(res => {
            commit("UPDATE_APPLICANT", res.data.data);
            commit("UPDATE_LOADING", false);
            resolve(res);
          })
          .catch(e => {
            commit("UPDATE_LOADING", false);
            reject(e);
          });
      });
    },
    clearApplicant({ commit }) {
      commit("UPDATE_LOADING", true);
      commit("UPDATE_APPLICANT", null);
      commit("UPDATE_LOADING", false);
    }
  }
};
