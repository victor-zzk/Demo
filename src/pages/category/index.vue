<template>
  <div class="category">
    <header class="g-header-container">
      <categoryheader></categoryheader>
    </header>
    <div class="g-content-container">
      <div class="sidebar">
        <categorytab @switch-tab="getCurrentId"></categorytab>
      </div>
      <div class="main">
        <categorycontent :curId="curId"></categorycontent>
      </div>
    </div>
  </div>
</template>

<script>
  import categoryheader from './header';
  import categorytab from './tab';
  import categorycontent from './content';

  export default {
    name: 'Category',
    components: {
      categoryheader,
      categorytab,
      categorycontent
    },
    data() {
      return {
        curId: ''
      };
    },
    methods: {
      getCurrentId(id) {
        this.curId = id;
      }
    }

  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

 .category {
    overflow:hidden;
    width:100%;
    height:100%;
    background-color: $bgc-theme;
  }

  .g-content-container {
    display: flex;
  }
  .sidebar {
    width: 80px;
    height: 100%;
  }
  .main {
    flex: 1;
    height: 100%;
  }
</style>
