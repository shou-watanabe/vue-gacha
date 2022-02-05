import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/HomePage.vue";
import Login from "../views/LoginPage.vue";
import Gacha from "../views/GachaPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/gacha",
    name: "Gacha",
    component: Gacha,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
