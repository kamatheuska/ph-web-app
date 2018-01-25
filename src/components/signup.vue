<template><!-- 
  <div class="signup-grid">
    <div class="signup-logo">
       <img src="../assets/logo/logoEngraved.png" alt="Logo">
    </div>
    <div class="box box-background box-border">
      <div class="signup-form">
        <h3><router-link to="/dash">GO TO DASH</router-link></h3>
        <form action="signup">
          <label for="user">usuario: </label>
          <input type="text">
          <label for="password">contraseña: </label>
          <input id="password" type="password">
          <div class="buttons">
            <button type="submit">register</button>
            <router-link to="/singup"><button type="submit">sign in</button></router-link>            
          </div>
        </form>  

      </div>
    </div>
  </div> -->
  <h1>test</h1>
</template>

<script>
import Dashboard from './dashboard.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    'app-dashboard': Dashboard
  }
}
</script>

<style>
</style>