<template>
    <v-container fill-height>
        <v-layout  align-center>
            <v-flex class="text-center">
                    <v-row align="center"
                           justify="center">
                    <v-col class="text-center mt-6 "
                           cols="12">
                        <!--Desktop-->
                        <h1 class="display-2 ml-12 mr-12 mt-4 hidden-sm-and-down">
                            ¿Listo para encontrar las mejores opciones de seguros?
                        </h1>
                        <!--Mobile-->
                        <h1 class="display-1 ml-4 mr-4 mt-4 hidden-md-and-up ">
                            Contamos con las mejores opciones en seguros.
                        </h1>
                        <p class="mt-4 body-2 ml-8 mr-8 ">Por favor, Ingresa los datos correspondientes</p>
                    </v-col>
                    <!--DropDown-->
                    <v-col class="d-flex"
                       cols="12"
                       xl="8"
                       lg="8"
                       md="10"
                       sm="10">
                    <v-select
                            @change="itemSelected"
                            :items="items"
                            v-if="!this.seguro"
                            filled
                            single-line
                            label="Selecciona el seguro que deseas cotizar"></v-select>
                </v-col>
                <!--FORM 'SeguroAutos'-->
                    <template v-if="itemSelected == items[0]" class="pl-12 pr-12">
                        <SeguroAutos/>
                    </template>
                    <template v-if="itemSelected == items[1]" class="pl-12 pr-12">
                        <SeguroAutosFlotilla/>
                    </template>
                    <template v-if="itemSelected == items[2]" class="pl-12 pr-12">
                        <SeguroCasa/>
                    </template>
                    <template v-if="itemSelected == items[3]" class="pl-12 pr-12">
                        <SeguroMedico/>
                    </template>
                    <template v-if="itemSelected == items[4]" class="pl-12 pr-12">
                        <SeguroVida/>
                    </template>
                </v-row>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<style lang="scss">
  @import './src/styles/variables.scss';
</style>

<script>
    import SeguroAutos from '../components/form/SeguroAutos';
    import SeguroAutosFlotilla from '../components/form/SeguroAutosFlotilla';
    import SeguroCasa from '../components/form/SeguroCasa';
    import SeguroMedico from '../components/form/SeguroMedico';
    import SeguroVida from '../components/form/SeguroVida';


    export default {
        props:['seguro'],
        components: {
            SeguroAutos,
            SeguroAutosFlotilla,
            SeguroCasa,
            SeguroMedico,
            SeguroVida
        },
        watch: {
            seguro: function() {
                this.itemSelected = this.seguro
            },
        },
        data: () => ({
        itemSelected: "",
        sheet: false,
        items: ['Seguros de Autos Individuales','Seguro de Autos Flotilla', 'Seguro Contra Daños', 'Seguro de Gastos Medicos', 'Seguro de Vida'],
    }),
  }
</script>
