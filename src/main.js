
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Routes  from './routes.js'

import Navbar from './components/navbar.vue'
import Footer from './components/footer.vue'
import Signup from './components/signup.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

Vue.component('app-navbar', Navbar);
Vue.component('app-footer', Footer);
Vue.component('app-signup', Signup);

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
