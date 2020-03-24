<template>
  <v-img
    src="../assets/viaje-seguro-bilt&bac.jpg"
    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    height="100vh">
    <v-container fill-height>
      <v-layout row wrap align-center>
        <v-flex class="text-center">
          <h1 class="display-2 white--text">
            Te ayudamos a construir tu futuro y cuidamos de ti en tu trayecto
          </h1>
          <v-row
            align="center"
            justify="center"
          >
            <v-btn
              class="ma-6"
              tile
              large
              color="accent"
              style="border-radius: 8px;"
            >
              Cotizar
            </v-btn>
            <v-btn class="ma-6 "
              tile
              large
              color="#ffffff"
                   style="border-radius: 8px;"

            >
              <v-icon left>
                mdi-play-circle
              </v-icon>
              Ver Video
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
