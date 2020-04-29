<template>
    <v-form @submit.prevent="submit" ref="form">
        <v-container fluid>
            <v-flex class="text-center">

                <v-row align="center" justify="center">
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
                        <p>Datos del Bien a Cotizar</p>
                    </v-col>
                    <!--Tipo de Cobertura-->
                        <v-col class="d-flex"
                               cols="12"
                               xl="4"
                               lg="4"
                               md="4"
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

                    <!--Giro de empresa-->
                    <v-col v-if="form.coverage === 'Seguro PYME'"
                            class="d-flex"
                           cols="12"
                           xl="2"
                           lg="2"
                           md="2"
                           sm="12">
                        <v-text-field
                                :rules="rules.giro"
                                filled
                                label="Giro de la empresa"
                                required
                                v-model="form.giro"></v-text-field>
                    </v-col>

                    <!--Dirección-->
                    <v-col class="d-flex"
                           cols="12"
                           xl="4"
                           lg="4"
                           md="4"
                           sm="12">
                        <v-text-field
                                append-icon="mdi-map"
                                :rules="rules.location"
                                filled
                                label="Dirección del Bien a Asegurar"
                                required
                                v-model="form.location"></v-text-field>
                    </v-col>

                    <!--Código postal CP-->
                    <v-col class="d-flex"
                           cols="12"
                           xl="2"
                           lg="2"
                           md="2"
                           sm="12">
                        <v-text-field
                                :counter="5"
                                :rules="rules.postalcode"
                                filled
                                label="Código postal donde circula el bien"
                                required
                                v-model="form.postalcode"></v-text-field>
                    </v-col>
                    <!--Tipo Muro-->
                    <v-col class="d-flex"
                           cols="12"
                           xl="3"
                           lg="3"
                           md="3"
                           sm="12">
                        <v-text-field
                                :rules="rules.muro"
                                filled
                                label="Tipo de Muro"
                                required
                                v-model="form.muro"></v-text-field>
                    </v-col>
                    <!--Tipo Techo-->
                    <v-col class="d-flex"
                           cols="12"
                           xl="3"
                           lg="3"
                           md="3"
                           sm="12">
                        <v-text-field
                                :rules="rules.techo"
                                filled
                                label="Tipo de Techo"
                                required
                                v-model="form.techo"></v-text-field>
                    </v-col>
                    <!--Numero de pisos-->
                    <v-col class="d-flex"
                           cols="12"
                           xl="3"
                           lg="3"
                           md="3"
                           sm="12">
                        <v-text-field
                                :rules="rules.pisos"
                                filled
                                label="Número de pisos"
                                required
                                v-model="form.pisos"></v-text-field>
                    </v-col>
                    <!--Suma a a segurar-->
                    <v-col class="d-flex"
                           cols="12"
                           xl="3"
                           lg="3"
                           md="3"
                           sm="12">
                        <v-text-field
                                :rules="rules.suma"
                                filled
                                label="Suma asegurada"
                                required
                                v-model="form.suma"></v-text-field>
                    </v-col>

                    <!--Formadepago-->
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
                    <!--Checkbox-->
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
                giro: '',
                agreement: false,
                birthdate:'',
                location:'',
                muro: '',
                techo: '',
                pisos: '',
                suma: '',
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
                    coverage: v => !!v || 'Selecciona un Tipo de coverage',
                    giro: v => !!v || 'Ingresa el giro de tu empresa',
                    email: [v => (v || '').length > 0 ||(v || '').match(/@/) || 'Por favor, ingresa un correo electrónico válido'],
                    birthdate: v => !!v || 'Ingresa tu fecha de nacimiento d/mes/año',
                    location: v => !!v || 'Este campo es requerido',
                    muro: v => !!v || 'Este campo es requerido',
                    techo: v => !!v || 'Este campo es requerido',
                    pisos: v => !!v || 'Este campo es requerido',
                    suma: v => !!v || 'Este campo es requerido',

                },
                defaultForm: Object.freeze({
                    firstname: '',
                    lastname: '',
                    brand: '',
                    payment: "",
                    phone:'',
                    email:'',
                    birthdate:'',
                    description:'',
                    postalcode:'',
                    coverage: '',
                    agreement: false,
                    location:'',
                    muro: '',
                    techo: '',
                    pisos: '',
                    suma: '',

                }),
                checkbox: false,
                payment_list: ["Anual", "Semestral", "Trimestral", "Mensual"],
                coverage_list: ["Seguro Casa + Plus", "Seguro PYME"],

            }
        },
        computed: {
            formIsValid () {
                return (
                    this.form.firstname &&
                    this.form.lastname &&
                    this.form.email &&
                    this.form.phone &&
                    this.form.payment &&
                    this.form.coverage&&
                    this.form.birthdate &&
                    this.form.postalcode &&
                    this.form.location&&
                    this.form.muro&&
                    this.form.techo&&
                    this.form.pisos&&
                    this.form.suma&&
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
                                "type": dataf.seguros.danios,
                                "coverage": this.form.coverage,
                                "postalcode": this.form.postalcode,
                                "location": this.form.location,
                                "muro": this.form.muro,
                                "techo": this.form.techo,
                                "pisos": this.form.pisos,
                                "giro": this.form.giro || "No Aplica",
                                "suma": this.form.suma,
                                "payment": this.form.payment
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
                    "&birthdate="+this.form.birthdate +
                    "&postalcode="+this.form.postalcode +
                    "&brand="+this.form.brand +
                    "&payment="+this.form.payment +
                    "&coverage="+this.form.coverage +
                    "&giro="+this.form.giro +
                    "&agreement="+this.form.agreement +
                    "&description="+this.form.description +
                    "&location="+this.form.location +
                    "&muro="+this.form.muro +
                    "&techo="+this.form.techo +
                    "&pisos="+this.form.pisos +
                    "&suma="+this.form.suma +
                    "&formType=" + dataf.seguros.danios
                );
                this.resetForm()
            },
        },
    }
</script>
