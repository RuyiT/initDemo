import Vue from 'vue'
import loadingVue from './loading2.vue'

const LoadingConstructor = Vue.extend(loadingVue)
const defaultOption = {
  lockBody: false, // 是否锁定页面
  text: '', // 加载loading页面的显示文字
  textColor: '#fff', // 文字颜色
  line: 20, // 图标的杠数量控制
  lineColor: '#fff' // 图标的杠的颜色控制
}
let preLoading = null // 上一个loading实例
let count = 0 // 记录showLoading调用次数

LoadingConstructor.prototype.close = function () {
  this.show = false
  // 解决ie11偶尔出现loading关不掉的问题
  setTimeout(() => {
    if (count) return
    this.$el.style.display = 'none'
  }, 500)
}
const Loading = (options = {}) => {
  let instance
  options = Object.assign({}, defaultOption, options)
  if (preLoading == null) {
    instance = new LoadingConstructor({
      el: document.createElement('div'),
      data: options
    })
    preLoading = instance
    document.body.appendChild(instance.$el)
  } else {
    instance = preLoading
    instance = Object.assign(instance, options)
  }
  if (options.lockBody) {
    document.body.style.overflow = 'hidden'
  }
  instance.show = true
}

const showLoading = (options = {}) => {
  count++
  Loading(options)
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
    }
    document.body.style.overflow = 'auto'
  }
}

export {
  showLoading,
  closeLoading
}
