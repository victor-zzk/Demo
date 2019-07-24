<template>
  <div class="evaluation">
    <div class="rate-title" v-if="newData.rate.totalCount">
      <p class="rate-title-l">商品评价({{newData.rate.totalCount}})</p>
      <p></p>
      <p class="rate-title-r">
        查看全部
        <i>&gt;</i>
      </p>
    </div>
    <ul class="keywords" v-if="newData.rate.keywords">
      <li
        class="item"
        v-for="(item,index) in newData.rate.keywords"
        :key="index"
      >{{item.word}}({{item.count}})</li>
    </ul>
    <div class="user">
      <div class="userIf">
        <p>
          <img class="headPic" :src="newData.rate.rateList[0].headPic" alt />
        </p>
        <p class="userName">{{newData.rate.rateList[0].userName}}</p>
      </div>

      <p class="contant">{{newData.rate.rateList[0].content}}</p>
      <div
        claas="daterate"
        id="daterate"
      >{{newData.rate.rateList[0].dateTime}} {{newData.rate.rateList[0].skuInfo}}</div>
    </div>
    <div class="askAll">
      <div class="askAll-title">
        <p class="askAll-title-l">{{newData.vertical.askAll.title}}</p>
        <p class="askAll-title-r">
          <a :href="newData.vertical.askAll.linkUrl">
            查看全部
            <i>&gt;</i>
          </a>
        </p>
      </div>
      <ul class="ask">
        <li class="ask-item" v-for="(j,i) in newData.vertical.askAll.model4XList" :key="i">
          <p class="prob">
            <img :src="j.askIcon" />
            <span>{{j.askText}}</span>
          </p>
          <p class="answ">{{j.answerCountText}}</p>
        </li>
      </ul>
    </div>

    <div class="nothing" v-if="!newData.rate.totalCount||newData.rate.totalCount<=0">暂无评价与回答</div>
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
.nothing {
  margin-left: 10px;
  color: #666;
  font-size: 13px;
}

.evaluation {
  padding: 10px;
  background-color: #fff;
  margin-top: 10px;
  .rate-title {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    margin: 6px;
    &-l {
      color: #666;
    }
    &-r {
      color: #ff0036;
      padding-right: 5px;
      i {
        font-family: "宋体";
      }
    }
  }
  .keywords {
    display: flex;
    flex-wrap: wrap;
    .item {
      padding: 6px 9px;
      margin: 6px 3px;
      border-radius: 26px;
      background-color: #ffeeee;
    }
  }
  .user {
    margin: 4px 6px;
    display: flex;
    flex-direction: column;

    .userIf {
      display: flex;
      flex-direction: row;
      align-items: center;
      .headPic {
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }
      .userName {
        padding-left: 8px;
      }
    }
    .contant {
      font-size: 13px;
      width: 95%;
      margin: 8px;
      color: #051b28;
      text-align: justify;
      word-break: break-all;
      line-height: 16px;
      @include multiline-ellipsis($num: 2);
    }
  }
  .ask {
    margin-top: 5px;
  }
  .askAll {
    display: flex;
    flex-direction: column;
    .askAll-title {
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      margin: 6px;
      &-l {
        color: #666;
      }
      &-r {
        a {
          color: #ff0036;
          padding-right: 5px;
        }
        i {
          font-family: "宋体";
        }
      }
    }
    .ask-item {
        font-size: 13px;
      display: flex;
      margin-top: 10px;
      margin-left: 5px;
      .prob {
        width: 83%;
        flex-grow: 1;
        @include ellipsis();
        color: #051b28;
        img {
          width: 14px;
          height: 14px;
        }
      }
      .answ {
        flex-grow: 1;
        color: #999;
      }
    }
  }
}

#daterate {
  color: #999;
  @include ellipsis();
  border-bottom: 1px solid rgba(153, 153, 153, 0.068);
  padding-bottom: 15px;
}
</style>
