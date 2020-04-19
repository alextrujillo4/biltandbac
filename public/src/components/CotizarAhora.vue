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
        <v-form   @submit.prevent="submit" ref="form" class="ma-6">
          <v-container>
            <v-row>
              <v-col
                      cols="12"
                      xl="12"
                      lg="12"
                      md="12"
                      sm="4">
                <v-text-field
                        v-model="form.name"
                        :rules="rules.name"
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
                        v-model="form.subject"
                        :rules="rules.subject"
                        label="Asunto"
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
                        v-model="form.body"
                        :rules="rules.body"
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
                        :href="`mailto:plara@bnbseguros.com?subject=${this.form.subject} | Mensaje desde Web&body=Hola mi numbre es: ${this.form.name}, ${this.form.body}`"
                        color="accent"
                        style="border-radius: 8px;"
                        tile
                        x-large
                        :disabled="!formIsValid"
                        type="submit"
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
<script>
  export default {
    data () {
      const defaultForm = Object.freeze({
        name: '',
        subject: '',
        body: '',
      })
      return {
        form: Object.assign({}, defaultForm),
        rules: {
          name: [val => (val || '').length > 0 || 'Es requerido tu Nombre'],
          subject: [val => (val || '').length > 0 || 'Es requerido un asunto'],
          body: [val => (val || '').length > 0 || 'Es requerido un texto de expecificación'],
        },
        name: "",
        subject: "",
        body: "",
        accessToken: "",
        defaultForm: Object.freeze({
          name: '',
          subject: '',
          body: '',
        })
      }

    },
    computed: {
      formIsValid () {
        return (
                this.form.name &&
                this.form.subject &&
                this.form.body

        )
      }
    },
  }

</script>
<style lang="scss">
  @import './src/styles/variables.scss';
</style>
