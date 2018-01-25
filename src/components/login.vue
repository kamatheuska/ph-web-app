<template>
  <div class="login-grid">
    <div class="login-logo">
       <img src="../assets/logo/logoEngraved.png" alt="Logo">
    </div>
    <div class="box box-background box-border">
      <div class="login-form">
        <h3><router-link v-model:user-data="user.username" to="/dash">GO TO DASH</router-link></h3>
        <form>
          <label for="user">usuario: </label>
          <input id="username" type="text" v-model:value="user.username">
          <label for="password">contraseña: </label>
          <input id="password" type="password" v-model:value="user.password">
          <div class="buttons">
            <button type="submit" @click.prevent="setUser">sign in</button>
            <button v-on:submit.prevent="onSubmit"><router-link to="/singup">sign up</router-link> </button>
          </div>
        </form> 
      </div>
      <h2>{{user.username}} {{user.password}}</h2>
    </div>
  </div>
</template>

<script>
import Dashboard from './dashboard.vue'

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''

      }
    }
  },
  components: {
    'app-dashboard': Dashboard
  },
  methods: {
    setUser: function() {
      console.log(this.user);
    }
  }
}
</script>

<style>
.login-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 2rem;
  height: 100%;
  width: 100%;
}
.login-grid div:nth-child(1) {
 /* height: 100%;
  width: 100%;*/
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  padding-top: 4rem;
  padding-right: 2rem;

}
.login-grid div:nth-child(2) {
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
}

/*  GRID FOR THE FORM   */
.login-form {
  height: 100%;
  width: 100%;  
}
.login-form form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(3rem, 5rem);
  align-items: center;
}
.login-form  {
  grid-column: 1 / span 2;
}
.login-form h3 a {
  grid-column: 1 / span 2;
  color:  #A7C8D8;
  text-shadow: 1px 1px 0 #444;
}
.login-form .buttons {
  grid-column: 1 / span 2;
}

/*  ELEMENTS  */
.login-grid div img {
  width: 100%;
}
.login-form label {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
.login-form .buttons button {
  display: inline-block;
  color: #fff;
  font-size: 1.4rem;
}
.login-form .buttons button:nth-child(odd) {
  background: #D18527;
}
.login-form .buttons button:nth-child(even) {
  background: #A7C8D8;;
}
.login-form .buttons button:hover {
  display: inline-block;
  background: red;
}

</style>