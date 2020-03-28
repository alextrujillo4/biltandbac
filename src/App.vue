<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
    >
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="drawer = true" />
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
          class="btn" @click="$vuetify.goTo('#Inicio')">Inicio</v-btn>
        <v-btn
          text
          class="btn" @click="$vuetify.goTo('#Seguros')">Seguros</v-btn>
        <v-btn
          text
          class="btn" @click="$vuetify.goTo('#Beneficios')">Beneficios</v-btn>
        <v-btn
          text
          class="btn">Otros servicios</v-btn>
        <v-btn
          text
          class="btn" @click="$vuetify.goTo('#Footer')">Contacto</v-btn>
        <v-btn
          class="btn"
          depressed
          rounded
          color="accent">Cotizar Ahora</v-btn>
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
          <v-list-item class="pa-2">
            <v-list-item-title class="subtitle-2" @click="drawer=false,$vuetify.goTo('#Inicio')">Inicio</v-list-item-title>
          </v-list-item>

          <v-list-item class="pa-2">
            <v-list-item-title class="subtitle-2" @click="drawer=false,$vuetify.goTo('#Seguros')">Seguros</v-list-item-title>
          </v-list-item>

          <v-list-item class="pa-2">
            <v-list-item-title class="subtitle-2" @click="drawer=false,$vuetify.goTo('#Beneficios')">Beneficios</v-list-item-title>
          </v-list-item>

          <v-list-item class="pa-2">
            <v-list-item-title class="subtitle-2">Otros servicios</v-list-item-title>
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
      <Paralax  id='Inicio'/>
      <Home />
      <Seguros id='Seguros'/>
      <Beneficios id='Beneficios'/>
      <Empresas />
      <CotizarAhora/>
      <Footer id='Footer'/>
      </v-layout>
    </v-container>
  </v-app>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Poppins:400,500,600,700&display=swap');
  .btn {
    text-transform: capitalize;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }


</style>

<script>
import Paralax from './components/Paralax';
import Home from './components/Nosotros';
import Seguros from './components/Seguros';
import Beneficios from './components/Beneficios';
import Empresas from './components/Companies';
import CotizarAhora from './components/CotizarAhora'
import Footer from './components/Footer'


export default {
  name: 'App',

  components: {
    Paralax,
    Home,
    Seguros,
    Beneficios,
    Empresas,
    CotizarAhora,
    Footer
  },

  data: () => ({
    drawer: false,
  }),
};
</script>
