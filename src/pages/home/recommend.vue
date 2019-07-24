<template>
  <div class="recommend">
    <h2 class="recommend-title">热卖推荐</h2>
    <div class="loading-container" v-if="!recommends.length">
      <loading></loading>
    </div>

    <ul class="recommend-list" v-else>
      <li class="recommend-item" v-for="(item,index) in recommends" :key="index">
        <router-link
          class="recommend-link"
          :to="{name: 'home-product', params: {id: item.baseinfo.itemId}}"
        >
          <p class="recommend-pic">
            <img class="recommend-img" v-lazy="item.baseinfo.picUrlNew" />
          </p>
          <p class="recommend-name">{{item.name.shortName}}</p>
          <p class="recommend-origPrice">
            <del>¥{{item.price.origPrice}}</del>
          </p>
          <p class="recommend-info">
            <span class="recommend-price">
              ¥
              <strong class="recommend-price-num">{{item.price.actPrice}}</strong>
            </span>
            <span class="recommend-count">{{item.remind.soldCount}}件已售</span>
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { getHomeRecommend } from 'api/home';
  import loading from 'base/loading';

  export default {
    name: 'homerecommed',

    data() {
      return {
        recommends: [],
        curpage: 1,
        totalPage: 20
      };
    },

    components: {
      loading
    },

    created() {
      this.getRecommend();
    },

    methods: {
      update() {
        return this.getRecommend();
      },
      getRecommend() {
        if (this.curpage > this.totalPage) {
          return Promise.reject(new Error('没有更多了'));
        } else {
          return getHomeRecommend(this.curpage).then(data => {
            return new Promise(resolve => {
              if (data) {
                this.curpage++;
                this.totalPage = this.totalPage;
                this.recommends = this.recommends.concat(data.itemList);
                this.$emit('loaded', this.recommends);
                resolve();
              }
            });
          });
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.recommend {
  &-title {
    position: relative;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: $font-size-l;
    text-align: center;

    &:before,
    &:after {
      position: absolute;
      content: "";
      top: 50%;
      width: 40%;
      height: 1px;
      background-color: #ddd;
    }
    &:after {
      right: 0;
    }
    &:before {
      left: 0;
    }
  }
  &-list {
    @include flex-between();
    flex-wrap: wrap;
  }
  &-item {
    width: 49%;
    background-color: #fff;
    margin-bottom: 6px;
  }
  &-pic {
    position: relative;
    width: 100%;
    padding-top: 100%;
    margin-bottom: 5px;
  }
  &-img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &-name {
    height: 36px;
    padding: 0 5px;
    margin-bottom: 8px;
    line-height: 1.5;
    @include multiline-ellipsis();
  }
  &-origPrice {
    padding: 0 5px;
    margin-bottom: 8px;
    color: rgb(163, 162, 162);
  }
  &-info {
    @include flex-between();
    padding: 0 5px;
    margin-bottom: 8px;
  }

  &-price {
    color: #e61414;
  }

  &-price-num {
    font-size: 20px;
  }

  &-count {
    color: #999;
  }
}

.loading-container {
  padding-top: 50px;
}
</style>
