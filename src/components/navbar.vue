<template>
  <nav class="box-background box-nav box-border">
    <div class="header-logo">
      <img src="../assets/logo/logoWhite.png" alt="Logo">
    </div>
    <div class="header-msg">
      <h2>Bienvenido, <span>{{routes.users[1]}}</span>...</h2>       
    </div>
    <div class="nav-icons">
      <ul>
        <li>
          <router-link to="/">
            <i class="fas fa-home"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/add">
            <i class="fas fa-plus"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/search">
            <i class="fas fa-search"></i>
          </router-link>
        </li>
        <li>
          <router-link to="#">
            <i class="fas fa-cog"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="login-menu">
      <h3>Perfil</h3>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      routes: {
        icons: ['', 'fas fa-plus', 'fas fa-search', 'fas fa-cog'],
        routes: ['/', '/home', '/add', '/search'],
        users: ['Ivonne', 'Nicolas', 'Francisco']
      }
    }
  // methods: {
  //   fetchData: function() {
  //     superagent.get('/api/test').then((response) => {
  //       this.msg = `${response.body.name} ${response.body.msg}`;
  //     });
  //   }
  // },
}
}
</script>

<style scoped>

/*   INNER GRID OF NAV   */
.box-nav {
  display: grid;
  grid-template-columns: 15rem repeat(10, 1fr) 15rem; 
  grid-template-rows: 100%;
  grid-gap: 1rem;
  color: #A7C8D8;
  height: 100%;
  padding: 0.5rem;
  align-items: center;
}
.box-nav .header-logo {
  grid-column: 1 / span 1;
}
.box-nav .header-msg {
  grid-column: 2 / span 3;
  color: inherit;
  margin-left: 2rem;
}
.box-nav .nav-icons {
  grid-column: 5 / span 4;
  color: inherit;
}
.box-nav .login-menu {
  grid-column: -2 / span 1;
  width:60%;
  justify-self: end;
  color: inherit;
}

/*   SUBGRID NAV-ICONS   */

.nav-icons ul {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 100%;
  align-items: center;
}

/*   ELEMENT STYLING   */
.box-nav .header-logo img {
  max-height: 100%;
}
.box-nav h2, .box-nav h2 span {
  letter-spacing: 2px;
  font-weight: 900;
  color: inherit;
}
.box-nav .header-msg h2 span {
  color: #D18527;
}
.box-nav .nav-icons ul {
  color: inherit;
  text-align: center;
}
.box-nav .nav-icons ul li {
  color: inherit;
  display: inline-block;
  margin: 0 5%;
}
.box-nav .nav-icons ul li a {
  color: inherit;
}
.login-menu {
  grid-column: 4 / span -1;
  width: 100%;
  color: inherit;
}
.login-menu li {
  font-weight: 900;
  /*visibility: none;*/
}



</style>