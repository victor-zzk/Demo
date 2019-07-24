<template>
  <div class="mine-navbar">
    <div class="mine-navbar-left">
      <slot name="left"></slot>
    </div>
    <div class="mine-navbar-center" v-if="$slots.center">
      <slot name="center"></slot>
    </div>
    <div class="mine-navbar-right" v-if="$slots.right">
      <slot name="right"></slot>
    </div>
    <h1 class="mine-navbar-titel" v-if="title">
      <div class="mine-navbar-text" v-text="title"></div>
    </h1>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.mine-navbar {
  @include flex-between();
  background-color: #fff;
  height: 50px;
  &-left {
    margin-left: 10px;

  }
  &-center {
    margin: 0 25px;
    flex-grow: 1;
    @include flex-center($direction: row);
  }
  &-right {
    margin-right: 10px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  &-titel {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 25%;
    right: 25%;

  }
  &-text {
    @include ellipsis();
    font-size: 18px;
    height: 50%;
    text-align: center;
    position: relative;
    top: 50%;
    margin-top: -12px
  }
}
</style>
