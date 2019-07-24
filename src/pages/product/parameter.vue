<template>
  <div class="parameter">

    <div class="parameter-container" v-if="newData.propsCut">
      <p class="l">参数</p>
      <p class="r">{{newData.propsCut}}. . .</p>
      <p class="icon">&gt;</p>
    </div>

  </div>
</template>

<script>

  export default {
    data() {
      return {};
    },
    props: {
      newData: {
        type: Object
      }
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.differentColor {
  color: #999;
}
.icon {
  font-family: "宋体";
  font-size: 14px;
  color: #999;
}

.parameter {
  line-height: 20px;
  background-color: #fff;
  color: #333;

  &-container {
    display: flex;
    padding: 10px;
    overflow: hidden;
  }
  .l {
    color: #999;
    @include ellipsis();
  }
  .r {
    width: 85%;
    margin-left: 15px;
    @include ellipsis();
  }
}
</style>
