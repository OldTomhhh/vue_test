<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <YjjHahaha/>
    <School :age="age"/>
    <button @click="change">改变</button>
    
    <Outer/>
    <ToDoList></ToDoList>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import YjjHahaha from './components/YjjHahaha.vue'
import School from './components/School.vue'
import ToDoList from './components/ToDoList.vue'
import Outer from './components/fatherSonBrother/Outer.vue'
export default {     
  name: 'App',
  components: {
    HelloWorld,
    YjjHahaha,
    School,
    ToDoList,
    Outer
  },
  data(){
    return{
      age:18
    }
  },
  methods:{
    change(){
      this.age++
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
