<template>
  <div>
    <div @click="handleClick">请求数据</div>
    <div @click="handleClick2">请求数据2</div>
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
      adminService.addList(32).then(res => {
        console.log({ res })
      })
    },
  },
}
</script>

<style lang="less" scoped></style>
