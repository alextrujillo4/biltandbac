<template>
  <v-img
    src="../assets/viaje-seguro-bilt&bac.jpg"
    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    height="75vh"
  >
    <v-parallax>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1 class="display-style">
            Te ayudamos a construir tu futuro y cuidamos de ti en tu trayecto
          </h1>
          <v-row
            align="center"
            justify="center"
          >
            <v-btn
              class="ma-8 btn "
              tile
              large
              color="accent"
            >
              Cotizar
            </v-btn>
            <v-btn
              class="ma-8 btn"
              tile
              large
              color="#ffffff"
            >
              <v-icon left>
                mdi-play-circle
              </v-icon>
              Ver Video
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-parallax>
  </v-img>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Poppins:400,500,600,700&display=swap');
    .btn {
        text-transform: capitalize;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        border-radius: 8px

    }
    .display-style {
        font-family: 'Montserrat', sans-serif;
        font-size: 52px;
        font-weight: 600;
        margin-left: 40px;
        margin-right: 40px;
        line-height: 58px;
    }
</style>
