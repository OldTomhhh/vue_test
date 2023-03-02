// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
    },
  },
  // 关闭语法检测
  lintOnSave:false
};
