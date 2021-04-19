<template>
  <div class="wrapper">
    <button class="add">
      <i class="el-icon el-icon-plus"></i>
      <div class="add_tips">
        点击这里，添加第一个<br />
        组织试试吧！
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'bbb',
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 200px;
  overflow-x: visible;
  overflow-y: auto;
}
.add {
  cursor: pointer;
  min-width: 36px;
  height: 36px;
  background-color: #ffffff;
  border-radius: 4px;
  border: solid 1px #dcdcdc;
  text-align: center;
  margin-left: 10px;
  position: relative;

  .add_tips {
    width: 190px;
    height: 105px;
    background-color: #ffffff;
    box-shadow: 0px 0px 20px 0px rgba(72, 75, 79, 0.2);
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(100%, -50%);
  }
}
</style>
