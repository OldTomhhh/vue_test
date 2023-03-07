<template>
  <div id="app">
    <AAAAAAA/>
    <input @keydown.enter="goSearch" type="text" v-model="searchname" /><button @click="goSearch">
      搜索
    </button>
    <UserList :data="listData" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <YjjHahaha />
    <School :age="age" />
    <button @click="change">改变</button>
    <ToDoList></ToDoList>
    <Outer />
    <img src="./assets/logo.png" alt="">
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import YjjHahaha from "./components/YjjHahaha.vue";
import School from "./components/School.vue";
import ToDoList from "./components/ToDoList.vue";
import Outer from "./components/fatherSonBrother/Outer.vue";
import YjjButton from "./components/common/YjjButton.vue";
import Loading from "./components/common/Loading.vue";
import UserList from "./components/UserList.vue";
import AAAAAAA from "./components/vuexText/AAAAAA.vue"

export default {
  name: "App",
  components: {
    HelloWorld,
    YjjHahaha,
    School,
    ToDoList,
    Outer,
    YjjButton,
    UserList,
    Loading,
    AAAAAAA
  },
  mounted() {},
  data() {
    return {
      age: 18,
      listData: [],
      searchname: "",
    };
  },
  methods: {
    change() {
      this.age++;
    },
    dianji() {
      console.log(222222)
    },
    goSearch() {
      if(this.searchname === '')return false
      this.listData = [];
      this.$http
        .get("http://localhost:4090/api/search/users?q=" + this.searchname)
        .then(
          (res) => {
            console.log(res.data.items);
            this.listData = res.data.items;
          },
          (err) => {
            console.error(err);
          }
        );
    },
  },
};
</script>

<style lang="less" scoped>

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>


