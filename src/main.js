import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import SmartTable from "vuejs-smart-table";

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueAxios, axios);
Vue.use(SmartTable);

if (store.getters.isLoggedIn) {
  axios
    .post(process.env.VUE_APP_API_URL + "/user/validation", {
      token: store.state.user.token
    })
    .catch(e => {
      if (
        e.response.status === 401 &&
        e.response.config &&
        !e.response.config.__isRetryRequest
      ) {
        store.dispatch("logout");
        router.push({ name: "login" });
      }
    });
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
