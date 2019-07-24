<template>
  <navbar class="header" v-show="visible">
    <i class="iconfont icon-saoyisao" slot="left"></i>
    <div slot="center" class="search">
      <searchbox
        :placeholder="searchBoxPlaceholder"
        @click.native="gotosearch"
        @query="getQuery"
        fake
      ></searchbox>
    </div>
    <i class="iconfont icon-xiaoxi" slot="right"></i>
  </navbar>
</template>

<script>
  import navbar from 'base/navbar';
  import searchbox from 'base/searchBox';

  export default {
    name: 'homeHeader',
    components: {
      navbar,
      searchbox
    },
    data() {
      return {
        visible: true,
        searchBoxPlaceholder: '开学季有礼，好货五折起'
      };
    },
    methods: {
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
      },
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
    background-color: transparent;
    transition: background-color 0.5s;
  }

  &.header-transition {
    background-color: $header-bgc-translucent;
  }

  .iconfont {
    color: $icon-color-default;
    font-size: $icon-font-size;
  }
  .search{
    width: 100%;
  }
}
</style>
