import Vue from "vue";
import App from "./App.vue";
import plugns from "./plugns";
import http from "./http";
import store from "./store/index";
import VueRouter from "vue-router";
import router from "./router/index";
Vue.config.productionTip = false;
Vue.use(plugns); //使用自定义插件
Vue.use(http); //使用axios插件
Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  store,
  router,
  beforeCreate() {
    Vue.prototype.$bus = this; // 全局事件总线
  },
}).$mount("#app");
