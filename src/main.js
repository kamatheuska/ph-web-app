import Vue from 'vue'
import App from './App.vue'
import Header from './components/header.vue'
import Navbar from './components/navbar.vue'
import Welcome from './components/welcome.vue'
import Actions from './components/actions.vue'

Vue.component('app-header', Header);
Vue.component('app-navbar', Navbar);
Vue.component('app-welcome', Welcome);
Vue.component('app-actions', Actions);

new Vue({
  el: '#app',
  render: h => h(App)
})
