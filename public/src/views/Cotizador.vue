<template>
    <v-app>
        <v-app-bar
                app
                color="secondary"

                elevate-on-scroll>
            <v-img
                    alt="Vuetify Logo"
                    class="shrink ma-4"
                    contain
                    src="@/assets/logo.svg"
                    transition="scale-transition"
                    width="160"
            />
            <v-spacer/>
            <v-toolbar-items>
                <v-btn @click="$vuetify.goTo('#Footer')"
                       class="btn" color="#002554" text>Contacto
                </v-btn>
                <v-btn
                        class="btn"
                        color="primary"
                        depressed
                        rounded to="/">Inicio
                </v-btn>

            </v-toolbar-items>
        </v-app-bar>
      <v-container grid-list-md>
        <v-layout class="justify-center mt-12" >
          <v-flex sm12 md6 lg6 xl6>
            <v-card outlined >
                <v-layout class="ml-6 mr-6">
                    <!--title-->
                    <v-flex sm12 md12 lg12 xl12 flexbox >
                      <!--desktop-->
                      <h1 class="display-2 mt-6 hidden-sm-and-down">
                        ¡Hola {{this.name}}!
                      </h1>
                      <!--mobile-->
                      <h1 class="display-1 mt-6  hidden-md-and-up ">
                        ¡Hola {{this.name}}!
                      </h1>
                      <p class="subtitle-2 ">Estos son los seguros que tenemos para tí.</p>
                      <p class="body-2  ">¿Tienes alguna duda?. Envianos un Whatsapp!</p>
                        <!--Chips-->
                        <v-card-text class="mt-n8 ml-n4 mr-n4">
                          <v-chip class="mr-2 mt-2" v-if="formType">
                            <v-icon left>mdi-tag</v-icon>
                            {{formType}}
                          </v-chip>
                          <v-chip class="mr-2 mt-2" v-if="cobertura">
                            <v-icon left>mdi-shield-account</v-icon>
                            {{cobertura}}
                          </v-chip>
                          <v-chip class="mr-2 mt-2" v-if="payment">
                            <v-icon left>mdi-currency-usd</v-icon>
                            Pago {{payment}}
                          </v-chip>
                          <v-chip class="mr-2 mt-2" v-if="brand">
                            <v-icon left>mdi-file-document-box-search</v-icon>
                            {{brand}}
                          </v-chip>
                        </v-card-text>
                    </v-flex>
                </v-layout>
                  <!--Error-->
                <v-layout v-if="!products_data || products_data.length === 0" >
                    <v-flex sm12 md12 lg12 xl12  class="justify-center align-center text-center ma-12" >
                    <v-progress-circular
                            :size="50"
                            color="primary"
                            indeterminate/>
                    <p class="body-1 ma-12">
                      ¿Tienes problemas?
                      <u><a onclick="window.location.reload(true);">Inténtalo de nuevo</a></u>
                    </p>
                    </v-flex>
                  </v-layout>
                  <!--Product Card-->
                  <Card class="ml-6 mr-6" v-else v-for="(item, i) in products_data" :key="item.id" v-bind:data="{product: item, index: i, user:user }"/>
            </v-card>
          </v-flex>
        </v-layout>
        </v-container>
      <Footer id='Footer'/>
        <v-btn bottom class="float"
               color="green"
               fab
               fixed
               href="https://api.whatsapp.com/send?phone=528112904687&text=&source=&data="
               right
               target="_blank"
        >
            <v-icon color="white">
                mdi-whatsapp
            </v-icon>
        </v-btn>
    </v-app>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Poppins:400,500,600,700&display=swap');

    .btn {
        text-transform: capitalize;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }

    .my-float {
        margin-top: 16px;
    }

    .float {
        position: fixed;
        width: 60px;
        height: 60px;
        bottom: 40px;
        right: 40px;
        background-color: #25d366;
        color: #FFF;
        border-radius: 50px;
        text-align: center;
        font-size: 30px;
        box-shadow: 2px 2px 3px #999;
        z-index: 100;
    }

</style>

<script>
    import Footer from '../components/Footer'
    import Card from '../components/items/Card'
    import {productosRef} from "../credentials/firebase";

    export default {
        name: 'App',
        components: {
            Footer,
            Card
        },
        data() {
            return {
                drawer: true,
                name: "",
                formType: "",
                cobertura: "",
                payment: "",
                paymentcapacity: "",
                brand: "",
                products_data: [],
                seguro: "",
                user: [],
                phone: "",
                birthdate: "",
                variable:"",
                gender:"",
                height:"",
                weight:"",
                postalcode:"",
                muro:"",
                techo:"",
                pisos:"",
                suma:"",
                modelyear:"",
                description:""
            }
        },
        created() {
            this.drawer = (!(this.$vuetify.breakpoint.name === 'xs' || this.$vuetify.breakpoint.name === 'sm'))
            this.name = this.$route.query.firstname + " " + this.$route.query.lastname
            this.email = this.$route.query.email
            this.phone = this.$route.query.phone
            this.birthdate = this.$route.query.birthdate
            this.formType = this.$route.query.formType
            this.cobertura = this.$route.query.cobertura
            this.payment = this.$route.query.payment
            this.brand = this.$route.query.brand
            this.modelyear = this.$route.query.modelyear
            this.seguro = this.$route.query.seguro
            this.paymentcapacity = this.$route.query.paymentcapacity
            this.gender = this.$route.query.gender
            this.height = this.$route.query.height
            this.weight = this.$route.query.weight
            this.description = this.$route.query.description
            this.muro = this.$route.query.muro
            this.techo = this.$route.query.techo
            this.pisos = this.$route.query.pisos
            this.suma = this.$route.query.suma
            this.postalcode = this.$route.query.postalcode
            this.variable = "Cotizador"
            this.user= [
                {variable: "Cotizador"},
                {name: this.name},
                {email: this.email},
                {phone: this.phone},
                {birthdate: this.birthdate},
                {seguro_info: {
                        type: this.formType,
                        coverage: this.cobertura,
                        payment:this.payment,
                        paymentcapacity: this.paymentcapacity,
                        gender: this.gender,
                        height: this.height,
                        weight: this.weight,
                        postalcode: this.postalcode,
                        muro: this.muro,
                        techo: this.techo,
                        pisos: this.pisos,
                        suma: this.suma,
                        brand: this.brand,
                        modelyear: this.modelyear,
                        description: this.description
                    }
                }
            ]

            console.log(this.user)
        },
        mounted() {
            this.getProducts()
        },
        methods: {

            getFirebaseProducts() {
                return new Promise(function (resolve, reject) {
                    productosRef.once('value').then(function (snap) {
                        if (snap.exists()) {
                            var data = snap.val()
                            return resolve(data)
                        }
                        return reject()
                    }).catch(err => {
                        return reject(err)
                    })
                })
            },
            getProducts() {
                this.getFirebaseProducts('blah').then((data) => {
                    this.filterOutput(data)
                }).catch(function () {
                    console.log('Error de Conexión');
                });

            },
            filterOutput(productos) {
                for (let i = 0; i < productos.length; i++) {
                    if (productos[i].product === this.formType) {
                        this.products_data.push(productos[i]);
                    }
                }


            }
        }
    };
</script>
