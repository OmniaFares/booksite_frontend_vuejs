import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Fav from "../views/Fav.vue";
import Add from "../views/Add.vue";
import Update from "../views/Update.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/fav",
    name: "Fav",
    component: Fav,
  },
  {
    path: "/add",
    name: "Add",
    component: Add,
  },
  {
    path: "/update",
    name: "Update",
    component: Update,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
