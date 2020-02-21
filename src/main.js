import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "./assets/css/global.css";
import "./assets/font/iconfont.css";
import api from './api' // 导入api接口
import VueRouter from 'vue-router';
import 'default-passive-events'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}



Vue.config.productionTip = false;
Vue.prototype.$api = api; // 将api挂载到vue的原型上

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
