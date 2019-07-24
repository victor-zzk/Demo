<template>
  <div>
    <ul v-if="data.length" class="content">
      <li v-for="(item,index) in this.data" :key="index" class="item">
        <div class="title">
          <div
            class="shop"
            :class="{'active':item.shopStatus}"
            @click="changeStatu(index,item.shopStatus)"
          ></div>
          <div class="set">编辑</div>
        </div>
        <div class="text">
          <div class="button"></div>

          <img class="img" :src="item.img" />

          <div class="word">
            <div class="name">{{item.title}}</div>
            <div class="selectWord">
              <div class="select" @click="select(item.id)">
                <span class="select-s">{{item.selectText}}</span>
              </div>
              <i class="iconfont icon-fanhui"></i>
            </div>

            <div class="price-num">
              <div class="price">￥{{item.price}}</div>

              <div class="num-num">购买数量：{{item.num}}</div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    };
  },
  components: {
    scroll
  },
  created() {
    this.data = this.$store.state.data;
    console.log(this.data);
  },
  watch: {
    data() {
      this.countMoney();
    }
  },

  methods: {
    changeIsactiveAll() {
      for (let j = 0; j < this.data.length; j++) {
        if (this.data[j].shopStatus == false) {
          let isactiveAll = false;
          this.$emit("changeIsactiveAll", isactiveAll);

          return;
        }
        let isactiveAll = true;
        this.$emit("changeIsactiveAll", isactiveAll);
      }
    },

    countMoney() {
      let totalMoney = 0;
      for (let m = 0; m < this.data.length; m++) {
        if (this.data[m].shopStatus) {
          totalMoney += this.data[m].num * this.data[m].price;
          this.$emit("countMoney", totalMoney);
        }
        if (!this.data[m].shopStatus) {
          this.$emit("countMoney", totalMoney);
        }
      }
    },

    changeStatu(i, status) {
      status = !status;
      this.data[i].shopStatus = status;
      this.$store.dispatch("upDateData", this.data);
      this.changeIsactiveAll();
      this.countMoney();
    },
    changeIsactiveAll() {
      for (let j = 0; j < this.data.length; j++) {
        if (this.data[j].shopStatus == false) {
          let isactiveAll = false;
          this.$emit("changeIsactiveAll", isactiveAll);
          return;
        }
        let isactiveAll = true;
        this.$emit("changeIsactiveAll", isactiveAll);
      }
    },
    setectAllfalse() {
      for (let i = 0; i < this.data.length; i++) {
        this.data[i].shopStatus = false;
        this.$store.dispatch("upDateData", this.data);
        this.changeIsactiveAll();
        this.countMoney();
      }
    },
    setectAlltrue() {
      for (let i = 0; i < this.data.length; i++) {
        this.data[i].shopStatus = true;
        this.$store.dispatch("upDateData", this.data);
        this.changeIsactiveAll();
        this.countMoney();
      }
    },
    deleteSelect() {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].shopStatus) {
          
          this.data.splice(i, 1);
          this.$store.dispatch("upDateData", this.data);
          console.log(this.data.splice(i, 0));
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.content {
  .item {
    width: 95%;
    height: 150px;
    margin: 10px auto;
    background-color: #fff;
    border-radius: 18px;
    padding: 10px;
    transition: all 2s;
    .title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .shop {
        margin-left: 10px;
        width: 23px;
        height: 23px;
        border: 2px solid rgb(216, 216, 216);
        border-radius: 50%;
        transition: all 0.3s;
      }
      .active {
        background-color: #ff5000;
        border: 1px solid rgb(216, 216, 216);
      }
      .set {
        margin-right: 15px;
      }
    }
    .text {
      word-break: break-all;
      display: flex;
      padding: 8px;

      .img {
        margin-right: 10px;
        display: block;
        border: 2px solid rgb(197, 193, 193);
        border-radius: 5px;
        width: 80px;
        height: 80px;
      }
      .word {
        width: 70%;
        .name {
          width: 100%;
          font-size: 13px;
          @include multiline-ellipsis($num: 2);
          line-height: 17px;
        }
        .selectWord {
          display: flex;
          justify-content: left;

          align-items: center;

          .select {
            @include ellipsis();
            line-height: 14px;
            display: inline;
            .select-s {
              background-color: rgb(238, 237, 237);
              color: rgb(161, 161, 161);
            }
          }
          .icon-fanhui {
            margin-top: 6px;
            display: block;
            background-color: rgb(238, 237, 237);
            font-size: 14px;
            color: rgb(190, 190, 190);
          }
        }
      }
      .price-num {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;

        .price {
          font-size: 16px;
          color: #ff0036;
        }
      }
    }
  }
}
</style>


