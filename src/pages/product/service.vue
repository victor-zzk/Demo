<template>
  <div class="service">
    <div class="top" v-if="newData.consumerProtection.channel.logo">
      <img class="logo" :src="newData.consumerProtection.channel.logo" />
    </div>
    <div class="center">
      <div class="words">服务</div>
      <ul class="items">
        <li
          class="item"
          v-for="(item,index) in newData.consumerProtection.items"
          :key="index"
          v-if="index < 4"
        >{{item.title}}</li>
      </ul>
      <span class="icon">&gt;</span>
    </div>
    <div class="bottom" v-if="newData.consumerProtection.displayService.description">
      <div>
        <img class="logo" :src="newData.consumerProtection.displayService.icon" />
      </div>
      <div class="words">{{newData.consumerProtection.displayService.description}}</div>
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
.icon{
    font-family: "宋体";
    color: #999;
}
.service {
  margin-top: 10px;
  padding: 10px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  .top {
    width: 100%;
    margin-left: -10px;
    .logo {
      padding: 10px 0 5px 10px;
      width: 80px;
      height: 35px;
    }
  }
  .center {
      width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    margin-top: 10px;
    .words {
      color: #999;
    }
    .items {
      display: flex;
      margin-left: 15px;
      width: 85%;
    }
    .item {
      padding-left: 6px;
    }

    .item::before {
      content: "·";
      padding-right: 6px;
    }
    .item:first-child {
      padding-left: 0;
    }
    .item:first-child::before {
      content: "";
      padding-right: 0;
    }
  }
  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-top: 10px;
    .logo {
      width: 72px;
      height: 12px;
      margin-left: 40px;
    }
    .words {
      padding-left: 10px;
      color: #999;
    }
  }
}
</style>
