import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'

import "./app-bootstrap";
var firebase = require('firebase/app');
require('firebase/auth');

Vue.config.productionTip = false;

Vue.filter('capsfirst', function (value) {
  if (value !== null) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  } else {
    return "";
  }
});

var firebaseConfig = {
  apiKey: "AIzaSyAHUhDRcIwuZGvTPEhvG1zUpLet__98joI",
  authDomain: "ahmsbashe.firebaseapp.com",
  databaseURL: "https://ahmsbashe.firebaseio.com",
  projectId: "ahmsbashe",
  storageBucket: "ahmsbashe.appspot.com",
  messagingSenderId: "476523736767",
  appId: "1:476523736767:web:3b5ca6351dc19ac387e00a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

store.state.firebase = firebase;


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLoggedIn) {
      store.state.next = next;
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      store.state.next = null;
      next()
    }
  } else {
    if (store.getters.isLoggedIn) {
      next({
        path: '/'
      });
    }
    store.state.next = null;
    next() // make sure to always call next()!
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
  created(){
      firebase.auth().onAuthStateChanged(function (user) {
        if(user){
          store.commit('SET_USER_DATA', user);
          if(store.state.next !== null){
            store.state.next();
          }else{
            router.push("/");
          }
        }else{
          // user is logged out
          router.push("/login");
        }
      });
  }
}).$mount("#app");
