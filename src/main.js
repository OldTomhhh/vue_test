import Vue from 'vue'
import App from './App.vue'
import plugns from "./plugns"
import http from "./http"
Vue.config.productionTip = false
Vue.use(plugns)//使用自定义插件
Vue.use(http)//使用自定义插件


new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this // 全局事件总线
   
  }
}).$mount('#app')
