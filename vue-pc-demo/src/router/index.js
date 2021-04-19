import Vue from 'vue';
import Router from 'vue-router';
import routes from './routerMap'; // 路由的配置
import appConfig from '@/config/env.conf';
import VueRouter from 'vue-router';
// import store from '@/store'
// import { MessageBox } from 'element-ui'

Vue.use(Router);

console.log(VueRouter.prototype);
// 处理NavigationDuplicated异常
// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err);
// }

// const originalReplace = VueRouter.prototype.replace
// VueRouter.prototype.replace = function repalce(location, onResolve, onReject) {
//   if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
//   return originalReplace.call(this, location).catch(err => err)
// }

const router = new Router({
  mode: 'history',
  base: appConfig.webBaseURL,
  routes,
});

export default router;
