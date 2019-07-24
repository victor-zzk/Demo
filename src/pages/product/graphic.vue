<template>
  <div class="graphic">
    <div class="graphic-title">
      <div class="cell"></div>
      <div class="txt">详情</div>
      <div class="cell"></div>
    </div>
    <div class="graphic-subtitle">
      <h3 class="subtitle-text">"{{newData.subtitle}}"</h3>
    </div>
    <div class="box">
      <div class="box-line"></div>
    </div>

    <div class="graphic-but">
      <a class="text" :href="newData.taobaoDescUrl">点击查看详情</a>
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
    methods: {}
  };
</script>

<style lang="scss" scoped>
.graphic {
  width: 100%;
  &-title {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 12px 0;
    .cell {
      width: 53px;
      height: 1px;
      border-bottom: 1px solid #999;
      margin-top: 5px;
    }
    .txt {
      margin: 0 15px;
      color: #999;
    }
  }
  &-subtitle {
    background-color: #fff;
    width: 100%;
    text-align: center;
    font-size: 16px;
    padding: 15px;

    box-shadow: 0px -9px 20px -15px #999;
  }
  .box {
    width: 100%;
    height: 15px;
    background-color: #fff;

    &-line {
      width: 80%;
      height: 2px;
      border-bottom: 1px inset rgba(153, 153, 153, 0.123);
      margin: 0 auto;
    }
  }
  &-but {
    width: 100%;
    padding: 10px;

    .text {

     display: block;
     border-radius: 10px;
     color: #fff;
     font-size: 16px;
     text-align: center;
     line-height: 40px;

      background: rgba(255, 0, 54, 0.8);
      width: 100%;
      height: 40px;

    }
  }
}
</style>
