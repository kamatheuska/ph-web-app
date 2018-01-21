<template>
  <div id="app">
    <app-navbar></app-navbar> 
    <div class="container">
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

html, body, ul {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
}
*, *:before, *:after {
  box-sizing: inherit;
}






/*-------------------------------------------*\
  #CONTAINERS
\*-------------------------------------------*/

.container {
  margin: 0 15rem;
}
.box {
  margin: 2rem 0;
  padding: 2rem;
  min-height: 35rem;
  min-width: 40rem;
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
  border-radius:  1rem;
}
nav.box-background {
  border-radius: 0;
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

.header-logo p, .header-logo p span {
  font-size: 2rem;
  text-align: justify;
  text-justify: inter-word;
  letter-spacing: 2px;
  line-height: 150%;
  color: #2F566A;
  color: #3E738E;
  font-weight: 530;
}

.header-logo p span {
  color: #CC0000;
}


/*-------------------------------------------*\
  #IMAGES
\*-------------------------------------------*/


  .header-logo img {
    margin: 0 auto;
    height: auto;
    display: inline-block;
    max-height: 140px;
    max-width: 50%;
    min-width: 20rem;
    opacity: 0.6;
    float: right;
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
