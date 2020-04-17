<template>
  <v-img
          src="../assets/bnbseguros-contacto.jpg"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)">
    <v-container fill-height>
      <v-layout row  align-center>
        <v-row align="center"
               justify="center">
          <v-col class="text-center mt-12"
                 cols="12">
        <h1 class="display-1 white--text ">
          Ponte en contacto con nosotros
        </h1>
        <v-form v-model="valid" class="ma-6">
          <v-container>
            <v-row>
              <v-col
                      cols="12"
                      xl="12"
                      lg="12"
                      md="12"
                      sm="4">
                <v-text-field
                        v-model="firstname"
                        :rules="nameRules"
                        :counter="30"
                        filled
                        dark
                        label="Nombre"
                        required></v-text-field>
              </v-col>
              <v-col
                      cols="12"
                      xl="12"
                      lg="12"
                      md="12"
                      sm="4">
                <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Correo"
                        :counter="40"
                        filled
                        dark
                        required></v-text-field>
              </v-col>

              <v-col
                      cols="12"
                      xl="12"
                      lg="12"
                      md="12"
                      sm="4">
                <v-textarea
                        v-model="subject"
                        :counter="200"
                        filled
                        dark
                >
                  <template v-slot:label>
                    <div>
                      Asunto <small>(opcional)</small>
                    </div>
                  </template>
                </v-textarea>
              </v-col>
              <v-col
                      cols="12"
                      xl="12"
                      lg="12"
                      md="12"
                      sm="4">
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
