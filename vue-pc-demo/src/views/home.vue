<template>
  <div class="home">
    <div class="home-c">
      <div @click="handleClick">请求数据</div>
      <div @click="handleClick2">请求数据2</div>
      <div @click="handleTest" class="test">test</div>
      <hover></hover>
      <div class="bg">
        <div class="bg-1"></div>
        <div class="bg-2"></div>
      </div>
      <div class="animate__animated animate__bounce">animate</div>
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
function classDecorator(target) {
  target.hasDecorator = true
  return target
}

@classDecorator
class Button {
  onclick() {
    console.log('aaa')
    // 2300+5000+3000一共10300，这个钱我可能一会还不上你的，但是之后一定还你的，等我把同事的5000和网上借的钱不会逾期了再还你的了，预计的话是明年开始一个月还
  }
}
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
    handleTest() {
      console.log('button 是否被装饰了', Button.hasDecorator)
    },
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
  .home-c {
    display: flex;
    flex-direction: column;
    .test {
      align-self: center;
      margin: 20px 0;
      cursor: pointer;
      user-select: none;
    }
  }
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
