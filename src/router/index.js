import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/consultoria',
    name: 'Consultoria',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Consultoria.vue'),
  },
];

const router = new VueRouter({
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
