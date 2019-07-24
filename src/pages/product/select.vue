<template>
  <div class="select">
    <div class="select-container">
      <p class="l">选择</p>
      <p class="r">{{newData.skuText}}</p>
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

.select {
  background-color: #fff;
  margin-top: 10px;
  color: #333;
  &-container {
      line-height: 20px;
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
