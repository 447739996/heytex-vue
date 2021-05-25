<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <home></home> -->
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <topnav></topnav>

    <router-view />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
