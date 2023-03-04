<template>
  <!-- myFliter是我注册的全局过滤器 -->
  <div>{{ news | myFliter }}</div>
</template>

<script>
export default {
  name: "YjjHahaha",
  data() {
    return {
      news: "测试全局过滤器",
    };
  },
};
</script>

<style lang="less"></style>
