//import component from **.js
import Welcome from './components/welcome.vue'
import Search from './components/search.vue'
import Add from './components/add.vue'

export default [
  {
    path: '/',
    component: Welcome
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/add',
    component: Add
  }
]