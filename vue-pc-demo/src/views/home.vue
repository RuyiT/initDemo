<template>
  <div>
    <span @click="handleClick">home</span>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {};
  },
  methods: {
    handleClick() {
      console.log('home');
    },
  },
};
</script>

<style lang="less" scoped></style>
