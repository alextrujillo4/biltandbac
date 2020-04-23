<template>
  <v-container  >
    <v-layout row wrap align-center >
      <v-col
                  class="text-start mt-12 mb-12"
                  offset="12"
                  cols="12"
                  lg="6"
                  md="12"
                  sm="12"
                  xl="6"
          >
            <v-layout justify-center fill-height>
            <v-divider
                    class="mx-6 hidden-sm-and-down mt-n4"
                    vertical
                    style="border-width: 240px 3px 0 3px"/>
          <div >
            <h1 class="display-1 ml-8 mr-8 mb-4" color="#002554" >
              Sobre Nosotros
            </h1>

            <p class="body-1  ml-8 mr-8">
                Somos un grupo con más de 20 años de experiencia a (en) la asesoría en administración patrimonial y administración de riesgos.
            </p>
            <p class="body-1  ml-8 mr-8">
                Contamos con el convenio de aseguradoras y financiadoras reconocidas a nivelnacional , (nivel nacional,) para ofrecerte el mejor servicio.

            </p>
          </div>
            </v-layout>
          </v-col>
      <v-col
          cols="12"
          lg="6"
          md="12"
          sm="12"
          xl="6"
          offset="12"

      >
          <v-img
            aspect-ratio="2"
            contain
            src="../assets/bilt&bac-seguros.jpg"
          />
        </v-col>
    </v-layout>
  </v-container>
</template>

<style lang="scss">
    @import '../styles/variables.scss';
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Poppins:400,500,600,700&display=swap');
</style>
