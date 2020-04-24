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
                        <v-menu
                                :close-on-content-click="false"
                                :return-value.sync="date"
                                min-width="290px"
                                offset-y
                                ref="menu"
                                transition="scale-transition"
                                v-model="form.birthdate"
                        >
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                        append-icon="mdi-calendar"
                                        filled
                                        label="Fecha de nacimiento"
                                        readonly
                                        v-model="form.birthdate"
                                        v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker no-title scrollable v-model="birthdate">
                                <v-spacer></v-spacer>
                                <v-btn @click="menu = false" color="primary" text>Cancel</v-btn>
                                <v-btn @click="$refs.menu.save(birthdate)" color="primary" text>OK</v-btn>
                            </v-date-picker>
                        </v-menu>
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
                    <!--Tipo de Covertura-->
                    <v-col class="d-flex"
                           cols="12"
                           xl="4"
                           lg="4"
                           md="4"
                           sm="12">
                        <v-radio-group
                                :rules="rules.cobertura"
                                filled
                                required
                                v-model="form.cobertura">
                            <template v-slot:label >
                                <div>Selecciona el tipo de <strong>Cobertura</strong> que buscas.</div>
                            </template>
                            <template v-for="item in cobertura_list" >
                                <v-radio :value="item" :key="item">
                                    <template v-slot:label>
                                        <div>{{item}}</div>
                                    </template>
                                </v-radio>
                            </template>
                        </v-radio-group>
                    </v-col>
                    <!--Código postal-->
                    <v-col class="d-flex"
                           cols="12"
                           lg="3"
                           md="3"
                           sm="12"
                           xl="3">
                        <v-text-field
                                :counter="5"
                                :rules="rules.postalcode"
                                filled
                                label="Código postal donde circula la unidad"
                                required
                                v-model="form.postalcode"></v-text-field>
                    </v-col>
                    <!--brand-->
                    <v-col class="d-flex"
                           cols="12"
                           lg="3"
                           md="3"
                           sm="12"
                           xl="3">
                        <v-text-field
                                :counter="40"
                                :rules="rules.brand"
                                filled
                                label="Marca del Automóvil"
                                required
                                v-model="form.brand"></v-text-field>
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
                                label="Descripción de la unidad"
                                v-model="form.description"></v-textarea>

                    </v-col>
                    <v-col class="d-flex"
                           cols="12"
                           lg="12"
                           md="12"
                           sm="12"
                           xl="12">
                        <v-select
                                :items="payment_list"
                                filled
                                :rules="rules.payment"
                                required
                                label="Selecciona una forma de pago"
                                single-line
                                v-model="form.payment"></v-select>
                    </v-col>
                    <!--Terminos y condiciones-->
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
                            <template v-slot:label>
                                <p> Al seleccionar esta opción, estoy aceptando los &nbsp;
                                <a href="#" @click.stop.prevent="dialog = true">Terminos y condiciones</a>
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
    import data from "../../credentials/constants.js";
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
                cobertura: '',
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
                    cobertura: v => !!v || 'Selecciona un Tipo de Cobertura',

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
                    cobertura: '',
                    description: ''

                }),
                birthdate: new Date().toISOString().substr(0, 10),
                checkbox: false,
                payment_list: ["Anual", "Semestral", "Trimestral", "Mensual"],
                cobertura_list: ["Cobertura Amplia", "Cobertura Limitada", "Cobertura Responsabilidad Civil"],

            }
        },
        computed: {
            formIsValid () {
                return (
                    this.form.firstname &&
                    this.form.lastname &&
                    this.form.email &&
                    this.form.phone &&
                    this.form.postalcode &&
                    this.form.brand &&
                    this.form.payment &&
                    this.form.cobertura&&
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
                        { "birthdate": this.birthdate},
                        { "seguro_info":{
                                        "type": data.seguros.autos,
                                        "coverage": this.form.cobertura
                                        }
                        },
                    ]
                });
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
                    "&birthdate="+this.birthdate +
                    "&postalcode="+this.form.postalcode +
                    "&brand="+this.form.brand +
                    "&payment="+this.form.payment +
                    "&cobertura="+this.form.cobertura +
                    "&agreement="+this.form.agreement +
                    "&description="+this.form.description +
                    "&formType=" + data.seguros.autos
                );
                this.resetForm()
            },
        },
    }
</script>
