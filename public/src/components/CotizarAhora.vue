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
                <v-text-field
                        v-model="form.email"
                        :rules="rules.email"
                        label="Correo electronico"
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
                        color="accent"
                        style="border-radius: 8px;"
                        tile
                        x-large
                        :disabled="!formIsValid"
                        type="submit"
                        @click="submit"
                >
                  Enviar
                </v-btn>

              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
        <v-dialog
                v-model="dialog"
                width="500"
        >
          <v-card>
            <v-card-title
                    class="headline grey lighten-2"
                    primary-title
            >
              Mensaje enviado
            </v-card-title>

            <v-card-text>
              Hemos enviado tu mensaje. Un representante se contactará pronto contigo.
              para más dudas puedes escribirnos
              <a target="_blank" href="https://api.whatsapp.com/send?phone=528112904687&text=&source=&data="
              >por whatsapp aquí</a>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                      color="primary"
                      text
                      @click="dialog = false"
              >
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
        email:''
      })
      return {
        form: Object.assign({}, defaultForm),
        rules: {
          name: [val => (val || '').length > 0 || 'Es requerido tu Nombre'],
          subject: [val => (val || '').length > 0 || 'Es requerido un asunto'],
          email: [val => (val || '').length > 0 || 'Es requerido tu correo electrónico'],
          body: [val => (val || '').length > 0 || 'Es requerido un texto de expecificación'],
        },
        dialog: false,
        name: "",
        subject: "",
        body: "",
        email:"",
        accessToken: "",
        defaultForm: Object.freeze({
          name: '',
          subject: '',
          email:'',
          body: '',
        })
      }

    },
    methods:{
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit(){
        let data = JSON.stringify({
          "name": [
            { "variable": "Home"},
            { "name": this.form.name},
            { "email": this.form.email},
            { "phone": "No Registrado"},
            { "birthdate": "No Registrado"},
            { "seguro_info":{
                "body": this.form.body,
                "subject": this.form.subject
              }
            },
          ]
        });
        this.dialog = true
        this.resetForm()
        this.axios.post('https://us-central1-biltandbac.cloudfunctions.net/emailMessage/hello',
                data,{
                  headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*'
                  }})
                .then(response => {
                  console.log("Message Sent.")
                  console.log(response)
                })
                .catch( err => {
                  console.log("Ups.. Error D':")
                  console.log(err)
                })

      },
    },
    computed: {
      formIsValid () {
        return (
                this.form.name &&
                this.form.subject &&
                this.form.email &&
                this.form.body

        )
      }
    },
  }

</script>
<style lang="scss">
  @import './src/styles/variables.scss';
</style>
