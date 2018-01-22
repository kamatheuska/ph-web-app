<template>
  <div id="app">
    <app-navbar></app-navbar> 
    <div>
      <app-welcome></app-welcome>
    </div>    
  </div>
</template>

<script>
import superagent from 'superagent';
//
export default {
  name: 'app',
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

.container {
  margin: 2rem 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2rem;
  max-height: 200px;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 3rem;
}
.box-nav {
  width: 100%;
  min-height: 2rem;
  text-align: center;
}
.box-nav ul li {
  margin: 1.2rem 3.8rem;
  display: inline-block;
}
.header {
  grid-column: 2 / span 2;
  grid-row: 1 / span 1;
}
.box.actions {
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
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
nav.box-background {
  border-radius: 0;
  background: #1d292f;
}

nav.box.background ul {
  width: 100%;
}




/*-------------------------------------------*\
  #HEADINGS
\*-------------------------------------------*/





/*-------------------------------------------*\
  #TEXT AND LINKS
\*-------------------------------------------*/

.nav-text a {
  text-decoration: none;
  font-size: 2rem;
  text-shadow: 0px 1px 0px rgba(255, 255, 255, .5);
  font-weight: 900;
}
*, *:before, *:after {
  font-family: Tahoma, sans-serif;
  color: #A7C8D8; 
  font-weight: 100;
}

.header p, .header p span {
  font-size: 1.3rem;
  text-align: right;
  text-justify: inter-word;
  letter-spacing: 2px;
  line-height: 150%;
  /*color: #2F566A;*/
  color: #1D292F;
  font-weight: 530;
}

.header p span {
  color: #CC0000;
}
.actions p {
  color: #1D292F;
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
}





/*-------------------------------------------*\
  #BUTTONS
\*-------------------------------------------*/

.buttons button {
  background: none;
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
  font-family: monospace;
}
.buttons div button:hover,
.buttons button:focus {
}

button:hover {
  box-shadow: 0 0.5em 0.5em -0.4em;
  transform: translateY(-0.45em);
  color: #FFFFF5;
  background: red;

}




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
