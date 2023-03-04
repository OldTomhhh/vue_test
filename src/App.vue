<template>
  <div id="app">
    <input type="text" v-model="searchname"><button @click="goSearch">搜索</button>
    <UserList :data='listData'/>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <YjjHahaha />
    <School :age="age" />
    <button @click="change">改变</button>
    <ToDoList></ToDoList>
    <Outer />
    

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import YjjHahaha from "./components/YjjHahaha.vue";
import School from "./components/School.vue";
import ToDoList from "./components/ToDoList.vue";
import Outer from "./components/fatherSonBrother/Outer.vue";
import YjjButton from "./components/common/YjjButton.vue";
import UserList from "./components/UserList.vue";



export default {
  name: "App",
  components: {
    HelloWorld,
    YjjHahaha,
    School,
    ToDoList,
    Outer,
    YjjButton,
    UserList
  },
  mounted() {
      
  },
  data() {
    return {
      age: 18,
      listData:[],
      searchname:""
    };
  },
  methods: {
    change() {
      this.age++;
    },
    goSearch() {
      this.listData=[]
       this.$http
        .get("http://localhost:8080/api/search/users?q="+this.searchname)
        .then((res) => {
          console.log(res.data.items);
          this.listData = res.data.items
        })
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


