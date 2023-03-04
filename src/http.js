import axios from '../node_modules/axios/index'

export default{
    install(Vue){
        Vue.prototype.$http = axios
    }
}