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
import i18n from './i18n'

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueAxios, axios);
Vue.use(SmartTable);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
