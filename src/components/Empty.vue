<template>
  <div class="empty" :style="{'height':`${height}px`}">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "Empty",
  props: {
    title: {
      default: "消息无了",
      type: String
    },
    height:{
        default:300,
        type: Number
    }
  },
};
</script>

<style lang="less" scoped>
.empty{
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: rgb(196, 196, 196);
}
</style>