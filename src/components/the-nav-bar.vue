<template>
  <header class="header" id="header">

    <router-link :to="{name: 'Home'}">
      Home
    </router-link>

    <router-link :to="{name: 'Tasks'}">
      Tasks
    </router-link>


  </header>
</template>

<script>
export default {
    data () {
        return {

        }
     },
    computed: {

    },
    created () {

    }
}
</script>

<style scoped>

</style>
