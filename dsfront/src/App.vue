<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <router-view></router-view>
</template>

<script>

export default {
  
  // name: 'App',
  // components: {
  //   HelloWorld
  // }
  compatConfig: { MODE:3 },

  created: function() {
    console.log(`Started...`);
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #F5EFE6;
}
</style>
