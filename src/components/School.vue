<template>
  <div>
      <div v-text="age" ></div>
      <div ref='title' class="demo" @click="showDoom">watch{{age}}</div>
      <div class="demo" >filters{{age | ageBig}}</div>
      <div class="demo" >computed{{newbig}}</div>
      <button @click="showName">show name</button>
  </div>
</template>

<script>

export default {
    name:"School",
    props:{
        age:{
            default:"默认值"
        }
    },
    data(){
        return{
            name:"yangjunjie"
        }
    },
    methods:{
        showDoom(){
            console.log(this.$refs.title);
        },
        showName(){
            alert(this.name)
        }
    },
    computed:{
        newbig(){
            return this.age+5
        }
    },
    watch:{
        age(n,o){
            console.log(n,o);
        }
    },
    filters:{
        ageBig(age){
            return age*100
        }
    }
}
</script>

<style>
.demo{
    width: 100px;
    height: 100px;
    display: inline-block;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    background: rgb(238, 191, 191);
}
</style>