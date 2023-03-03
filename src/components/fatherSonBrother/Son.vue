<template>
  <div class="SonOuter">
    <div>son</div>
    <div>父组件的数据：{{ fatherNumber }}</div>
    <input v-model="sonData" @input="onInput" type="text" />
  </div>
</template>

<script>
export default {
  name: "Son",
  props: ["fatherNumber"],
  data() {
    return {
      sonData: 1,
    };
  },
  mounted(){
      this.onInput()
  },
  methods:{
      onInput(){
          this.$emit('getdata',this.sonData)
           this.$bus.$emit('sendTobrother',this.sonData)
      }
  }
};
</script>

<style lang="less" scoped>
.SonOuter {
  // width: 120px;
  height: 200px;
  margin-top: 80px;
  background-color: salmon;
}
</style>