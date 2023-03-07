
<template>
  <div>
    <div class="box">
      <div class="box_num">{{ number }}</div>
      <div class="box_num">key：{{ $store.state.key }}</div>
      <div class="box_num">
        key经过getter处理之后：{{ $store.getters.keyPro }}
      </div>
      <div class="box_num">{{ name }}在{{ school }}学习{{ subject }}</div>
      <div>
        <button @click="change(1)">+</button>
        <button @click="change(-1)">-</button>
        <button @click="change">改变key</button>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { mapState } from "vuex";
export default {
  name: "AAAAAA",
  data() {
    return {
      number: 1,
    };
  },
  mounted() {
    this.$store.dispatch("changeKey", Math.random());
  },
  computed: {
    // mapState用法，这种可以重命名（没几把卵用，谁他妈重命名啊）
    ...mapState({ school: "school", name: "name", subject: "subject" }),
    // 写法2
    // ...mapState([ "school","name","subject"]),

  },
  methods: {
    change(char) {
      this.number += char;
      var a = 2
    },
    change() {
      this.$store.dispatch("changeKey", Math.random());
    },
  },
};
</script>
  
  <style lang="less" scoped>
.box {
  width: 500px;
  height: 300px;
  background-color: #e88f8f;
  .box_num {
    margin: 20px;
  }
}
</style>