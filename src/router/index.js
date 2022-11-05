import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Read from "../views/Read.vue";
import WantToRead from "../views/WantToRead.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/read",
    name: "Read",
    component: Read,
  },
  {
    path: "/want_to_read",
    name: "WantToRead",
    component: WantToRead,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
