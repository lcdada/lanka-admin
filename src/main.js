import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "./assets/css/global.css";
import "./assets/font/iconfont.css";
// import http from "./api/http"
import axios from "axios"

Vue.prototype.$http = axios
Vue.config.productionTip = false;
// Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
