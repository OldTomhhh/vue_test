<template>
  <div class="loadingBox">
    <div v-if="isloading" class="loading">还在加载</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:"Loading",
    props:{
        isloading:{
            default:false,
            type:Boolean
        }
    }
}
</script>

<style lang="less" scoped>
.loadingBox{

    .loading{
        width: 100%;
        height: 100%;
        line-height: 100%;
        position: absolute;
        background-color: #5e5e5e22;
        z-index: 999;
    }
}
</style>