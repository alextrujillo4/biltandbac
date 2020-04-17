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
                        @click="setDeploy(),mailer=true"
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
      <v-dialog
              v-model="mailer"
              width="500"
      >

        <v-card>
          <v-card-title
                  class="headline grey lighten-2"
                  primary-title>
            Mensaje enviado
          </v-card-title>

          <v-card-text class="mt-6">
            Hemos enviado tu mensaje. Un representante se contactará pronto contigo.
            para más dudas puedes escribirnos por whatsapp
            <a target="_blank" href="https://api.whatsapp.com/send?phone=528112904687&text=&source=&data="
            >haciendo click aquí.</a>
          </v-card-text>


          <v-card-actions>
            <v-btn
                    color="primary"
                    text
                    @click="mailer = false"
            >
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-img>
</template>
<script>
  import sendMail from "../credentials/mailse";
  export default {
    data: () => ({
      mailer: false,
    }),
    methods:{
      setDeploy(){
        console.log("sending mail...")
        sendMail()
      }
    }
  }

</script>
<style lang="scss">
  @import './src/styles/variables.scss';
</style>
