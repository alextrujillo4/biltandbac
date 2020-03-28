<template>
  <v-img
          src="../assets/bnbseguros-contacto.jpg"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          height="80vh">
    <v-container fill-height>
      <v-layout row wrap align-center>
    <v-row
      align="center"
      justify="center">
      <v-col
        class="text-center"
        cols="8">
        <h1 class="display-1 white--text" style="margin-bottom: 40px">
          Ponte en contacto con nosotros
        </h1>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col
                      cols="12"
                      md="4"
              >
                <v-text-field
                        v-model="firstname"
                        :rules="nameRules"
                        :counter="30"
                        filled
                        dark
                        label="Nombre"
                        required
                ></v-text-field>
              </v-col>

              <v-col
                      cols="12"
                      md="4"
              >
                <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Correo"
                        :counter="40"
                        filled
                        dark
                        required
                ></v-text-field>
              </v-col>

              <v-col
                      cols="12"
                      md="4">
                <v-btn
                        tile
                        x-large
                        color="accent"
                        style="border-radius: 8px;"
                >
                  Enviar
                </v-btn>

              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
      </v-layout>
  </v-container>
  </v-img>
</template>
<style lang="scss">
  @import './src/styles/variables.scss';
</style>
