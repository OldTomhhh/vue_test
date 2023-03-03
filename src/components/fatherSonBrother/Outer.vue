<template>
  <div class="outer">
    <div>outer</div>
    <div class="innerBox">
        <Father></Father>
        <Brother></Brother>
    </div>
  </div>
</template>

<script>
import Father from "./Father.vue";
import Brother from "./Brother.vue";

export default {
  name: "Outer",
  components: {
   Father,
   Brother
  },
};
</script>

<style lang="less" scoped>
.outer {
  width: 500px;
  height: 500px;
  background-color: rosybrown;
  .innerBox{
      display: flex;
      justify-content: space-between;
  }
}
</style>