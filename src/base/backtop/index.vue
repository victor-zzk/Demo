<template>
  <transition name="mine-backtop">
    <a
      href="javascript:;"
      class="mine-backtop"
      v-show="visible"
      @click="backToTop" >
      <i class="iconfont icon-fanhuidingbu"></i>
    </a>
  </transition>
</template>

<script>
  export default {
    name: 'MeBacktop',
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      backToTop() {
        this.$emit('backtop');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .mine-backtop {
    overflow: hidden;
    @include flex-center();
    width: 43px;
    height: 43px;
    background-color: rgba(0, 0, 0, 0.329);
    border: none;
    border-radius: 50%;
    padding-top: 6px;

    .iconfont {
      color: #fff;
      font-size: 25px;

    }
  }

  .mine-backtop {
    &-enter-active,
    &-leave-active {
      transition: opacity 0.6s;
    }

    &-enter,
    &-leave-to {
      opacity: 0;
    }
  }
</style>
