import Mock from 'mockjs'
//npm install mockjs -D
import {
  getUserInfo,
  addList,
  getTableData,
  getBlogData,
} from './response/user'
const Random = Mock.Random

Mock.mock(/\/getUserInfo/, 'get', getUserInfo) // 正则的方式传参，效果同下
// Mock.mock(/^\/getUserInfo*/, 'get', getUserInfo) // 正则的方式传参，效果同下
Mock.mock(/\/getTableData/, 'get', getTableData) // 正则的方式传参，效果同下
Mock.mock(/\/getBlogData/, 'get', getBlogData) // 正则的方式传参，效果同下

Mock.mock(/home\/addList/, 'post', addList) // 正则的方式传参，效果同下
// Mock.mock('http://localhost:8081/api/home/addList', 'post', addList) // mock拦截

// 设置mock的响应时间
Mock.setup({
  timeout: 500, // 延迟500毫秒后返回结果
  // timeout: '100-1000' // 最快100毫秒返回结果，最慢1000毫秒返回结果
})

Random.extend({
  fruit() {
    const fruit = ['apple', 'peach', 'lemon']
    return this.pick(fruit)
  },
})
export default Mock
