<template>
  <component :is="component"></component>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Poppins:400,500,600,700&display=swap');
</style>



<script>

  import Home from './views/Home';
  import Consultoria from './views/Consultoria';

  export default {
    computed: {
      component() {
        if (this.$route.path === '/consultoria') {
          return 'Consultoria';
        }
        return 'Home'
      }
    },
    components: {
      Consultoria,
      Home
    }
  };
</script>
