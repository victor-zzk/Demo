/* 促销 */
<template>
  <div class="promotion">
    <div class="title">{{newData.shopPromTitle}}</div>
    <div class="content">
      <div class="iconText">{{newData.shopProm[0].iconText}}</div>
      <div class="titleText">{{newData.shopProm[0].title}}</div>
    </div>
    <p class="icon">&gt;</p>
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

.promotion {
  width: 100%;
  margin: 10px 0;
  background-color: #fff;
  padding: 10px;
  display: flex;
  .title {
    color: #999;
  }
  .content {
    margin-left: 15px;
    width: 85%;
    display: flex;
    @include ellipsis();
    .iconText {
      margin-right: 5px;
      background-color: #fff5f7;
      color: #ff0036;
    }
    .titleText {
    }
  }
}
</style>
