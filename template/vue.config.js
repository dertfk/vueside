// 具体字段参见https://cli.vuejs.org/zh/config/#vue-config-js
module.exports = {
  // 部署应用包时的基本 URL
  publicPath: "/",
  // npm run build时 生成文件的目录
  outputDir: "dist",
  // 如果不需要生产时的源映射，将此设置为false可以加速生产构建
  productionSourceMap: false,

  devServer: {
    port: 8088, // 端口号
    host: "localhost",
    https: false, // https:{type:Boolean}
    open: true // 配置自动启动浏览器
    // proxy: {} // 配置代理
  }
};
