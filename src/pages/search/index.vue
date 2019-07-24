<template>
  <transition name="search" >
    <div class="search1">
      <header class="g-header-container">
        <searchheader @query="getQuery"></searchheader>
      </header>
      <div class="g-content-container">
        <scroll>
          <searchhot v-show="!query"></searchhot>
          <searchhistory @show-confirm="showConfirm" ref="history" v-show="!query" ></searchhistory>
          <searchresult v-show="query" :query="query"></searchresult>
        </scroll>
      </div>
      <confirm msg="确定要清空吗" ref="confirm" @confirm="clearAll"></confirm>
    </div>
  </transition>
</template>

<script>
  import searchheader from './header';
  import scroll from 'base/scroll';
  import confirm from 'base/confirm';
  import searchhot from './hot';
  import searchhistory from './history';
  import searchresult from './result';
  export default {
    data() {
      return {
        query: ''
      };
    },
    components: {
      searchheader,
      scroll,
      confirm,
      searchhot,
      searchhistory,
      searchresult
    },
    methods: {
      getQuery(query) {
        this.query = query;
      },
      showConfirm() {
        this.$refs.confirm.show();
      },
      clearAll() {
        this.$refs.history.clear();
        this.$refs.history.update();
      }
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.search1 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: $search-z-index;
  background-color: $bgc-theme;
}

.search-enter-active,
.search-leave-active {
  transition: all 0.5s;
}

.search-enter,
.search-leave-to {
  transform: translate3d(100%, 0, 0);
}

</style>
