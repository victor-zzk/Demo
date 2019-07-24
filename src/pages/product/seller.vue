<template>
  <div class="seller">
    <div class="seller-title">
      <div class="shop-logo">
        <img class="shop-logo-img" :src="newData.seller.shopIcon" />
      </div>
      <div class="shop-info">
        <div class="shop-name">{{newData.seller.shopName}}</div>
        <div class="shop-title">
          <img class="shop-title-img" :src="newData.seller.creditLevelIcon" alt />
        </div>
      </div>
    </div>
    <ul class="seller-evaluates">
      <li class="item" v-for="(item,index) in newData.seller.evaluates" :key="index">
        <span>{{item.title}}</span>
        <b>
          {{item.score}}
          <i class="iconfont" :title="item.level" ref="icon"></i>
        </b>
      </li>
    </ul>
    <div class="seller-gotoshop">
      <a :href="newData.seller.taoShopUrl" class="seller-gotoshop-l">全部商品</a>
      <a :href="newData.seller.taoShopUrl" class="seller-gotoshop-r">进入店铺</a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        classObj: {
          'icon-shangsheng': false,
          'icon-xiajiang': false,
          'icon-jinzhi': false
        }
      };
    },
    mounted() {},

    methods: {},
    props: {
      newData: {
        type: Object
      }
    }
  };
</script>

<style lang="scss" scoped>
.iconfont {
  font-size: 14px;
}
.seller {
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  background-color: #fff;

  &-title {
    display: flex;
    width: 100%;
    .shop-logo {
      border: 1px solid rgba(153, 153, 153, 0);
      &-img {
        width: 54px;
        height: 54px;
      }
    }
    .shop-info {
      flex-grow: 1;
      padding: 5px 10px;
      .shop-name {
        font-size: 16px;
        color: #333;
      }
      .shop-title {
        margin: 10px 0 0 0;
        &-img {
          width: 32px;
        }
      }
    }
  }

  &-evaluates {
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: 12px;
    margin-bottom: 10px;
    color: #999;
    .item {
      flex-grow: 1;
    }
  }
  .seller-gotoshop {
    display: flex;
    justify-content: center;
    font-size: 13px;

    &-l,
    &-r {
      color: rgba(255, 0, 54, 0.8);
      width: 96px;
      height: 24px;
      border: 1px solid rgba(255, 0, 54, 0.8);
      text-align: center;
      line-height: 22px;
      border-radius: 12px;
    }
    &-r {
      margin-left: 10px;
    }
  }
}
</style>
