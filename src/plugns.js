export default {
  install(Vue) {
    Vue.filter("myFliter", function (value) {
      return value + 5;
    });
    Vue.prototype.$tool = {
      throttle: function (method, context, delay = 300) {
        clearTimeout(method.tId);
        method.tId = setTimeout(function () {
          method.call(context);
        }, delay);
      },
    };
  },
};
