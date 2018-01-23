<template>
  <div class="container-welcome">
    <app-navbar class="navbar"></app-navbar>
    <app-header class="header"></app-header>
    <app-actions class="actions"></app-actions>
    <app-footer class="footer"></app-footer>
  </div>
</template>

<script>
import Header from './header.vue'
import Actions from './actions.vue'

export default {
  components: {
    'app-header': Header,
    'app-actions': Actions
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>