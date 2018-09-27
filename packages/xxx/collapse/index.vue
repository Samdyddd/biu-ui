<template>
  <div>
    <cell title="维修详情" @click="click">
      <span slot="right-icon" class="iconfont" :class="show ? 'icon-angle-down':'icon-angle-up'"></span>
    </cell>
    <div v-show="show">
      {{content}}
    </div>
  </div>
</template>

<script>

import cell from '../cell'

export default {
  // components:{collapseItem},
  name: 'BlmCollapse',
  components: {cell},
  props: {
    content: ''
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    click() {
      console.log('sssss')
      console.log(this.show)
      this.show = !this.show
    }
  }
}

</script>