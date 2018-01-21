<template>
  <nav class="box-background box-nav box-border">
    <ul>
      <li class="nav-text" v-for="icon in routes.icons">
        <a href="changeRoute"><i :class="icon"></i></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      routes: {
        icons: ['fas fa-home', 'fas fa-plus', 'fas fa-search', 'fas fa-cog'],
        routes: ['/', '/home', '/add', '/search']
      }
    }
  },
  methods: {
    changeRoute: function() {
      console.log("Link clicked");
    }
  }
}
</script>

<style>
</style>