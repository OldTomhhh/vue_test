<template>
  <div @click="onClick" class="list-item-button" :class="[type,size]">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "YjjButton",
  // emits:['tap'],
  props: {
    title: {
      default: "按钮",
      type: String,
    },
    type: {
      default: "default",
      type: String,
    },
    click:{
      default:()=>{},
      type:Function
    },
    size:{
      default:'middle',
      type: String
    }


  },
  mounted() {},
  updated() {},
  data() {
    return {};
  },
  methods: {
    onClick(){
      this.$emit('clicks')
    }
  },
  filters: {},
};
</script>

<style lang="less" scoped>
.list-item-button {
  display: inline-block;
  min-width: 50px;
  padding: 0 10px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  transition: all 0.2s;
}
.default{
  background-color: rgb(114, 163, 228);
  color: rgb(255, 255, 255);
}
.default:hover{
   background-color: rgb(98, 138, 190);
   box-shadow: 0px 0px 5px 2px rgba(47, 87, 132, 0.32);
}

.danger{
  background-color: rgb(228, 114, 114);
  color: rgb(255, 255, 255);
}
.danger:hover{
   background-color: rgb(180, 91, 91);
   box-shadow: 0px 0px 5px 2px rgba(132, 74, 47, 0.32);

}

.success{
  background-color: rgb(123, 228, 114);
  color: rgb(255, 255, 255);
}
.success:hover{
   background-color: rgb(99, 180, 92);
   box-shadow: 0px 0px 5px 2px rgba(71, 132, 47, 0.32);

}

</style>