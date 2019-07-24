<template>
  <div class="presentation">
    <div class="presentation-price">
      <div class="new">￥{{newData.priceText}}</div>
      <div class="odd" v-if="newData.apiStackObj.priceText">
        {{newData.apiStackObj.priceTitle}}:
        <span>{{newData.apiStackObj.priceText}}</span>
      </div>
    </div>
    <div class="presentation-title">{{newData.title}}</div>
    <div class="presentation-soldcount differentColor">
      <div>{{newData.postage}}</div>
      <div>月销量：{{newData.vagueSellCount}}件</div>
      <div>{{newData.from}}</div>
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
  },
  created() {}
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
.presentation {
  padding: 0 10px;
  background-color: #fff;
  &-price {
    width: 100%;
    height: 60px;

    .odd {
      font-size: 12px;
      color: #999;
      margin-top: 5px;
      margin-left: 15px;
      text-decoration: line-through;
    }
    .new {
      font-size: 20px;
      color: #ff0036;
      line-height: 1.5;
    }
  }
  &-title {
    width: 100%;
    font-size: 14px;
    color: black;
    @include multiline-ellipsis($num: 3);
  }
  &-soldcount {
    width: 100%;
    padding: 12px 0;
    @include flex-between();
  }
}
</style>
