<template>
  <div id="app">
    <topnav></topnav>
    <div class="main"> <router-view /></div>
    <bottom></bottom>
    <ball class="ball"></ball>
  </div>
</template>
<script>
import topnav from "./views/topnav";
import bottom from "./views/bottom";
import ball from "./views/ball";

export default {
  components: {
    topnav,
    bottom,
    ball
  }
};
</script>
<style>
.main{
  width: 90%;
  margin-left: 5%;
  background-color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(185, 183, 183);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.ball{
  position: fixed;
  right: 0;
  bottom: 200px;
  z-index: 999;
}

</style>
