<template>
  <v-app>
      <v-app-bar
              app
              color="secondary">
        <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        </span>
        <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="@/assets/logo.svg"
                transition="scale-transition"
                width="160"
        />
        <v-spacer></v-spacer>
        <v-toolbar-items  class="hidden-sm-and-down">
          <v-btn text class="btn">Inicio</v-btn>
          <v-btn text class="btn">Seguros</v-btn>
          <v-btn text class="btn">Beneficios</v-btn>
          <v-btn text class="btn">Otros servicios</v-btn>
          <v-btn text class="btn">Contacto</v-btn>
          <v-btn  class="btn" depressed rounded color="accent">Cotizar</v-btn>

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
      <Home/>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<style >

  .btn {
    text-transform: capitalize;
  }

</style>

<script>
import HelloWorld from './components/HelloWorld';
import Paralax from './components/Paralax';
import Home from './components/Home';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Paralax,
    Home
  },

  data: () => ({
    drawer: false,
  }),
};
</script>
