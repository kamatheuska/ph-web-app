<template>
  <nav class="box-background box-nav box-border">
    <ul>
      <li class="nav-text">
        <router-link to="/">
          <i class="fas fa-home"></i>
        </router-link>
      </li>
      <li class="nav-text">
        <router-link to="/add">
          <i class="fas fa-plus"></i>
        </router-link>
      </li>
      <li class="nav-text">
        <router-link to="/search">
          <i class="fas fa-search"></i>
        </router-link>
      </li>
      <li class="nav-text">
        <router-link to="#">
          <i class="fas fa-cog"></i>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      routes: {
        icons: ['', 'fas fa-plus', 'fas fa-search', 'fas fa-cog'],
        routes: ['/', '/home', '/add', '/search']
      }
    }
  }
}
</script>

<style>
</style>