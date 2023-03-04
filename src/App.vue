<template>
  <div id="app">
    <YjjButton @tap="dianji" type="default"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <YjjHahaha/>
    <School :age="age"/>
    <button @click="change">改变</button>
    <ToDoList></ToDoList>
    <Outer/>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import YjjHahaha from './components/YjjHahaha.vue'
import School from './components/School.vue'
import ToDoList from './components/ToDoList.vue'
import Outer from './components/fatherSonBrother/Outer.vue'
import YjjButton from './components/common/YjjButton.vue'
export default {     
  name: 'App',
  components: {
    HelloWorld,
    YjjHahaha,
    School,
    ToDoList,
    Outer,
    YjjButton
  },
  data(){
    return{
      age:18
    }
  },
  methods:{
    change(){
      this.age++
    },
    dianji(){
      console.log(2);
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
