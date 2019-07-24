<template>
  <me-navbar class="header">
    <div slot="center" class="search">
      <searchbox
        :placeholder="searchBoxPlaceholder"
        @click.native="gotosearch"
        @query="getQuery"
        fake
      ></searchbox>
    </div>
    <i class="iconfont icon-xiaoxi" slot="right"></i>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import searchbox from 'base/searchBox';
  export default {
    data() {
      return {
        searchBoxPlaceholder: '开学季有礼，好货五折起'
      };
    },

    name: 'CategoryHeader',
    components: {
      MeNavbar,
      searchbox
    },
    methods: {
      getQuery(query) {
        console.log(query);
      },
      gotosearch() {
        this.$router.push('/search');
      }
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.header {
  &.mine-navbar {
    background-color: $header-bgc-translucent;
  }

  .iconfont {
    color: $icon-color-default;
    font-size: $icon-font-size;
  }
  .search{
    width:100%;
  }
}
</style>
