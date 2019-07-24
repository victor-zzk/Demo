
<template>
  <pullup @pullDownStatus="pullDownStatus">
    <div class="content" slot="center">
      <h2 class="title">基本信息</h2>
      <ul v-for="(item,index) in newData.groupProps" :key="index" class="info">
        <li v-for="(i,j) in item" :key="j" class="info-item">
          <div class="item-j">{{j}}</div>
          <div class="item-i">{{i}}</div>
        </li>
      </ul>
    </div>
  </pullup>
</template>
<script>

  import pullup from 'base/pullUP';

  export default {
    components: {
      pullup
    },
    props: {
      newData: {
        type: Object
      }
    },
    methods: {
      pullDownStatus() {
        this.$emit('pullDownStatus');
      }
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins"; //引入mixins文件

.content {
  padding: 0 10px;
  .title {
    padding:15px 10px;
    color: #555;
    font-size: 14px;
    font-weight: bold;
  }
  .info{
      width: 100%;
      .info-item{
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(85, 85, 85, 0.103);

           .item-j{
               color: #888;
               width: 100px;
           }
           .item-i{
               color: #555;
               width: 70%;
               word-break: break-all;

           }
          .item-j,.item-i{
              padding: 13px 10px;
              font-size: 13px;
              line-height: 18px;
          }
      }
  }
}
</style>
