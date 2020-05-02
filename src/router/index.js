import Vue from "vue";
import Router from "vue-router";
import login from "@/pages/login/login.vue";
import create from "@/pages/create/login.vue";
import detail from "@/pages/detail/login.vue";
import edit from "@/pages/edit/login.vue";
import index from "@/pages/index/login.vue";
import my from "@/pages/my/login.vue";
import register from "@/pages/register/login.vue";
import user from "@/pages/user/login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      component: login
    },
    {
      path: "/create",
      component: create
    },
    {
      path: "/detail",
      component: detail
    },
    {
      path: "/edit",
      component: edit
    },
    {
      path: "/index",
      component: index
    },
    {
      path: "/my",
      component: my
    },
    {
      path: "/register",
      component: register
    },
    {
      path: "/user",
      component: user
    }
  ]
});
