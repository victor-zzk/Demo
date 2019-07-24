
<template>
  <div class="pullup-content" @click.stop ref="content">
    <div class="pullup-top">
      <slot name="top"></slot>
    </div>
    <scroll>
      <div class="pullup-center" ref="contant">
        <slot name="center"></slot>
      </div>
    </scroll>
    <transition name="down">
      <div class="down" v-if="down">
        <div class="down-word">已加入购物车</div>
      </div>
    </transition>
    <div class="nav">
      <div class="add-cart" v-if="buy" @click="sentToCart">加入购物车</div>
      <div class="buy-it" v-if="buy">立即购买</div>
      <div class="comfirm" v-if="!buy" @click.stop="pullDown">确定</div>
    </div>
  </div>
</template>
<script>
import scroll from "base/scroll";
export default {
  components: {
    scroll
  },
  props: {
    buy: {},
    down: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    pullDown() {
      this.$emit("pullDownStatus");
    },
    sentToCart() {
      this.$emit("sentToCart");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins"; //引入mixins文件

.pullup-content {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  .pullup-center {
    padding-bottom: 70px;
  }
}

.nav {
  position: absolute;
  z-index: 1500;
  bottom: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 50px;
  .add-cart,
  .buy-it {
    height: 100%;
    width: 50%;
    float: left;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 15px;
  }
  .add-cart {
    background-color: #ff9500;
  }
  .buy-it {
    background-color: #ff0036;
  }
  .comfirm {
    width: 100%;
    height: 100%;
    background-color: #ff0036;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 15px;
  }
}
.down {
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 120px;
  height: 60px;
  border-radius: 10px;
  z-index: 2000;
  background-color: rgba($color: #000000, $alpha: 0.7);
  position: fixed;
  margin-left: -60px;
  bottom: 10%;
  left: 50%;
}
.down-enter-active,
.down-leave-active {
  transition: all 0.3s;
}

.down-enter,
.down-leave-to {
  opacity: 0;
}
</style>
