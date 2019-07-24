<template>
  <div class="mine-loading">
    <span class="mine-loading-indicator" v-if="indicator">
      <slot>
        <img src="./loading.gif" alt="loading" />
      </slot>
    </span>
    <slot name="text">
      <span class="mine-loading-text" v-if="loadingText">{{loadingText}}</span>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'loading',
    props: {
      indicator: {
        type: Boolean,
        default: true
      },
      text: {
        type: String,
        default: '努力加载中 >~<'
      }
    },
    data() {
      return {
        loadingText: this.text
      };
    },
    watch: {
      text(text) {
        this.loadingText = text;
      }
    },
    methods: {
      setText(text) {
        this.loadingText = text;
      }
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.mine-loading {
  display: flex;
  @include flex-center($direction: column);
  width: 100%;
  height: 100%;
  &-indicator ~ .mine-loading-text {
    margin-top: 5px;
  }
}
</style>
