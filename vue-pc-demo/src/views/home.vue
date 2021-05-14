<template>
  <div class="home">
    <div>
      <div @click="handleClick">请求数据</div>
      <div @click="handleClick2">请求数据2</div>
      <hover></hover>
      <div class="bg">
        <div class="bg-1"></div>
        <div class="bg-2"></div>
      </div>
      <i-login></i-login>
      <i-rview></i-rview>
      <i-srcoll></i-srcoll>
      <router-view></router-view>
    </div>

    <!-- <iframe
      src="https://www.baidu.com"
      style="
        top: 0;
        left: 800px;
        bottom: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        border: none;
      "
    >
    </iframe> -->
  </div>
</template>

<script>
import * as adminService from '@/services/home.services'
import hover from './cssviews/hover.vue'
import iLogin from './cssviews/login'
import iRview from './cssviews/rview'
import iSrcoll from './cssviews/srcoll'
export default {
  name: 'home',
  data() {
    return {}
  },
  components: {
    hover,
    iLogin,
    iRview,
    iSrcoll,
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

<style lang="less" scoped>
@bg-1: 'https://static.yangzw.vip/codepen/ab-1.jpg';
@bg-2: 'https://static.yangzw.vip/codepen/ab-2.jpg';
@bg-3: 'https://static.yangzw.vip/codepen/mountain.jpg';
@bg-4: 'https://static.yangzw.vip/codepen/logo.svg';
.home {
  display: flex;
}
.bg {
  width: 100%;
  height: 300px;
  display: flex;
  .bg-1 {
    width: 300px;
    height: 200px;
    background-color: #3c9;
    background-image: url(@bg-1), url(@bg-2);
    background-repeat: no-repeat, no-repeat;
    background-position: left, right;
    background-size: auto 200px, auto 200px;
  }
  .bg-2 {
    margin-left: 20px;
    width: 300px;
    height: 200px;
    background-image: url(@bg-4), url(@bg-3);
    background-repeat: repeat, no-repeat;
    background-position: left, center;
    background-size: auto 80px, auto 200px;
  }
}
</style>
