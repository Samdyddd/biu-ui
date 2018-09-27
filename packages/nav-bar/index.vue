<template>
  <div :class="b({fixed}),{'blm-hairline': border}">
    <div :class="b('left')" @click="$emit('click-left')">
      <slot name="left">
        <span v-if="leftArrow" class="iconfont icon-back_white" @click="back"></span>
        <span v-if="leftText" v-text="leftText"></span>
      </slot>
    </div>

    <div :class="b('title')">
      <slot name="title">{{title}}</slot>
    </div>

    <div :class="b('right')" @click="$emit('click-right')">
      <slot name="right">
        <span v-if="rightText" v-text="rightText"></span>
      </slot>
    </div>

  </div>
</template>
<script>
// import '@/styles/hairline.styl'
export default {
  name: 'nav-bar',
  props: {
    title: String,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    leftIcon: String,
    border: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

// <style rel="stylesheet/stylus" lang="stylus">
// .blm-nav-bar
//   height: 2.75rem
//   position: relative
//   line-height: 2.75rem
//   background-color: #f7f7f7
//   text-align: center
//   &--fixed {
//     top: 0;
//     left: 0;
//     width: 100%;
//     position: fixed;
//   }
//   &::after
//     width: auto;
//     left: 0;
//     right: 0;
//     transform: scale(1, .5);
//     border-bottom-width: 1px;
//   .nav-title
//     max-width: 60%
//     font-size: 1rem
//     margin: 0 auto
//   .left-icon, .right-icon
//     font-size: 0.94rem
//     position: absolute
//     vertical-align: middle
//     bottom: 0
//     height: 2.75rem
//   .left-icon
//     left: 1.06rem
//   .right-icon
//     right: 1.06rem
// </style>