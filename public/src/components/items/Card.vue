<template>
    <v-content>
        <v-layout v-if="!data || data.length === 0" class=" mt-n12 mb-n4">
            <v-flex lg12 md12 sm12 xl12>
                <p class="mx-auto title" v-if="data.index === 0"> Nuestra Recomendación:</p>
                <p class="mx-auto title" v-if="data.index === 1"> Otros Seguros que pueden interesarte:</p>
            </v-flex>
        </v-layout>
        <v-layout >
            <v-flex  lg12 md12 sm12 xl12>
                <v-card class="mb-6" color="accent" dark>
                    <v-card-title>
                        <h1 class="title mt-2 hidden-sm-and-down">
                            {{data.product.product}}
                        </h1>
                        <!--mobile-->
                        <h1 class="subtitle-1 white--text mt-2 hidden-md-and-up ">
                            {{data.product.product}}
                        </h1>
                    </v-card-title>
                    <v-card-text class="headline ">"{{data.product.description_short}}"</v-card-text>
                    <v-card-actions>
                        <v-btn
                                class="ml-2 mb-2"
                                color="primary"
                                medium
                                depressed
                                @click="mailer=true,setDeploy()"
                        >
                            ¡Lo quiero!
                        </v-btn>
                        <v-spacer></v-spacer>

                        <v-btn
                                @click="show = !show"
                                icon
                        >
                            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>
                            <v-card-text>
                                <p class="title">Descripción:</p>
                                <p class="body-1">{{data.product.description}}</p>
                            </v-card-text>
                            <v-card-text>
                                <p class="title">Detalles de cobertura:</p>
                                <p class="body-1">{{data.product.details}}</p>
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-flex>
        </v-layout>
        <v-dialog
                v-model="mailer"
                width="500"
        >

            <v-card>
                <v-card-title
                        class="headline grey lighten-2"
                        primary-title>
                    ¡Mensaje enviado!
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
                        Acepto
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-content>
</template>

<script>
    export default {
        props: ['data'],
        data: () => ({
            show: false,
            mailer:false
        }),
        methods:{
            setDeploy(){
                let data = JSON.stringify({
                    "name": this.data.user
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

            }
        }
    }
</script>

<style lang="scss">

    @import '../../styles/variables';

    .hover-active {
        color: #454545;
    }
</style>


