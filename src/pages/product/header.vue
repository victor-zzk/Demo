<template>
  <navbar class="header">
      <div class="iconfont icon-fanhui" slot="left" @click="goBack"></div>
      <div class="words" slot="center"></div>
      <div class="iconfont icon-gouwuche" slot="right" @click="goCart"> </div>
  </navbar>
</template>

<script>
  import navbar from 'base/navbar';
  export default {
    components: {
      navbar
    },
    methods:{
      goBack() {
        this.$router.back();
      },
      goCart(){
        this.$router.push({path:"/cart"})
      }
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.header {
  &.mine-navbar {
    z-index: $navbar-z-index;
    background-color:transparent;
    transition: background-color 0.5s;
  }

  &.header-transition {
    background-color: $header-bgc-translucent;
  }

  .iconfont {
    color: $icon-color-default;
    font-size: $icon-font-size;
    display: inline-block;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.3);
    border: 3px solid transparent;
    border-radius: 50%
  }
  .words{
    width: 100%;
    text-align: center;
    color: $icon-color-default;
  }
}
</style>
