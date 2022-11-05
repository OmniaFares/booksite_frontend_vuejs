import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapVue from "bootstrap-vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
