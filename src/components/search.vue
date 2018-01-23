<template>
  <div class="container-search">
    <app-navbar class="navbar"></app-navbar>
    <div class="header box box-background box-border">
      <h2>This is the Search component</h2>
      <hr><br>
      <form class="search-form">
        <label>Escribe una palabra clave:</label>
        <input type="text" placeholder="palabra clave...">
      </form>
    </div>
    <app-footer class="footer"></app-footer>
  </div>  
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>

</style>