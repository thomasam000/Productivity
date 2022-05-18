<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <the-nav-bar></the-nav-bar>
    <router-view :key="`${$route.path}${JSON.stringify($route.query)}`"/>

  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import theNavBar from './components/the-nav-bar.vue'

export default {
  name: 'App',
  components: {
    'the-nav-bar': theNavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
