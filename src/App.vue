<template>
  <div id="app" class="g-container">

    <div class="g-vivw-container">
      <router-view></router-view>
    </div>

    <div class="g-footer-container">
      <ctabbar></ctabbar>
    </div>

  </div>
</template>

<script>
// 引入组件
  import ctabbar from 'components/tabbar';

  export default {
    name: 'App',

    // 组件注册
    components: {
      ctabbar
    }
  };
</script>
