//imp ort component from **.js
import Dashboard from './components/dashboard.vue'
import Search from './components/search.vue'
import Add from './components/add.vue'
import Login from './components/login.vue'
import Signup from './components/signup.vue'

export default [
  {
    path: '/',
    component: Login
  },
  {
    path: '/dash',
    component: Dashboard
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/add',
    component: Add
  },
  {
    path: '/signup',
    component: Signup
  }
]