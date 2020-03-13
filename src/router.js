import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home"),
    //   children: [
    //     {
    //       path: "",
    //       name: "home",
    //       component: () => import("@/views/HomeGlobal")
    //     },
    //     {
    //       path: "popular",
    //       name: "home-popular-publications",
    //       component: () => import("@/views/HomeMyFeed")
    //     },
    //     {
    //       path: "latest",
    //       name: "home-latest-publications",
    //       component: () => import("@/views/HomeTag")
    //     }
    //   ]
    }
  ]
});