<template>
  <div>
    <div @click="handleClick">请求数据</div>
    <div @click="handleClick2">请求数据2</div>
    <iframe
      src="https://www.baidu.com"
      style="
        top: 500px;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        border: none;
      "
    >
    </iframe>
    <router-view></router-view>
  </div>
</template>

<script>
import * as adminService from '@/services/home.services'
export default {
  name: 'home',
  data() {
    return {}
  },
  methods: {
    handleClick() {
      console.log('home')
      adminService.getUserInfo(32).then(res => {
        console.log({ res })
      })
    },
    handleClick2() {
      console.log('home')
      adminService.addList({ a: 12 }).then(res => {
        console.log({ res })
      })
    },
  },
}
</script>

<style lang="less" scoped></style>
