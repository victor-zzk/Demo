<template>
  <div class="hot">
    <h4 class="hot-title">热门搜索</h4>
    <div class="loading-container" v-if="!hots.length">
      <loading></loading>
    </div>
    <ul class="hot-list" v-else>
      <li
        class="hot-item"
        v-for="(item,index) in hots"
        :key="index"
        @click="$_selectItem(item.hotWord)"
      >{{item.hotWord}}</li>
    </ul>
  </div>
</template>

<script>
  import loading from 'base/loading';
  import { getSearchHotKeyword } from 'api/search';
  import {searchMixin} from 'assets/js/mixins';

  export default {
    name: 'SearchHot',
    data() {
      return {
        hots: []
      };
    },
    components: {
      loading
    },
    mixins: [searchMixin],
    created() {
      this.getHotKeyWord().then(() => {
        this.$emit('loaded');
      });
    },
    methods: {
      getHotKeyWord() {
        return getSearchHotKeyword().then(data => {
          return new Promise(resolve => {
            if (data) {
              this.hots = data;
              resolve();
            }
          });
        });
      }

    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.hot {
  padding-left: 10px;
  background-color: #fff;
  border-bottom: 1px solid $border-color;
  margin-bottom: 10px;

  &-title {
    height: 34px;
    line-height: 34px;
    font-size: $font-size-l;
    font-weight: bold;
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
  }

  &-item {
    padding: 8px;
    background-color: #f0f2f5;
    border-radius: 4px;
    margin: 0 10px 10px 0;
    color: #686868;
  }
}

.loading-container {
  padding: 10px 0;
}
</style>
