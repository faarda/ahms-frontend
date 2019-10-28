import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import List from "./views/List.vue";
import Cattle from "./views/Cattle.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: "/animals",
      name: "list",
      component: List,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: "/animals/cattle",
      component: Cattle,
      name: "cattle-diseases",
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresAuth: false
      },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
