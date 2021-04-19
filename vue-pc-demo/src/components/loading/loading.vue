
<!-- 自己写的loading -->
<style scoped>
.loading_wrap * {
  margin: 0;
  padding: 0;
}
.loading_wrap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2017;
  background-color: rgba(55, 55, 55, 0.6);
}
.loading_wrap .loading_conten {
  width: 100%;
  height: 100%;
  font-size: 0;
  text-align: center;
}
.loading_wrap .loading_conten::after {
  content: ' ';
  display: inline-block;
  height: 100%;
  width: 0;
  vertical-align: middle;
}
.loading_conten .loading_icon {
  width: 50px;
  height: 50px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
}
.box {
  display: inline-block;
}
.box .loading_text {
  font-size: 14px;
  color: #fff;
  margin-top: 5px;
}
.circular {
  width: 50px;
  height: 50px;
  animation: loading-rotate 2s linear infinite;
}
.path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: #fff;
  stroke-linecap: round;
}
@keyframes loading-rotate {
  100% {
    transform: rotate(1turn);
  }
}
@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
</style>
<template>
  <transition name="loading" @after-leave="handleAfterLeave">
    <div class="loading_wrap" v-show="show">
      <div class="loading_conten">
        <div class="box">
          <div class="loading_icon">
            <svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path" :style="setColor"></circle></svg>
          </div>
          <p class="loading_text" :style="setTextColor" v-if="text!=null">{{text}}</p>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'loading',
  data () {
    return {
      show: false,
      line: 10,
      lineColor: '#666',
      text: null,
      textColor: '#333'
    }
  },
  computed: {
    setColor: function () {
      return { stroke: this.lineColor }
    },
    setTextColor: function () {
      return { color: this.textColor }
    }
  },
  methods: {
    handleAfterLeave () {
      this.$emit('after-leave')
    }
  }
}
</script>
