import Axios from "axios";

export default {
  state: {
    token: localStorage.getItem("token") || "",
    user: {}
  },
  mutations: {
    UPDATE_USER(state, payload) {
      state.token = payload.token;
      state.user = payload.user.username;
    },
    CLEAR_USER(state) {
      state.token = "";
      state.user = {};
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("UPDATE_LOADING", true);
        Axios.post(process.env.VUE_APP_API_URL + "/user/login", user)
          .then(res => {
            const token = res.data.data.token;
            localStorage.setItem("token", token);
            Axios.defaults.headers.Authorization = "Bearer " + token;
            commit("UPDATE_USER", { token, user });
            commit("UPDATE_LOADING", false);
            resolve(res);
          })
          .catch(e => {
            localStorage.removeItem("token");
            commit("UPDATE_LOADING", false);
            reject(e);
          });
      });
    },
    logout({ commit }) {
      return new Promise(resolve => {
        commit("UPDATE_LOADING", true);
        localStorage.removeItem("token");
        delete Axios.defaults.headers.common["Authorization"];
        commit("CLEAR_USER");
        resolve();
      });
    }
  },
  getters: {
    isLoggedIn: state => !!state.token
  }
};
