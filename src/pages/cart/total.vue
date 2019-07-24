<template>
  <div class="total">
    <div class="all" @click="setectAll">
      <div class="ser" :class="{'activeAll':isactiveAll}"></div>
      <div class="text">全选</div>
    </div>
    <transition name="count">
      <div class="count" v-if="!deleteButtonStatus">
        <div class="count-num">合计:￥{{totalMoney}}</div>
        <div class="settlement">结算</div>
      </div>
    </transition>
    <transition name="deleteBut">
      <div class="deleteBut" v-if="deleteButtonStatus" @click="deleteSel">删除</div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeAll: this.isactiveAll
    };
  },
  props: {
    deleteButtonStatus: {
      type: Boolean,
      default: false
    },
    isactiveAll: {
      type: Boolean,
      default: false
    },
    totalMoney: {
      default: 0
    }
  },
  methods: {
    setectAll() {
      if (this.isactiveAll) {
        this.$emit("setectAllfalse");
      }
      if (!this.isactiveAll) {
        this.$emit("setectAlltrue");
        console.log(11);
      }
      this.isactiveAll = !this.isactiveAll;
    },
    deleteSel() {
      this.$emit("deleteSelect");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/scss/mixins"; //引入mixins文件
.total {
  z-index: 1300;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background: $bgc-theme;
  position: fixed;
  bottom: 50px;
  border: 1px solid rgb(228, 228, 228);
  border-radius: 15px 15px 0 0;
  .all {
    display: flex;
    align-items: center;
    padding: 10px;

    .ser {
      width: 20px;
      height: 20px;
      border: 2px solid rgb(184, 183, 183);
      border-radius: 50%;
      margin-right: 10px;

      transition: all 0.3s;
    }
    .activeAll {
      background-color: #ff5000;
      border: 1px solid rgb(184, 183, 183);
    }
  }
  .count {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .settlement {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 17px;
      width: 100px;
      height: 40px;
      background-color: #ff5000;
      border-radius: 15px;
      margin-left: 15px;
      position: relative;
      left: 0;
    }
  }
}
.deleteBut {
  width: 95px;
  height: 35px;
  position: absolute;
  right: 20px;
  background-color: #ff0036;
  color: #fff;
  font-size: 16px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 0 0 salmon;
  -webkit-animation: highlight 4s 1.5s infinite;
  animation: highlight 4s 0.5s infinite;
}
@-webkit-keyframes highlight {
  0% {
    -webkit-box-shadow: 0 0 0 0 salmon;
  }
  50% {
    -webkit-box-shadow: 0 0 10px 10px salmon;
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 salmon;
  }
}
@keyframes highlight {
  0% {
    box-shadow: 0 0 0 0 salmon;
  }
  50% {
    box-shadow: 0 0 10px 10px salmon;
  }
  100% {
    box-shadow: 0 0 0 0 salmon;
  }
}
.deleteBut-enter-active,
.deleteBut-leave-active {
  transition: all 0.3s;
}

.deleteBut-enter,
.deleteBut-leave-to {
  transform: translate3d(100%, 0, 0);
  opacity: 0;
}
.count-enter-active,
.count-leave-active {
  transition: all 0.5s;
}

.count-enter,
.count-leave-to {
  transform: translate3d(0, 100%, 0);
  opacity: 0;
}
</style>

