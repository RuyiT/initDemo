// vue.config.js
// webpack 压缩插件
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const path = require('path');

module.exports = {
  assetsDir: 'static',
  publicPath: '/',
  outputDir: 'dist',
  configureWebpack: config => {
    // 生产环境配置
    if (process.env.NODE_ENV === 'production') {
      // Gzip 压缩
      config.plugins.push(
        new CompressionWebpackPlugin({
          // 正在匹配需要压缩的文件后缀
          test: /.(js|css|svg|woff|ttf|json|html)$/,
          // 大于10kb的会压缩
          threshold: 10240,
        }),
      );
    } else {
      // 开发环境配置
    }
  },

  css: {
    extract: false,
    sourceMap: false,
    //向css相关的loader传递选项，
    loaderOptions: {
      //支持的loader:css-loader,postcss-loader,sass-loader,less-loader,stylus-loader
      css: {
        //这里的选项会传递给 css-loader
      },
      postcss: {
        //这里的选项会传递给 postcss-loader
      },
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/css/base.less')], // 引入全局样式变量
    },
  },
  productionSourceMap: false,
  // 开发环境Node配置
  devServer: {
    open: true, //配置自动启动浏览器
    hotOnly: true, //热更新
    port: 8080,
    host: '0.0.0.0',
    // 代理配置
    proxy: {
      '^/api': {
        headers: {
          aaa: '111',
        },
        // 目标 API 地址
        target: 'http://0.0.0.0:8000',
      },
    },
  },
};
