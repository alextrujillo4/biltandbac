import Vue from 'vue';
import App from './App.vue';
import VueFire from 'vuefire';
import router from './router';
import styles from './styles/variables.scss';
import vuetify from './plugins/vuetify';
import 'typeface-montserrat';
import '@mdi/font/css/materialdesignicons.css';
import axios from 'axios';

Vue.use(VueFire);
Vue.config.productionTip = false;
Vue.prototype.axios = axios;

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuetify)


new Vue({
  router,
  styles,
  vuetify,
  render: (h) => h(App)

}).$mount('#app');

