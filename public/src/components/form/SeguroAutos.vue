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
                    <!--======Datos del Bien a Cotizar=======-->
                    <!--=====================================-->
                    <v-col class="d-flex" cols="12">
                        <p>Datos del Automóvil</p>
                    </v-col>
                    <!--Tipo de Cobertura-->
                    <v-col class="d-flex"
                           cols="12"
                           xl="3"
                           lg="3"
                           md="3"
                           sm="12">
                        <v-radio-group
                                :rules="rules.coverage"
                                filled
                                required
                                v-model="form.coverage">
                            <template v-slot:label >
                                <div>Selecciona el tipo de <strong>cobertura</strong> que buscas.</div>
                            </template>
                            <template v-for="item in coverage_list" >
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
                           xl="3"
                           lg="3"
                           md="3"
                           sm="12">
                        <v-text-field
                                :counter="5"
                                :rules="rules.postalcode"
                                filled
                                label="Código postal de la ubicación del bien"
                                required
                                v-model="form.postalcode"></v-text-field>
                    </v-col>
                    <!--brand-->
                    <v-col class="d-flex"
                           cols="12"
                           xl="3"
                           lg="3"
                           md="3"
                           sm="12">
                        <v-text-field
                                :counter="40"
                                :rules="rules.brand"
                                filled
                                label="Marca del Automóvil"
                                required
                                v-model="form.brand"></v-text-field>
                    </v-col>
                    <v-col class="d-flex"
                           cols="12"
                           xl="3"
                           lg="3"
                           md="3"
                           sm="12">
                        <v-text-field
                                :rules="rules.modelyear"
                                filled
                                label="Modelo del Auto (Año)"
                                required
                                v-model="form.modelyear"></v-text-field>
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
                                label="Descripción"
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
    import dataf from "../../credentials/constants.js";
    export default {
        data () {
            const defaultForm = Object.freeze({
                firstname: '',
                lastname: '',
                brand: '',
                payment: "",
                phone:'',
                email:'',
                modelyear:'',
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
                    modelyear: [val => (val || '').length > 0 || 'Es requerido el Año del modelo'],
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
                    modelyear:'',
                    postalcode:'',
                    agreement: false,
                    coverage: '',
                    description: '',
                    birthdate:''

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
                    this.form.phone &&
                    this.form.postalcode &&
                    this.form.birthdate &&
                    this.form.brand &&
                    this.form.payment &&
                    this.form.coverage &&
                    this.form.modelyear &&
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
                                "type": dataf.seguros.autos,
                                "coverage": this.form.coverage,
                                "postalcode": this.form.postalcode,
                                "brand": this.form.brand,
                                "modelyear": this.form.modelyear,
                                "description": this.form.description,
                                "payment": this.form.payment,
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
                    "&modelyear=" + this.form.modelyear +
                    "&formType=" + dataf.seguros.autos
                );
                this.resetForm()
            },
        },
    }
</script>
