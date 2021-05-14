<template>
  <div class="box">
    <ul class="hover-tips">
      <li data-name="姨妈红"></li>
      <li data-name="基佬紫"></li>
      <li data-name="箩底橙"></li>
      <li data-name="姣婆蓝"></li>
      <li data-name="大粪青"></li>
      <li data-name="原谅绿"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.box {
  @color-list: {
    a: #f66;
    b: #66f;
    c: #f90;
    d: #09f;
    e: #9c3;
    f: #3c9;
  };
  .hover-tips {
    display: flex;
    justify-content: space-between;
    width: 200px;
    padding: 0;
    li {
      list-style: none;
      position: relative;
      padding: 2px;
      border: 2px solid transparent;
      border-radius: 100%;
      width: 24px;
      height: 24px;
      background-clip: content-box;
      cursor: pointer;
      transition: all 300ms;
      &::before,
      &::after {
        position: absolute;
        left: 50%;
        bottom: 100%;
        opacity: 0;
        transform: translate3d(0, -30px, 0);
        transition: all 300ms;
      }
      &::before {
        margin: 0 0 12px -35px;
        border-radius: 5px;
        width: 70px;
        height: 30px;
        background-color: rgba(#000, 0.5);
        line-height: 30px;
        text-align: center;
        color: #fff;
        content: attr(data-name);
      }
      &::after {
        margin-left: -6px;
        border: 6px solid transparent;
        border-top-color: rgba(#000, 0.5);
        width: 0;
        height: 0;
        content: '';
      }
      /**
      scss 的each使用方法
      */
      // @each $color in --color-list {
      //     $index: index(--color-list, $color);
      //     &:nth-child(#{$index}) {
      //         background-color: $color;
      //         &:hover {
      //             border-color: $color;
      //         }
      //     }
      // }

      /**
      less 的each使用方法
      https://www.jianshu.com/p/c7c210bd25e8
      */
      each(@color-list, {
        &:nth-child(@{index}) {
            background-color: @value;
            &:hover {
              border-color: @value;
            }
        }
      })
        &:hover {
        &::before,
        &::after {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
    }
  }
}
</style>
