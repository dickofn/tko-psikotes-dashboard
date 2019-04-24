import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import shared from "./store/Shared/shared";
import user from "./store/User/user";
import applicant from "./store/Applicant/applicant";
import result from "./store/Applicant/result";

export default new Vuex.Store({
  modules: {
    shared,
    user,
    applicant,
    result
  }
});
