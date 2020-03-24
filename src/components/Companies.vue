<template>
  <v-container>
    <v-row
            align="center"
            justify="center"
    >
      <v-col
              class="text-center"
              cols="8"
      >
        <h1 class="display-1 active-color ma-8">
          Aseguradoras con las que trabajamos
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
              cols="12"
              lg="6"
              md="12"
              sm="12"
              xl="6">
        <v-card
                elevation="6"
                class="pa-6"
                tile
        >
          <v-layout justify-center fill-height>
            <v-divider
                    vertical
            />
            <div>
              <v-card-title class="headline ma-2 active-color">
                <v-icon
                        large
                        left
                        color="primary"
                >
                  mdi-earth
                </v-icon>
                Precios competitivos
              </v-card-title>
              <v-card-subtitle class="body-1 ma-2">
                Desarrollamos planes de seguros actualizados y competitivos en el mercado mundial.
              </v-card-subtitle>
            </div>
          </v-layout>
        </v-card>
      </v-col>
      <v-col
              cols="12"
              lg="6"
              md="12"
              sm="12"
              xl="6">
        <v-card
                elevation="6"
                class="pa-6"
                tile
        >
          <v-layout justify-center fill-height>
            <v-divider
                    vertical
            />
            <div>
              <v-card-title class="headline ma-2 active-color">
                <v-icon
                        large
                        left
                        color="primary"
                >
                  mdi-sale
                </v-icon>
                Tarifas Atractivas
              </v-card-title>
              <v-card-subtitle class="body-1 ma-2">
                Ofrecemos tarifas atractivas y descuentos adicionales en los seguros de autos
              </v-card-subtitle>
            </div>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
  @import './src/styles/variables.scss';
  .active-color {
    color: #002554 ;
  }

</style>
