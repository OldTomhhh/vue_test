import Vue from 'vue'
import App from './App.vue'
import plugns from "./plugns"
Vue.config.productionTip = false
Vue.use(plugns)//使用自定义插件
new Vue({
  render: h => h(App),
}).$mount('#app')
