<template>
  <div class="blm-grade">
    <div class="blm-grade__rate">
      <button
        v-for="(item, index) in btnOptions" :key="index"
        :class="item.value === count? 'active': ''"
        @click="count = item.value"
      >
        {{item.label}}
      </button>
    </div>
    <div class="blm-grade__accept">
      <button @click="accept(id)">验收</button>
    </div>
    
  </div>

</template>

<script>
const btnOptions = [
  {label: '非常满意', value: 1},
  {label: '满意', value: 2},
  {label: '不满意', value: 3}
]
export default {
  name: 'BlmGrade',
  data () {
    return {
      count: 1,
      btnOptions
    }
  },
  props: {
    id: ''
  },
  methods: {
    accept(id) {
      // 发送id count
      console.log(id, this.count)
    }
  }
}

</script>

<style lang="stylus" rel="stylussheet/stylue">
.blm-grade
  line-height 3.13rem
  .blm-grade__accept, .blm-grade__rate
    display inline-block
  button 
    border-radius 0.25rem
    padding: 0.25rem 0
    background-color #ffffff
  .blm-grade__rate
    button 
      border: 0.06rem solid #999
      font-size: 0.75rem
      color: #999999
      padding: 0.25rem 0.63rem
      &:not(:first-child)
        margin-left: 0.63rem
    .active
      border-color #666
      color: #000
  .blm-grade__accept
    float right
    button
      border: none 
      outline none
      color: #ffffff
      background-color #0D65D8
      font-size: 0.88rem
      padding: 0.25rem 1.38rem

    



</style>