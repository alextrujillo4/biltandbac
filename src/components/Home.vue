<template>
  <v-row
    align="center"
    class="12"
    justify="center"
  >
    <v-col
      class="text-center"
      cols="12"
      lg="6"
      md="12"
      sm="12"
      xl="6"
    >
      <v-row
        align="center"
        class="12"
        justify="center"
      >
        <v-divider
          class="mx-4"
          vertical
        />
        <div>
          <h1 class="display-title mb-4">
            Sobre Nosotros
          </h1>
          <p class="display-subtitle">
            For help and collaboration with other Vuetify developers,
            <br>please join our online
            <a
              href="https://community.vuetifyjs.com"
              target="_blank"
            >Discord Community</a>
          </p>
        </div>
      </v-row>
    </v-col>
    <v-col
      class="text-center"
      cols="12"
      lg="6"
      md="12"
      sm="12"
      xl="6"
    >
      <v-img
        aspect-ratio="2"
        contain
        src="../assets/bilt&bac-seguros.jpg"
      />
    </v-col>
  </v-row>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Poppins:400,500,600,700&display=swap');
    .btn {
        text-transform: capitalize;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }

    .display-title {
        font-family: 'Montserrat', sans-serif;
        text-align: start;
    }
    .display-subtitle{
        font-family: 'Montserrat', sans-serif;
        text-align: start;

    }
    .theme--light.v-divider {

        border-width: 3px 3px 3px 3px;
        border-image: linear-gradient(45deg, rgba(49,89,108,1) 0%, rgba(98,177,216,1) 100%);
        border-image-slice: 9;
        border-style: solid;
    }

</style>
