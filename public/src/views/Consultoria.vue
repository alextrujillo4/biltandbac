<template>
  <v-app>
    <v-app-bar
            app
            color="secondary">
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="drawer = !drawer" />
      </span>
      <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="@/assets/logo.svg"
              transition="scale-transition"
              width="160"
      />
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
                text
                class="btn" to="/" >Inicio</v-btn>
        <v-btn
                text
                class="btn" @click="$vuetify.goTo('#Footer')">Contacto</v-btn>
    <!--v-btn
                class="btn"
                depressed
                rounded
                color="accent">Cotizar Ahora</v-btn-->
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
            v-model="drawer"
            fixed
            temporary
    >
      <v-list
              nav
              dense
      >
        <v-list-item-group
                v-model="group"
                active-class="deep-purple--text text--accent-4"
        >
          <v-list-item class="pa-2" to="/">
            <v-list-item-title class="subtitle-2" >Inicio</v-list-item-title>
          </v-list-item>

          <v-list-item class="pa-2">
            <v-list-item-title class="subtitle-2" @click="drawer=false,$vuetify.goTo('#Footer')">Contacto</v-list-item-title>
          </v-list-item>
          <v-list-item class="pa-2" style="background: #0d47a1;"
          >
            <v-list-item-title class="white--text subtitle-2">Cotizar ahora</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-container fluid>
      <v-layout row wrap align-center>
        <Asociados/>
        <CotizarAhora/>
        <Footer id='Footer'/>
      </v-layout>
    </v-container>
    <v-btn class="float" target="_blank"
           color="green"
           fixed
           bottom
           right
           fab
           href="https://api.whatsapp.com/send?phone=528112904687&text=&source=&data="
    >
      <v-icon color="white">
        mdi-whatsapp
      </v-icon>
    </v-btn>
  </v-app>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Poppins:400,500,600,700&display=swap');
  .btn {
    text-transform: capitalize;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  .my-float{
    margin-top:16px;
  }
  .float{
    position:fixed;
    width:60px;
    height:60px;
    bottom:40px;
    right:40px;
    background-color:#25d366;
    color:#FFF;
    border-radius:50px;
    text-align:center;
    font-size:30px;
    box-shadow: 2px 2px 3px #999;
    z-index:100;
  }

</style>

<script>
  import Footer from '../components/Footer'
  import CotizarAhora from '../components/CotizarAhora'
  import Asociados from '../components/Asociados'

  export default {
    name: 'App',

    components: {
      Footer,
      CotizarAhora,
      Asociados
    },

    data: () => ({
      drawer: false,
    }),
  };
</script>
