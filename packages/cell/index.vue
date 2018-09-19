<template>
  <div @click="onClick" class="blm-cell" :class="[{'blm-cell--clickable':clickable || isLink,'blm-hairline': border, 'blm-hairline--top': topBorder}]">
    <slot name="icon">
      <span v-if="icon" class="blm-cell__left-icon iconfont" :class="icon"></span>
    </slot>

    <div class="blm-cell__title">
      <slot name="title">
        <span v-if="title" v-text="title"></span>
        <div v-if="label" v-text="label" class="blm-cell__label"></div>
      </slot>
    </div>

    <div v-if="value" class="blm-cell__value">
      <slot >
        <span v-text="value"></span>
      </slot>
    </div>
    <slot name="num"></slot>
    <div v-if="circular" class="blm-cell__value">
      <slot>
        <div class="blm-cell__circular" v-text="circular"></div>
      </slot>
    </div>

    <slot name="right-icon">
      <span v-if="isLink" class="iconfont icon-next blm-cell__right-icon"></span>
    </slot>

  </div>
</template>

<script>
import '@/styles/hairline.styl'
import RouterLink from '../../mixins/router-link'

export default {
  name: 'cell',
  mixins: [RouterLink],
  props: {
    icon: String,
    label: String,
    isLink: Boolean,
    clickable: Boolean,
    title: [String, Number],
    value: [String, Number],
    circular: [String, Number],
    border: {
      type: Boolean,
      default: true
    },
    topBorder: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
      this.routerLink()
    }
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">

.blm-cell
  display: flex;
  padding: 0.75rem 1.13rem;
  background-color: #ffffff;
  color: #333333;
  font-size: 0.88rem;
  &:not(:last-child)::after
    width: auto;
    left: 0;
    right: 0;
    transform: scale(1, .5);
    border-bottom-width: 1px;
  &__left-icon
    min-width: 1rem;
    font-size: 1.2rem;
    margin-right: 0.63rem;
    box-sizing border-box
  &__right-icon
    font-size: 1rem;
    margin-left: 0.63rem;
    color: #999
  &__title, &__value
    flex: 1;
  &__title
    line-height normal 
    margin: auto
  &__value
    // overflow: hidden;
    text-align: right;
    position: relative;
    vertical-align: middle;
    white-space nowrap
  &__circular
    width: 1.13rem
    height: 1.13rem
    background-color: #ED5565
    color: #ffffff
    border-radius: 50%
    font-size: 0.75rem
    padding: 0
    overflow hidden
    display inline-block
    line-height 1.5
    text-align center
    vertical-align middle
  &__label
    font-size: 0.75rem;
    color: #666666;
    line-height: 1.2;
    margin-top: 0.31rem
  &--clickable
    &:active
      background-color: #f1f1f1
  .item-icon
    margin-right: 2rem
    position: relative
    img 
      position: absolute
      top: 0
      bottom: 0
      margin: auto
      width: 1.4rem
      height: 1.4rem
      


</style>