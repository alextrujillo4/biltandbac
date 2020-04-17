<template>
  <component :is="component"></component>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Poppins:400,500,600,700&display=swap');
</style>



<script>

  import Home from './views/Home';
  import Consultoria from './views/Consultoria';
  import Cotizador from './views/Cotizador';

  export default {
    computed: {
      component() {
        if (this.$route.path === '/consultoria') {
          return 'Consultoria';
        }else if (this.$route.path === '/cotizador') {
          return 'Cotizador';
        }else{
          return 'Home'
        }
      }
    },
    components: {
      Consultoria,
      Cotizador,
      Home
    }
  };
</script>
