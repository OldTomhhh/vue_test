<template>
  <div class="brotherOuter">
    <div>Brother</div>
    <div>来自Son的数据:{{sonData}}</div>
    <div>来自father的数据:{{brotherData}}</div>

  </div>
</template>

<script>
export default {
  name: "Brother",
  mounted() {
    this.$bus.$on("sendTobrother", this.getdata);
    this.$bus.$on("sendTofather", this.getdata2);

  },
  data() {
    return {
      sonData: 1,
      brotherData:1
    };
  },
  methods: {
    getdata(value) {
        this.sonData = value
    },
    getdata2(value){

        this.brotherData = value
    }
  },
};
</script>

<style lang="less" scoped>
.brotherOuter {
  width: 200px;
  height: 400px;
  background-color: rgb(107, 149, 165);
}
</style>