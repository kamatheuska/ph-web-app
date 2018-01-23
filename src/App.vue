<template>
  <router-view></router-view>
</template>

<script>
import superagent from 'superagent'
import Welcome from './components/welcome.vue'

// import Navbar from './components/navbar.vue'

export default {
  components: {
    'app-welcome': Welcome
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    // fetchData: function() {
    //   superagent.get('/api/test').then((response) => {
    //     this.msg = `${response.body.name} ${response.body.msg}`;
    //   });
    // }
  }
  // created() {
  //   this.fetchData();
  // }
}
</script>

<style>




/*===========================================*\
/°-------------------------------------------°\

  TABLE OF CONTENTS:

  1 -  RESET RULES
  2 -  CONTAINERS
  3 -  BACKGROUNDS & BORDERS
  4 -  HEADINGS
  5 -  TEXT AND LINKS
  6 -  IMAGES
  7 -  COLOR PALLETE

\°-------------------------------------------°/
\*===========================================*/




/*-------------------------------------------*\
  #RESET RULES
\*-------------------------------------------*/
html, body {
  height: 100vh;
  width: 100%;
  /*overflow: hidden;*/
}
html, body, ul {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: 'Lato', sans-serif;
}
*, *:before, *:after {
  font-family: Tahoma, sans-serif;
  font-weight: 100;
  color: #1D292F;
  box-sizing: inherit;
}

h1, h2, h3, h4,
p, button {
  font-family: 'Roboto', sans-serif;

}

/*font-family: 'Roboto', sans-serif;
font-family: 'Lato', sans-serif;*/




/*-------------------------------------------*\
  #CONTAINERS
\*-------------------------------------------*/

/*  The following is the implementation fo CSS Grid Layout  */


.box-nav ul li {
  display: inline-block;
}
.box-nav ul {
  height: 0;
  padding-top: 1rem;

}
.actions .buttons {
  width: 80%;
  margin: 0 10%;
}
.actions .buttons div {
  margin: 1rem auto;
  display: inline-block;
}





/*-------------------------------------------*\
  #BACKGROUNDS AND #BORDERS
\*-------------------------------------------*/

body {
  background-color: #222;
  background: url("./assets/patterns/wavegrid.png") repeat;
}
.box-background {  
  background-color: #fff/*#79A6D2*//*#6699CC*/;
}
.box-border {
  border-bottom:  3px #85a4b2 solid;
  border-right:   1px #85a4b2 solid;
  border-radius:  0.7rem;
}
nav.box-background, footer.box-background {
  border-radius: 0;
  background: #1d292f;
}



/*-------------------------------------------*\
  #HEADINGS
\*-------------------------------------------*/
h1 {
  display: block;
}
h2 {
  text-align: center;
  font-size: 2rem;
}


/*-------------------------------------------*\
  #TEXT AND LINKS
\*-------------------------------------------*/
.nav-text a {
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: 900;
  margin: 0 3rem;
}
.nav-text path {
  color: #A7C8D8;
}
.header p, .header p span {
  font-size: 1.3rem;
  text-align: right;
  text-justify: inter-word;
  letter-spacing: 2px;
  line-height: 150%;
  /*color: #2F566A;*/
  font-weight: 530;
}

.header p span {
  color: #CC0000;
}
.box-footer p {
  color: #A7C8D8;
}
/*-------------------------------------------*\
  #IMAGES
\*-------------------------------------------*/


.header img {
  margin: 0 auto;
  height: auto;
  display: inline-block;
  max-height: 90px;
  max-width: 50%;
  opacity: 0.6;
  float: left;
}





/*-------------------------------------------*\
  #BUTTONS
\*-------------------------------------------*/

.buttons button {
  background: none;
  width: 9.5rem;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5rem 1rem 0.5rem 0rem;
  padding: 0.8em 1.6em;
  font-size: 1rem;
  color: #5b716a;
  /*color: #A3BDBA;*/ /*Default color*/
  text-shadow: 0px 1px 0px rgba(0,0,0, .34);
  font-weight: 700;
}


button:hover {
  /*transform: translateY(-0.45em);*/
  color: #FFFFF5;
  background: red;
  border: 2px #5b716a solid;

}





/*-------------------------------------------*\
  #GRIDS
\*-------------------------------------------*/

/* MAIN GRID FOR COMPONENTS */
.container-welcome, .container-add, .container-search {
  height: 100%;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 4rem 1rem auto auto 1rem 4rem;
  grid-gap: 1rem;
}
.box {
  /*justify-content: center;*/
  padding: 1rem 3rem;
}
.navbar {
  grid-column: 1 / -1;
  text-align: center;
}
.header {
  grid-column: 4 / 10;
  grid-row: 3 / 4;
}
.actions {
  grid-column: 4 / 7;
  grid-row: 4 / 5;
}
.footer {
  grid-column: 1 / -1;
  grid-row: 5 / -1;
  text-align: center;
}

/* NESTED GRID FOR ADD COMPONENT */
.add-grid {
  grid-column: 4 / 10;
  grid-row: 3 / 4;
}
.add-grid form {    
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(1rem, auto);
  grid-gap: 0.2rem;
} /*
.add-grid h1 {
  grid-column: 1 / -1;
}*/


/*-------------------------------------------*\
  #FORMS
\*-------------------------------------------*/
.add-form {
  text-align: center;
}
.add-form > label {
  text-align: right;
}
.add-form > * , .search-form > * {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-family: 'Lato', sans-serif;
  letter-spacing: 2px;
  align-self: right;
}
.add-form input, textarea {
  padding: 2px;
  border: 1px #999 solid;
}
.search-form input {
  margin-top: 0.4rem;
  width: 100%;
}

/*font-family: 'Roboto', sans-serif;
font-family: 'Lato', sans-serif;*/

/*-------------------------------------------*\
  #COLOR PALETTES AND #PATTERNS
\*-------------------------------------------*/

/*
                #DEDAB5
                #B4A98B
                #5C6B66
                #FFFFF5
                #A3BDBA
LIGHTEST GREEN: #D2E0DE 
DARKEST GREEN:  #242D2A 
LIGHT ORANGE:   #FFD1B3  

SHADES OF BLUE:
                #2F566A
                #3E738E
LIGHT BLUE:     #99EBFF
BLUE GREEN DARK: #1D292F

Concrete:
  url("./assets/patterns/concrete.png")
Confectionary:
  url("./assets/patterns/confectionary.png")
Cork:
  url("./assets/patterns/cork.png")
Dark:
  url("./assets/patterns/dark.png")
Light:
  url("./assets/patterns/light.png")
Round:
  url("./assets/patterns/round.png")
Wavegrid:
  url("./assets/patterns/wavegrid.png")
Waves:
  url("./assets/patterns/waves.png")
  */





  </style>
