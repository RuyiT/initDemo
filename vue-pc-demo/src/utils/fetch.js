import Vue from 'vue'
import axios from 'axios'
import { showLoading, closeLoading } from '@/components/loading'
import { MessageBox } from 'element-ui'
// 未授权状态码
let UnauthorizedCode = 401
// 未授权数据，表示登录已失效
let UnauthorizedData = 100000
// 页面刷新次数key
let RefreshCountKey = 'AssistantRefreshCount'
// 页面最多刷新次数
let MaxRefreshCount = 3
// 页面刷新次数
let RefreshCount = Number(window.sessionStorage.getItem(RefreshCountKey)) || 0
// 默认显示loading
let defaultShowLoading = false
// 默认处理ajax异常，显示错误弹窗
let defaultHandleException = true

// axios实例，不影响全局axios
const ajax = axios.create({
  // 自定义header
  headers: {
    // 标识为ajax请求
    'X-Requested-With': 'XMLHttpRequest',
  },
  // 超时时间 ms
  timeout: 20000, // 请求超时时间
})

// POST传参序列化(添加请求拦截器)
ajax.interceptors.request.use(
  config => {
    config = {
      showLoading: defaultShowLoading,
      handleException: defaultHandleException,
      ...config,
    }
    if (config.showLoading) {
      showLoading()
    }
    let timestamp = getTimeStamp()
    // 处理浏览器ajax缓存
    config.params = config.params || {}
    config.params['_'] = timestamp // IE下get请求必须改变url参数才可以禁止缓存，改header无效，巨恶心
    if (config.method.toLowerCase() === 'post') {
      if (config.postFormData) {
        config.headers['Content-Type'] = 'multipart/form-data'
      } else {
        config.headers['Content-Type'] = 'application/json'
        config.data = JSON.stringify(config.data)
      }
      // console.log('[axios post]', config.data)
    }

    return config
  },
  err => {
    closeLoading()
    return Promise.reject(err)
  },
)
// 返回数据处理(添加响应拦截器)
ajax.interceptors.response.use(
  res => {
    closeLoading()
    if (RefreshCount > 0) {
      // 请求正常响应后就重置刷新次数
      RefreshCount = 0
      window.sessionStorage.removeItem(RefreshCountKey)
    }

    if (res.status && res.data) {
      // 需求调整，不要弹窗了
      // if (res.data.code === '11005') {
      //   // 通讯录后台登录权限过期
      //   MessageBox.alert(res.data.msg, '错误', {
      //     confirmButtonText: '确定',
      //     showClose: false
      //   }).then(() => {
      //     // // 退出登录
      //     // window.location = `/_logout?url=${
      //     //   location.origin
      //     // }&_${new Date().getTime()}`
      //   })
      //   // return Promise.reject(res)
      // }
      return res.data
    } else {
      res.config.handleException && handleError('请求出现错误')
      return Promise.reject(res)
    }
  },
  err => {
    closeLoading()
    if (err.response) {
      if (
        err.response.status === UnauthorizedCode &&
        err.response.data === UnauthorizedData
      ) {
        // 网关登录态失效，先刷新下页面试试
        if (!refresh()) {
          handleError('请求出现错误，请稍候再试！')
        }
      } else if (err.response.data && err.response.config.handleException) {
        let msg = err.response.data.error || err.response.data
        handleError(msg)
      }
    } else {
      if (axios.isCancel(err)) {
        // 主动取消请求,不做处理
        console.log('cancel')
      } else if (err.message.indexOf('timeout') > -1) {
        // 超时
        handleError('网络请求超时，请稍候再试！')
      }
    }
    return Promise.reject(err)
  },
)

// 通过原形链注入Vue对象中
Vue.prototype.$http = ajax
// 获取唯一的时间戳
let getTimeStamp = (function () {
  let lastTimeStamp = 0 // 上一次请求的时间戳
  return function () {
    let t = 0
    while (t <= lastTimeStamp) {
      t = new Date().getTime()
    }
    lastTimeStamp = t
    return t.toString()
  }
})()

function handleError(msg) {
  // console.error(msg)
  MessageBox.alert(msg, '错误', { confirmButtonText: '确定' })
}

// 刷新页面
function refresh() {
  if (RefreshCount >= MaxRefreshCount) {
    // 重定向次数达到上限，防止无限重定向
    return false
  }
  RefreshCount++
  window.sessionStorage.setItem(RefreshCountKey, RefreshCount)
  window.location.reload(true) // 强制刷新，不读取浏览器缓存
  return true
}

export default ajax
