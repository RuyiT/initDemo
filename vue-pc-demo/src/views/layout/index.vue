<template>
  <div class="layout">
    <!-- <keep-alive :include="keepAliveList" :max="keepAliveMax"> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: 'layout',
  data() {
    return {
      // 需要缓存页面状态的组件
      keepAliveList: ['home'],
      // 最大缓存页面组件数量
      keepAliveMax: 1,
    };
  },
};
</script>

<style lang="less" scoped>
.layout {
  width: 100%;
  height: 100%;
}
</style>
