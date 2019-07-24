<template>
  <navbar class="header">
    <i class="iconfont icon-fanhui" slot="left" @click="goBack"></i>
    <div slot="center" class="searchbox">
      <searchbox :placeholder="searchBoxPlaceholder" @click.native="gotosearch" @query="Query"></searchbox>
    </div>
  </navbar>
</template>

<script>
  import navbar from 'base/navbar';
  import searchbox from 'base/searchBox';
  export default {
    data() {
      return {
        searchBoxPlaceholder: '开学季有礼，好货五折起'
      };
    },
    components: {
      navbar,
      searchbox
    },
    methods: {
      Query(query) {
        console.log(query);
        this.$emit('query', query);
      },
      gotosearch() {
        this.$router.push('/search');
      },
      goBack() {
        this.$router.back();
      }
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.header {
  .iconfont {
    color: $icon-color;
    font-size: $icon-font-size;
  }
  .searchbox {
    width: 100%;
  }
  .mine-search-box-wrapper{
      background-color: $bgc-theme
  }

}
</style>
