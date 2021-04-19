module.exports = {
  // 此目录为根目录，不再向上查找配置。
  root: true,
  // 解析器类型: espima(默认), babel-eslint, @typescript-eslint/parse……
  parser: 'vue-eslint-parser',
  // 解析器配置参数
  parserOptions: {
    parser: 'babel-eslint',
    // 代码类型：script(默认), module
    sourceType: 'module'
  },
  // 环境定义一组全局变量的预设,本项目为浏览器环境
  env: {
    browser: true,
    es6: true,
    node: true
  },
  // 扩展，直接使用别人已经写好的 lint 规则
  extends: 
    ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"]
  // [
  //   'plugin:vue/recommended', // 插件类型，也可以直接在 plugins 属性中进行设置，规则：`plugin:${pluginName}/${configName}`
  //   'eslint-config-standard' // npm 包扩展,必须以 eslint-config- 开头，使用时可以省略这个头,如写成：standard
  // ]
  ,
  rules: {
    // 具体规则
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": "error"
  }
}
