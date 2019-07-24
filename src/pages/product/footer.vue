<template>
  <div class="footbar">
    <div class="toshop">
      <a href>
        <i class="iconfont icon-dianpu"></i>
        <p>店铺</p>
      </a>
    </div>
    <div class="support">
      <a href>
        <i class="iconfont icon-kefu"></i>
        <p>客服</p>
      </a>
    </div>
    <div class="addfav">
      <a href>
        <i class="iconfont icon-shoucang"></i>
        <p>收藏</p>
      </a>
    </div>

    <div class="cart" @click="selectUp">加入购物车</div>
    <div class="buy">立即购买</div>
  </div>
</template>

<script>
  export default {
    methods: {
      selectUp() {
        this.$emit('selectUp');
      }
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins"; //引入mixins文件
a {
  display: block;
  padding: 2px;
}
.footbar {
  background-color: #fff;
  height: $tabbar-height;
  display: flex;
  justify-content: center;
  align-items: center;

  .toshop,
  .support,
  .addfav,
  .cart,
  .buy {
    height: 100%;
    @include flex-center($direction: row);
  }
  .addfav,.support,.toshop{
      i,p{
          color: #999;
      }
      p{
          margin-top: 4px;
      }

  }

  .toshop {
    flex-grow: 1;
  }
  .support {
    flex-grow: 1;
    i{
        color: skyblue;
    }
  }
  .addfav {
    flex-grow: 1;
  }
  .cart,
  .buy {
    flex-grow: 2;
    color: #fff;
    font-size: 15px;
  }
  .cart {
    background-color: #ff9500;
  }
  .buy {
    background-color: #ff0036;
  }
}
</style>
