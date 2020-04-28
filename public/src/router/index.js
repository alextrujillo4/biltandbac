import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Cotizador from '../views/Cotizador.vue';
import Consultoria from '../views/Consultoria.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
  },
  {
    path: '/cotizador',
    name: 'Cotizador',
    props: true,
    component: Cotizador,
  },
  {
    path: '/consultoria',
    name: 'Consultoria',
    component: Consultoria,
  },
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
/*
*
* const routes = [
  {
    path: '/',
    component: () => System.import('./views/Home.vue'),
    children: [
      { path: '', component: () => System.import('./views/Home.vue') },
      { path: 'Services', abstract: true, component: () => System.import('./views/Consultoria.vue') },
      { path: '*', component: () => System.import('./views/Home.vue') }
    ]
  }
]

* */
