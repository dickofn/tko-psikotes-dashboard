import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import shared from "./store/Shared/shared";
import applicant from "./store/Applicant/applicant";

export default new Vuex.Store({
  modules: {
    shared,
    applicant
  }
});
