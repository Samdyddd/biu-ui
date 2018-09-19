<template>
  <button type="button" class="no-btn" :disabled="disabled || time > 0">
    {{ text }}
  </button>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      time: 0
    };
  },
  props: {
    second: {
      type: Number,
      default: 60
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    run: function() {
      this.time = this.second;
      this.timer();
    },
    timer: function() {
      if (this.time > 0) {
        this.time--;
        setTimeout(this.timer, 1000);
      }
    },
    stop: function() {
      this.time = 0
    }
  },
  computed: {
    text: function() {
      return this.time > 0 ? this.time + "s后再获取" : "获取验证码";
    }
  }
};
</script>

<style>
.no-btn{
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
}
.no-btn:active{
  color: rgb(248, 4, 4)
}

</style>