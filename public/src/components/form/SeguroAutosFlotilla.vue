<template>
    <v-form @submit.prevent="submit" ref="form">
        <v-container fluid>
            <v-flex class="text-center">
                <!--Tipo de Datos-->
                <v-row align="center"
                       justify="center">
                    <!--=====================================-->
                    <!--======Datos personales=======-->
                    <!--=====================================-->
                    <v-col class="d-flex" cols="12">
                        <p>Datos personales</p>
                    </v-col>
                    <!--Nombre-->
                    <v-col class="d-flex"
                           cols="12"
                           xl="4"
                           lg="4"
                           md="4"
                           sm="12">
                        <v-text-field
                                :rules="rules.firstname"
                                filled
                                label="Nombre"
                                required
                                v-model="form.firstname">
                        </v-text-field>
                    </v-col>
                    <!--Apellido-->
                    <v-col class="d-flex"
                           cols="12"
                           xl="4"
                           lg="4"
                           md="4"
                           sm="12">
                        <v-text-field
                                :rules="rules.lastname"
                                filled
                                label="Apellido"
                                required
                                v-model="form.lastname">
                        </v-text-field>
                    </v-col>
                    <!--Fecha-->
                    <v-col class="d-flex"
                           cols="12"
                           lg="4"
                           md="4"
                           sm="12"
                           xl="4">
                        <v-text-field
                                append-icon="mdi-calendar"
                                filled
                                :rules="rules.birthdate"
                                label="Fecha de nacimiento(dia/mes/año)"
                                required
                                v-model="form.birthdate"/>
                    </v-col>
                    <!--Correo electrónico-->
                    <v-col class="d-flex"
                           cols="12"
                           xl="6"
                           lg="6"
                           md="6"
                           sm="12">
                        <v-text-field
                                :counter="30"
                                :rules="rules.email"
                                filled
                                label="Correo electrónico"
                                required
                                v-model="form.email"></v-text-field>
                    </v-col>
                    <!--Phone-->
                    <v-col class="d-flex"
                           cols="12"
                           xl="6"
                           lg="6"
                           md="6"
                           sm="12">
                        <v-text-field
                                :counter="10"
                                :rules="rules.phone"
                                filled
                                label="Número Celular (10 Dígitos)"
                                required
                                v-model="form.phone"></v-text-field>
                    </v-col>
                    <!--=====================================-->
                    <!--======Datos del Bien a Cotizar=======-->
                    <!--=====================================-->
                    <v-col class="d-flex" cols="12">
                        <p>Datos del Bien a Cotizar</p>
                    </v-col>
                    <!--Descripción-->
                    <v-col class="d-flex"
                           cols="12"
                           lg="12"
                           md="12"
                           sm="12"
                           xl="12">
                        <v-textarea
                                :counter="2000"
                                filled
                                label="Descripción de la flotilla"
                                v-model="form.description"></v-textarea>

                    </v-col>
                    <!--Términos y condiciones-->
                    <v-col class="d-flex"
                           cols="12"
                           lg="12"
                           md="12"
                           sm="12"
                           xl="12">
                        <v-checkbox
                                v-model="form.agreement"
                                required
                                :rules="[rules.agreement]"
                                color="deep-purple"
                        >
                            <template v-slot:label >
                                <p > Al seleccionar esta opción, estoy aceptando los &nbsp;
                                    <a href="#" @click.stop.prevent="dialog = true">Términos y condiciones</a>
                                    &nbsp; además &nbsp;
                                    <a href="#" @click.stop.prevent="dialog = true">la política de privacidad de la empresa.</a>*
                                </p>
                            </template>
                        </v-checkbox>
                    </v-col>
                    <v-col
                            cols="12"
                            lg="10"
                            md="10"
                            sm="10"
                            xl="10">

                        <v-btn
                                color="primary"
                                style="border-radius: 8px;"
                                tile
                                x-large
                                :disabled="!formIsValid"
                                type="submit"
                        >
                            Continuar
                        </v-btn>
                        <p class="mt-4 body-2">Paso 1 de 2</p>
                    </v-col>
                </v-row>
            </v-flex>
        </v-container>
    </v-form>
</template>
<style lang="scss">
    @import './src/styles/variables.scss';
</style>
<script>
    import dataf from "../../credentials/constants";

    export default {
        data () {
            const defaultForm = Object.freeze({
                firstname: '',
                lastname: '',
                brand: '',
                payment: "",
                phone:'',
                email:'',
                description:'',
                postalcode:'',
                coverage: '',
                birthdate:'',
                agreement: false,
            })
            return {
                form: Object.assign({}, defaultForm),
                rules: {
                    postalcode: [val => (val || '').length > 0 || 'Ingresa un Código Postal'],
                    firstname: [val => (val || '').length > 0 || 'Es requerido el Nombre'],
                    lastname: [val => (val || '').length > 0 || 'Es requerido el Apellido'],
                    brand: [val => (val || '').length > 0 || 'Ingresa la Marca del Autóvil'],
                    agreement: v => !!v || 'Esto es requerido',
                    payment: v => !!v || 'Selecciona una forma de pago',
                    phone: [v => (v || '').length == 10 || 'Por favor, ingresa un teléfono válido'],
                    coverage: v => !!v || 'Selecciona un Tipo de cobertura',
                    birthdate: v => !!v || 'Ingresa tu fecha de nacimiento d/mes/año',
                    email: [v => (v || '').length > 0 ||(v || '').match(/@/) || 'Por favor, ingresa un correo electrónico válido'],
                },
                defaultForm: Object.freeze({
                    firstname: '',
                    lastname: '',
                    brand: '',
                    payment: "",
                    phone:'',
                    email:'',
                    postalcode:'',
                    agreement: false,
                    coverage: '',
                    birthdate:'',
                    description: ''

                }),
                checkbox: false,
                payment_list: ["Anual", "Semestral", "Trimestral", "Mensual"],
                coverage_list: ["Cobertura Amplia", "Cobertura Limitada", "Cobertura Responsabilidad Civil"],

            }
        },
        computed: {
            formIsValid () {
                return (
                    this.form.firstname &&
                    this.form.lastname &&
                    this.form.email &&
                    this.form.birthdate &&
                    this.form.phone &&
                    this.form.agreement
                )
            }
        },
        methods: {
            setDeploy(){
                let data = JSON.stringify({
                    "name": [
                        { "variable": "Automatic"},
                        { "name": this.form.firstname + " " + this.form.lastname},
                        { "email": this.form.email},
                        { "phone": this.form.phone},
                        { "birthdate": this.form.birthdate},
                        { "seguro_info":{
                                "type": dataf.seguros.autosflotilla,
                                "description": this.form.description,
                            }
                        },
                    ]
                });
                this.axios.post('https://us-central1-bnbseguro.cloudfunctions.net/emailMessage/hello',
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
            resetForm () {
                this.form = Object.assign({}, this.defaultForm)
                this.$refs.form.reset()
            },
            submit () {
                this.setDeploy()
                this.$router.push(
                    "/cotizador" +
                    "?firstname="+this.form.firstname +
                    "&lastname="+this.form.lastname +
                    "&email="+this.form.email +
                    "&phone="+this.form.phone +
                    "&birthdate="+this.form.birthdate +
                    "&postalcode="+this.form.postalcode +
                    "&brand="+this.form.brand +
                    "&payment="+this.form.payment +
                    "&coverage="+this.form.coverage +
                    "&agreement="+this.form.agreement +
                    "&description="+this.form.description +
                    "&formType=" + dataf.seguros.autosflotilla
                );
                this.resetForm()
            },
        },
    }
</script>
cp
brand
birthdate
