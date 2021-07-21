import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import animated from 'animate.css'
// require('./mock/index')

if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.use(ElementUI)
Vue.use(animated)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
