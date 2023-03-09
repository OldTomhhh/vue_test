
console.log("环境变量为：",process.env.VUE_APP_SERVER_URL);
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
    },
  },
  // 关闭语法检测
  lintOnSave:false,
  //代理服务
  devServer: {
    proxy: {
        "/api": {
            // 代理名称   凡是使用/api开头的地址都是用此代理
            target: "https://api.github.com", // 需要代理访问的api地址
            changeOrigin: true, // 允许跨域请求
            pathRewrite: {
                // 重写路径，替换请求地址中的指定路径
                "^/api": "/", // 将请求地址中的/api替换为空，也就是请求地址中不会包含/api/
            },
        },
    },
},
};

