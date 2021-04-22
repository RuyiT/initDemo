# vue-pc-demo
English | [简体中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [Spanish](./README.es.md)
## 初始化项目准备工作
### pc端初始化代码
- 配置：less + (ESLint + Prettier ) + (Lint on save) + (In dedicated config files)

### vue.config.js 配置
- TODO

### router
- npm install --save vue-router

### vuex
- npm install vuex --save

### css-loder
- TODO
- postcss.config.js (传给postcss-loader的相关配置)

### ESLINT
- TODO
- eslintignore  ---不用效验eslint的文件
- eslintrc.js   ---eslint 配置文件
#### 配置prettier
https://www.jb51.net/article/145970.htm
1. 由于使用eslint，并不能最大程度地统一代码风格，因此我们需要引入prettier。
npm install --save-dev prettier 
2. 按照实际需要配置prettier   ---在prettier.config.js文件配置
3. 需要在package.json里面配置调用prettier进行格式化的命令
```
"scripts": {
 "format": "prettier --write \"src/**/*.js\" \"src/**/*.vue\"",
}

```
4. 至此，可以在命令行中输入npm run format对全局代码进行格式化了。

### git相关配置
-   .gitignore 配置git不提交的文件夹

### 环境变量配置
- .env.loc ---本地环境
- .env.prd ---正式环境
- .env.uat ---测试环境

### 编辑器规范
- TODO
- editorconfig相关配置?
- browserslistrc相关配置?

### axios配置
- npm install axios
- /utils/fetch.js   ---axios封装

### 字典项配置
- TODO
- config 里面
### plugins

### 公用方法
- utils 
- TODO

### mock使用
- npm install mockjs -D
- mian.js -> require('./mock/index')
- mock -> index.js   ---封装mock

### vue 多页面
- TODO


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


- 接下来，就开始你的快乐编程之旅把!