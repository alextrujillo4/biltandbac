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
                    <!--======Datos del Persona a Cotizar=======-->
                    <!--=====================================-->
                    <v-col class="d-flex" cols="12">
                        <p>Más información</p>
                    </v-col>
                    <!--Capacidad de pago anual-->
                    <v-col class="d-flex"
                           cols="12"
                           lg="3"
                           md="3"
                           sm="12"
                           xl="3">
                        <v-text-field
                                :rules="rules.paymentcapacity"
                                filled
                                label="Capacidad de pago anual"
                                required
                                v-model="form.paymentcapacity"></v-text-field>
                    </v-col>

                    <!--Duracion del seguro [timelapse]-->
                    <v-col class="d-flex"
                           cols="12"
                           lg="3"
                           md="3"
                           sm="12"
                           xl="3">
                        <v-select
                                :items="timelapse_list"
                                filled
                                :rules="rules.timelapse"
                                required
                                label="Duración del seguro"
                                single-line
                                v-model="form.timelapse"></v-select>
                    </v-col>




                    <!--Peso (weight)-->
                    <v-col class="d-flex"
                           cols="12"
                           lg="3"
                           md="3"
                           sm="12"
                           xl="3">
                        <v-text-field
                                :counter="40"
                                :rules="rules.weight"
                                filled
                                label="Peso(Kg)"
                                required
                                v-model="form.weight"></v-text-field>
                    </v-col>
                    <!--Estatura (height)-->
                    <v-col class="d-flex"
                           cols="12"
                           lg="3"
                           md="3"
                           sm="12"
                           xl="3">
                        <v-text-field
                                :counter="40"
                                :rules="rules.height"
                                filled
                                label="Estatura (mts)"
                                required
                                v-model="form.height"></v-text-field>
                    </v-col>

                    <!--Género-->
                    <v-col class="d-flex"
                           cols="12"
                           xl="4"
                           lg="4"
                           md="4"
                           sm="12">
                        <v-select
                                :items="gender_list"
                                filled
                                :rules="rules.gender"
                                required
                                label="Género"
                                single-line
                                v-model="form.gender"></v-select>
                    </v-col>

                    <!--Tipo seguro de vida (coverage)-->
                    <v-col class="d-flex"
                           cols="12"
                           xl="4"
                           lg="4"
                           md="4"
                           sm="12">
                        <v-select
                                :items="coverage_list"
                                filled
                                :rules="rules.coverage"
                                required
                                label="Selecciona un tipo de seguro de vida"
                                single-line
                                v-model="form.coverage"></v-select>
                    </v-col>

                    <!--Forma de pago-->
                    <v-col class="d-flex"
                           cols="12"
                           xl="4"
                           lg="4"
                           md="4"
                           sm="12">
                        <v-select
                                :items="payment_list"
                                filled
                                :rules="rules.payment"
                                required
                                label="Selecciona una forma de pago"
                                single-line
                                v-model="form.payment"></v-select>
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
                                label="Describe tus prácticas de deporte y actividad física, si es que las practicas."
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
                            <template v-slot:label>
                                <p> Al seleccionar esta opción, estoy aceptando los &nbsp;
                                <a href="#" @click.stop.prevent="dialog = true">Términos y condiciones</a>
                                &nbsp; además &nbsp;
                                <a href="#" @click.stop.prevent="dialog = true">la política de privacidad de la empresa.</a>*
                                </p>
                            </template>
                        </v-checkbox>
                    </v-col>
                    <!--Botón-->
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
                coverage: '',
                description:'',
                postalcode:'',
                agreement: false,
                birthdate:'',
                gender:'',
                timelapse:'',
                weight:'',
                height:'',
                paymentcapacity:''
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
                    coverage: v => !!v || 'Selecciona un filtro',
                    phone: [v => (v || '').length == 10 || 'Por favor, ingresa un teléfono válido'],
                    email: [v => (v || '').length > 0 ||(v || '').match(/@/) || 'Por favor, ingresa un correo electrónico válido'],
                    birthdate: v => !!v || 'Ingresa tu fecha de nacimiento d/mes/año',
                    gender: v => !!v || 'Esto es requerido',
                    weight: v => !!v || 'Esto es requerido',
                    height: v => !!v || 'Esto es requerido',
                    paymentcapacity: v => !!v || 'Esto es requerido',
                    timelapse: v => !!v || 'Ingresa un tiempo de duración aproximado',
                },
                defaultForm: Object.freeze({
                    firstname: '',
                    lastname: '',
                    phone:'',
                    email:'',
                    birthdate:'',
                    coverage: "",
                    payment: "",
                    brand: '',
                    postalcode:'',
                    agreement: false,
                    description: '',
                    gender:'',
                    timelapse: '',
                    weight:'',
                    height:'',
                    paymentcapacity:''

                }),
                checkbox: false,
                coverage_list:["Seguro de Ahorro e Inversión","Seguro para la Educación Profesional de los Hijos","Seguro de Socios y Hombre Clave"],
                payment_list: ["Anual", "Semestral", "Trimestral", "Mensual"],
                gender_list: ["Mujer", "Hombre", "Otro"],
                timelapse_list: ["10 Años", "20 Años", "Vitalicio"],

            }
        },
        computed: {
            formIsValid () {
                return (
                    this.form.firstname &&
                    this.form.lastname &&
                    this.form.email &&
                    this.form.phone &&
                    this.form.birthdate &&
                    this.form.gender &&
                    this.form.weight &&
                    this.form.timelapse &&
                    this.form.height &&
                    this.form.payment &&
                    this.form.coverage &&
                    this.form.agreement &&
                    this.form.paymentcapacity
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
                                "type": dataf.seguros.vida,
                                "coverage":  this.form.coverage,
                                "timelapse": this.form.timelapse,
                                "payment": this.form.payment,
                                "paymentcapacity": this.form.paymentcapacity,
                                "gender": this.form.gender,
                                "weight": this.form.weight,
                                "height": this.form.height,
                                "description": this.form.description
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
                        console.log(response)
                    })
                    .catch( err => {
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
                    "&agreement="+this.form.agreement +
                    "&description="+this.form.description +
                    "&gender="+this.form.gender +
                    "&weight="+this.form.weight +
                    "&timelapse="+this.form.timelapse +
                    "&coverage="+this.form.coverage +
                    "&height="+this.form.height +
                    "&paymentcapacity="+this.form.paymentcapacity +
                    "&formType=" + dataf.seguros.vida
                );
                this.resetForm()
            },
        },
    }
</script>
