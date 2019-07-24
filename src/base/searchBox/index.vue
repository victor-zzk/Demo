<template>
  <div class="mine-search-box-wrapper">
    <i class="iconfont icon-sousuo"></i>
    <div class="mine-search-box" v-if="fake">{{placeholder}}</div>
    <input
      class="mine-search-box"
      type="text"
      title="搜索框"
      ref="input"
      v-model="query"
      :placeholder="placeholder"
      v-if="!fake"
    />
    <i class="iconfont icon-guanbi" v-show="query" @click="reset"></i>
  </div>
</template>

<script>
  import { debounce } from '../../assets/js/util';

  export default {
    name: 'MeSearchBox',
    data() {
      return {
        query: ''
      };
    },

    props: {
      placeholder: {
        type: String,
        default: '点击输入搜索内容'
      },
      fake: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      focus() {
        this.$refs.input && this.$refs.input.focus();
      },
      clear() {
        this.query = '';
      },
      reset() {
        this.clear();
        this.focus();
      }
    },
    watch: {
      query: debounce(function () {
        this.$emit('query', this.query);
      })
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

$search-box-height: 30px;

.mine-search-box-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  height: $search-box-height;
  padding: 0 7px;
  background-color: #fff;
  border-radius: $search-box-height / 2;

}

.iconfont {
  color: $icon-color;
  font-size: $icon-font-size-sm;
  font-weight: bold;
}

.mine-search-box {
  flex: 1;
  background: none;
  border: none;
  margin: 0 6px;
  color: #666;
  line-height: 1.5;
  width: 100%;
}
</style>
