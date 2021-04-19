import { Loading } from 'element-ui'

const defaultOption = {
  lock: true, // 锁定屏幕的滚动
  text: '', // 加载loading页面的显示文字
  background: '', // 遮罩背景色
  spinner: ''// 自定义加载图标类名
}
let preLoading = null // 上一个loading实例
let count = 0 // 记录showLoading调用次数

const showLoading = (options = {}) => {
  count++
  if (count === 1) {
         options = Object.assign({}, defaultOption, options)
    preLoading = Loading.service(options)
  }
}

const closeLoading = () => {
  count--
  // 防止出现count值为负数的情况
  if (count < 0) {
    count = 0
  }
  if (count === 0) {
    if (preLoading) {
      preLoading.close()
      preLoading = null
    }
  }
}

export {
  showLoading,
  closeLoading
}