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
          class="btn"
        >
          Inicio
        </v-btn>
        <v-btn
          text
          class="btn"
        >
          Seguros
        </v-btn>
        <v-btn
          text
          class="btn"
        >
          Beneficios
        </v-btn>
        <v-btn
          text
          class="btn"
        >
          Otros servicios
        </v-btn>
        <v-btn
          text
          class="btn"
        >
          Contacto
        </v-btn>
        <v-btn
          class="btn"
          depressed
          rounded
          color="accent"
        >
          Cotizar
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
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
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <Paralax />
      <Home />
      <Seguros />
      <Beneficios />
      <HelloWorld />
      <CotizarAhora/>
    </v-content>
  </v-app>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Poppins:400,500,600,700&display=swap');
  .btn {
    text-transform: capitalize;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  .display-1 {
    font-family: 'Montserrat', sans-serif;
  }

</style>

<script>
import HelloWorld from './components/Companies';
import Paralax from './components/Paralax';
import Home from './components/Nosotros';
import Seguros from './components/Seguros';
import Beneficios from './components/Beneficios';
import CotizarAhora from './components/CotizarAhora'

export default {
  name: 'App',

  components: {
    HelloWorld,
    Paralax,
    Home,
    Seguros,
    Beneficios,
    CotizarAhora
  },

  data: () => ({
    drawer: false,
  }),
};
</script>
