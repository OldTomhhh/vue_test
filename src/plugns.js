export default {
    install(Vue){
        Vue.filter('myFliter',function(value){
            return value+5
        })
    }
}