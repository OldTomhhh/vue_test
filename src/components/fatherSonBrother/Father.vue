<template>
  <div class="fatherOuter">
    <div>father</div>
    <button @click="go">父传子</button>
    <button @click="goBrother">父传兄弟</button>

    <div>子组件的数据：{{sonddata}}</div>
    <Son @getdata="getdata" :fatherNumber="number1"></Son>
  </div>
</template>

<script>
import Son from "./Son.vue";

export default {
  name: "Father",

  components: {
    Son,
  },
  data() {
    return {
      number1: 1,
      sonddata: '',

    };
  },
    mounted(){
      this.goBrother()
  },
  methods: {
    go() {
      this.number1++;
    },
    getdata(value){
        this.sonddata = value
    },
    goBrother(){
        console.log( this.number1);
        this.$bus.$emit('sendTofather',this.number1)
    }
  },
};
</script>

<style lang="less" scoped>
.fatherOuter {
  width: 200px;
  height: 400px;
  background-color: rgb(226, 198, 176);
}
</style>