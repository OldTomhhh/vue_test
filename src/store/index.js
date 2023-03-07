// 创建vuex核心store
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const actions = {
  changeKey(context, value) {
    // context中有state
    context.commit("CHANGEKEY", value);
  },
};
//用于操作数据，这里不写业务逻辑
const mutations = {
  CHANGEKEY(state, value) {
    state.key = value;
  },
};

const getters = {
  keyPro(state) {
    return state.key + "---getters";
  },
};
//用于存储数据
const state = {
  key: "",
  school:"清华大学",
  name:"杨俊杰",
  subject:"量子物理学"
};

const store = new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});

export default store;
