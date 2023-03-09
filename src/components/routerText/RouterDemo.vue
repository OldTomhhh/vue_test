<template>
  <div>
    <div>RouterDemo</div>
    <router-link active to="/Page1/yjj"> go Page1</router-link>
    <!-- <router-link  to="/Page2"> go Page2</router-link> -->
    <button @click="changeRouter2">go Page2</button>
    <button @click="changeRouter3">go Page3</button>

    <!-- <router-link  to="/Page3"> go Page3</router-link> -->
    <router-link to="/Page4"> go Page4</router-link>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "RouterDemo",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    changeRouter2() {
      this.$router.push(
        { name: "Page2", query: { key: Math.random() } },
        () => {}
      );
    },
    changeRouter3() {
      this.$router.push(
        { name: "Page3", params: { key: Math.random() } },
        () => {}
      );
    },
  },
};
</script>

<style lang="less" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>