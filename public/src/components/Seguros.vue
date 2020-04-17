<template>
    <v-container
            fluid
            style="padding-top:56px; padding-bottom: 56px; background: linear-gradient(45deg , #161931, #193C65, #1C5F99);">
        <v-row row wrap align-center
               align="center"
               justify="center">
            <v-col
                    class="text-center hidden-md-and-up"
                    cols="12">
                <h1 class="headline pa-4 white--text">
                    Seguros diseñados para brindarte el mejor servicio y cobertura
                </h1>
            </v-col>

            <v-col
                    class="text-center hidden-sm-and-down white--text"
                    cols="8">
                <h1 class="display-1 pa-12 white--text">
                    Seguros diseñados para brindarte el mejor servicio y cobertura.
                </h1>
            </v-col>

        </v-row>
        <v-row row wrap align-center>
            <v-col
                    class="text-center"
                    cols="12"
                    xl="3"
                    lg="3"
                    md="6"
                    sm="6"
            >
                <v-hover
                        v-slot:default="{ hover }"
                        open-delay="200">
                    <v-card class="ma-6"
                            :color='hover ? "rgb(255, 255, 255, 1)" : "rgb(0, 0, 0, 0)"'
                            :elevation="hover ? 16 : 0"
                    >
                        <v-icon :color='hover ? "light-blue darken-4" : "accent"' class="ma-4 white--text" x-large>
                            mdi-car
                        </v-icon>
                        <h1 :class='hover ? "headline ma-3 hover-active" : "headline  ma-3 local-white white--text"'>
                            Seguro de Autos Individuales
                        </h1>
                        <p :class='hover ? "text-start body-2  ma-4 hover-active" : " text-start body-2  ma-4 local-white "'>
                            Este seguro tiene por objeto, reparar o indemnizar
                            los daños accidentales producidos en los vehículo
                            de terceros y en el vehículo asegurado.
                            <br><br><br>
                        </p>
                    </v-card>
                </v-hover>
                <v-btn class="ma-3 btn" large color="accent" @click="moveStep('Seguros de Autos Individuales')">Cotizar</v-btn>
            </v-col>
            <v-col
                    class="text-center"
                    cols="12"
                    xl="3"
                    lg="3"
                    md="6"
                    sm="6"
            >
                <v-hover
                        v-slot:default="{ hover }"
                        open-delay="200">
                    <v-card class="ma-6"
                            :color='hover ? "rgb(255, 255, 255, 1)" : "rgb(0, 0, 0, 0)"'
                            :elevation="hover ? 16 : 0"
                    >
                        <v-icon :color='hover ? "light-blue darken-4" : "accent"' class="ma-4" x-large>
                            mdi-hospital-building
                        </v-icon>
                        <h1 :class='hover ? "headline ma-3 hover-active" : "headline  ma-3 local-white white--text"'>
                            Seguros Gastos Médicos Mayores
                        </h1>
                        <p :class='hover ? "text-start body-2  ma-4 hover-active" : " text-start body-2  ma-4 local-white white--text"'>
                            Te ofrecemos los servicios de
                            profesionales y hospitales con
                            estándares de calidad, así
                            como protección integral en
                            México y en el extranjero.
                            <br><br><br>
                        </p>
                    </v-card>
                </v-hover>
                <v-btn class="ma-3 btn" large color="accent" @click="moveStep('Seguro de Gastos Medicos')">Cotizar</v-btn>
            </v-col>
            <v-col
                    class="text-center"
                    cols="12"
                    xl="3"
                    lg="3"
                    md="6"
                    sm="6"
            >
                <v-hover
                        v-slot:default="{ hover }"
                        open-delay="200">
                    <v-card
                            class="ma-6"
                            :color='hover ? "rgb(255, 255, 255, 1)" : "rgb(0, 0, 0, 0)"'
                            :elevation="hover ? 16 : 0"
                    >
                        <v-icon :color='hover ? "light-blue darken-4" : "accent"' class="ma-4" x-large>
                            mdi-shield-account
                        </v-icon>
                        <h1 :class='hover ? "headline ma-3 hover-active" : "headline  ma-3 local-white white--text"'>
                            Seguros de Vida
                        </h1>
                        <p :class='hover ? "text-start body-2  ma-4 hover-active" : " text-start body-2  ma-4 local-white white--text"'>
                            Te ofrecemos una solución financiera y patrimonial
                            adecuada a las necesidades personales y empresiarales
                            a lo largo de tu vida.
                            <br><br><br>
                        </p>
                    </v-card>
                </v-hover>
                <v-btn class="ma-3 btn" large color="accent" @click="moveStep('Seguro de Vida')">Cotizar</v-btn>
            </v-col>
            <v-col class="text-center"
                   cols="12"
                   xl="3"
                   lg="3"
                   md="6"
                   sm="6">
                <v-hover
                        v-slot:default="{ hover }"
                        open-delay="200">
                    <v-card class="ma-6"
                            :color='hover ? "rgb(255, 255, 255, 1)" : "rgb(0, 0, 0, 0)"'
                            :elevation="hover ? 16 : 0"
                    >
                        <v-icon :color='hover ? "light-blue darken-4" : "accent"' class="ma-4" x-large>
                            mdi-domain
                        </v-icon>
                        <h1 :class='hover ? "headline ma-3 hover-active" : "headline  ma-3 local-white white--text"'>
                            Seguros Contra Daños
                        </h1>
                        <p :class='hover ? "text-start body-2  ma-4 hover-active" : " text-start body-2  ma-4 local-white white--text "'>
                            Es un seguro que protege el patrimonio de tu empresa
                            y/o casa, contra incendio, daños por terremotos y riesgos
                            hidrometeorológicos, robo, violencia y/o asalto.
                            <br><br><br>
                        </p>
                    </v-card>
                </v-hover>
                <v-btn class="ma-3 btn" large color="accent" @click="moveStep('Seguro Contra Daños')">Cotizar</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>

    export default {name: 'App',
    methods:{
        moveStep(seguro){
            this.$router.push("?seguro="+seguro);
            this.$emit('stepChanged',true)
        }
    },
    }
</script>

<style lang="scss">
    @import './src/styles/variables.scss';

    .hover-active {
        color: #454545;
    }

</style>
