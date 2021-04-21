// 打包时的环境
const buildEnv = process.env.VUE_APP_BUILD_ENV
// 通用配置
const baseConfig = {
  // 前端base路径
  webBaseURL: '/pc',
  // 后端base路径
  apiBaseURL: '/api',
}
const config = {
  // 本地开发配置
  loc: {},
  // 测试环境配置
  uat: {},
  // 生产环境配置
  prd: {},
}

// 根据打包环境变量读取相应的配置信息,覆盖默认配置
const envConfig = config[buildEnv]
Object.assign(baseConfig, envConfig)

export default baseConfig
