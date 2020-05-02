import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      meta: {
        title: 'editt homepage'
      },
      component: () => import("@/views/Home"),
    },
    {
      name: 'publications',
      path: '/publications/:id',
      meta: {
        title: 'editt homepage'
      },
      component: () => import("@/views/Publication"),
      props: true
    },
    {
      name: 'feed',
      path: '/feed/:type',
      meta: {
        title: 'editt feed'
      },
      component: () => import("@/views/Feed"),
      props: true
    },
    {
      name: 'createPublication',
      path: '/create',
      meta: {
        title: 'Create publication'
      },
      component: () => import("@/views/CreatePublication")
    },
    {
      name: 'notFound',
      path: "*",
      meta: {
        title: 'Not found'
      },
      component: () => import("@/views/NotFound")
    }
  ]
});