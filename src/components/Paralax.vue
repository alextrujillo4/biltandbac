<template>
  <v-img
    src="../assets/viaje-seguro-bilt&bac.jpg"
    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    height="90vh">
    <v-container fill-height>
      <v-layout row wrap align-center>
        <v-flex class="text-center">
          <v-row
            align="center"
            justify="center"
          >
            <h1 class="display-1 white--text pa-8 hidden-md-and-up ">
              Te ayudamos a construir tu futuro y cuidamos de ti en el trayecto.
            </h1>

            <h1 class="display-2 white--text pa-8 hidden-sm-and-down">
              Te ayudamos a construir tu futuro y cuidamos de ti en el trayecto
            </h1>

            <v-btn
              class="ma-6 hidden-sm-and-down"
              tile
              large
              color="accent"
              style="border-radius: 8px;"
              @click="$vuetify.goTo('#Footer')"
            >
              Contacto
            </v-btn>
            <v-btn class="ma-6 hidden-sm-and-down"
                   tile
                   large
                   to="/consultoria"
                   color="#ffffff"
                   style="border-radius: 8px;">
              <v-icon left>
                mdi-domain
              </v-icon>
              Consultoría
            </v-btn>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</template>

<style lang="scss">
  @import './src/styles/variables.scss';
</style>
