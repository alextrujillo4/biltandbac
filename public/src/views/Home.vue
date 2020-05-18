<template>
  <v-app>
    <v-app-bar
            app
            color="secondary">
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="drawer = true" />
      </span>
      <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="@/assets/logo.svg"
              transition="scale-transition"
              width="160"
      />
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text
               class="btn"  color="#002554" @click="$vuetify.goTo('#Inicio')">Inicio</v-btn>
        <v-btn text
               class="btn"  color="#002554" @click="$vuetify.goTo('#Seguros')">Seguros</v-btn>
        <v-btn text
               class="btn"  color="#002554" @click="$vuetify.goTo('#Beneficios')">Beneficios</v-btn>
        <v-btn text
               class="btn" color="#002554" to="/consultoria">Consultoría</v-btn>
        <v-btn text
               class="btn"  color="#002554" @click="$vuetify.goTo('#Footer')">Contacto</v-btn>
        <v-btn
                class="btn"
                depressed
                rounded
                color="primary"
                @click="dialog = !dialog, getSeguroSelected">Cotizar Ahora</v-btn>

      </v-toolbar-items>
      <v-btn
        class="hidden-sm-and-up"
        color="primary"
        @click="dialog = !dialog, getSeguroSelected">Cotizar</v-btn>
    </v-app-bar>
    <v-navigation-drawer
            v-model="drawer"
            fixed
            temporary
    >
      <v-list
              nav
              dense
      >
        <v-list-item-group
                active-class="deep-purple--text text--accent-4"
        >
          <v-list-item class="pa-2">
            <v-list-item-title class="subtitle-2" @click="drawer=false,$vuetify.goTo('#Inicio')">Inicio</v-list-item-title>
          </v-list-item>

          <v-list-item class="pa-2">
            <v-list-item-title class="subtitle-2" @click="drawer=false,$vuetify.goTo('#Seguros')">Seguros</v-list-item-title>
          </v-list-item>

          <v-list-item class="pa-2">
            <v-list-item-title class="subtitle-2" @click="drawer=false,$vuetify.goTo('#Beneficios')">Beneficios</v-list-item-title>
          </v-list-item>

          <v-list-item class="pa-2" to="/consultoria">
            <v-list-item-title class="subtitle-2" >Consultoría</v-list-item-title>
          </v-list-item>
          <v-list-item class="pa-2">
            <v-list-item-title class="subtitle-2 " @click="drawer=false,$vuetify.goTo('#Footer')">Contacto</v-list-item-title>
          </v-list-item>
            <v-list-item class="pa-2" style="background: #0d47a1;">
              <v-list-item-title class="white--text subtitle-2"  @click="drawer=false,dialog = !dialog, getSeguroSelected">Cotizar ahora</v-list-item-title>
            </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-container fluid>
      <v-layout row wrap align-center>
        <Paralax  id='Inicio'/>
        <Home />
        <Seguros id='Seguros' v-on:stepChanged="stepChanged" :step="step"/>
        <Beneficios id='Beneficios'/>
        <Empresas />
        <CotizarAhora/>
        <Footer id='Footer'/>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <v-card>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="setDefaultDrawer">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Cotizar</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <DialogContent :seguro="this.querySeguro"/>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-container>
    <v-btn class="float" target="_blank"
            color="green"
            fixed
            bottom
            right
            fab
            href="https://api.whatsapp.com/send?phone=528112904687&text=&source=&data="
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

  .my-float{
    margin-top:16px;
  }

  .float{
    position:fixed;
    width:60px;
    height:60px;
    bottom:40px;
    right:40px;
    background-color:#25d366;
    color:#FFF;
    border-radius:50px;
    text-align:center;
    font-size:30px;
    box-shadow: 2px 2px 3px #999;
    z-index:100;
  }

</style>

<script>
  import Paralax from '../components/Paralax';
  import Home from '../components/Nosotros';
  import Seguros from '../components/Seguros';
  import Beneficios from '../components/Beneficios';
  import Empresas from '../components/Companies';
  import CotizarAhora from '../components/CotizarAhora'
  import Footer from '../components/Footer'
  import DialogContent from '../components/dialogs/DialogContent'
  export default {
    name: 'App',
    props:['step'],
    components: {
      Paralax,
      Home,
      Seguros,
      Beneficios,
      Empresas,
      CotizarAhora,
      Footer,
      DialogContent
    },
    methods:{
      stepChanged:function(step) {
        this.dialog = step;
        this.getSeguroSelected()
      },
      setDefaultDrawer:function () {
        this.$router.push("/");
        this.dialog = false;
        this.querySeguro = "";
        this.getSeguroSelected()
      },
      getSeguroSelected:function () {
        if (this.$route.query.seguro){
          this.querySeguro = this.$route.query.seguro
        } else return ""
      }

    },
    data: () => ({
      drawer: false,
      dialog: false,
      querySeguro:"",
    }),
    created() {
      this.dialog = this.$route.query.dialog
      //http://localhost:8080/?dialog=true To open
    }
  };
</script>
