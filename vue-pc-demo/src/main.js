import Vue from 'vue'
import App from './App.vue'
import router from './router'
require('./mock/index')

// if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
