import Vue from "vue";
import Router from "vue-router";
import store from './store.js'

import Login from "./views/User/Login.vue";

import Applicants from "./views/Applicant/Applicants.vue";
import Applicant from "./views/Applicant/Detail/Applicant.vue";
import DiscResult from "./views/Applicant/Result/DiscResult.vue";
import Report from "./views/Applicant/Result/Report.vue";

Vue.use(Router);

const router = new Router({
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
      component: Applicants,
      meta: { requiresAuth: true }
    },
    {
      path: "/applicant/:applicantId",
      name: "applicant",
      component: Applicant,
      meta: { requiresAuth: true }
    },
    {
      path: "/applicant/:applicantId/result/disc",
      name: "discResult",
      component: DiscResult,
      meta: { requiresAuth: true }
    },
    {
      path: "/applicant/:applicantId/result/report",
      name: "report",
      component: Report,
      meta: { requiresAuth: true }
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

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router;
