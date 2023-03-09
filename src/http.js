import axios from '../node_modules/axios/index'
axios.defaults.baseURL = process.env.VUE_APP_SERVER_URL;
export default{
    install(Vue){
        Vue.prototype.$http = axios
    }
}