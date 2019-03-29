import Vue from "vue";
import Router from "vue-router";

import Login from './views/User/Login.vue'

import Applicants from "./views/Applicant/Applicants.vue";
import Applicant from "./views/Applicant/Detail/Applicant.vue";
import DiscResult from "./views/Applicant/Result/DiscResult.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/", 
      name: "login",
      component: Login,
      alias: "/login"
    },
    {
      path: "/applicant", 
      name: "applicants",
      component: Applicants
    },
    {
      path: "/applicant/:applicantId", 
      name: "applicant",
      component: Applicant
    },
    {
      path: "/result/disc", // TODO: /result/:applicant_id/disc
      name: "discResult",
      component: DiscResult
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
