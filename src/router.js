import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import("@/views/Home"),
    },
    {
      name: 'publications',
      path: '/publications/:id',
      component: () => import("@/views/Publication"),
      props: true
    },
  ]
});