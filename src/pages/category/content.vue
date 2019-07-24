<template>
  <div class="content-wrapper">
    <div class="loading-container" v-if="isLoading">
      <div class="loading-wrapper">
        <loading></loading>
      </div>
    </div>
    <scroll ref="scroll" @scroll-end="scrollEnd">
      <div class="content">
        <div class="pic" v-if="content.banner">
          <a :href="content.banner.linkUrl" class="pic-link">
            <img :src="content.banner.picUrl" alt class="pic-img" />
          </a>
        </div>
        <div class="section" v-for="(section,index) in content.data" :key="index">
          <h4 class="section-title">{{section.name}}</h4>
          <ul class="section-list">
            <li class="section-item" v-for="(item,index2) in section.itemList" :key="index2">
              <a :href="item.linkUrl" class="section-link">
                <p class="section-pic" v-if="item.picUrl">
                  <img v-lazy="item.picUrl" class="section-img" />
                </p>
                <p class="section-name">{{item.name}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
    <div class="g-backtop-container">
      <backtop @backtop="backToTop" :visible="isBackTopVisible"></backtop>
    </div>
  </div>
</template>

<script>
  import loading from 'base/loading';
  import scroll from 'base/scroll';
  import backtop from 'base/backtop';
  import { getCategoryContent } from 'api/category';
  // import storage from 'assets/js/storage';
  // import {CATEGORY_CONTENT_KEY, CATEGORY_CONTENT_UPDATE_TIME_INTERVAL} from './config';

  export default {
    name: 'CategoryContent',
    components: {
      loading,
      scroll,
      backtop
    },
    data() {
      return {
        content: {},
        isLoading: false,
        isBackTopVisible: false
      };
    },
    props: {
      curId: {
        type: String,
        default: ''
      }
    },

    watch: {
      curId(id) {
        this.isLoading = true;
        this.getContent(id).then(() => {
          this.isLoading = false;
          this.backToTop(0);
        });
      }
    },
    methods: {
      getContent(id) {
        return getCategoryContent(id).then(data => {
          if (data) {
            this.content = data;
          }
        });
      },
      backToTop(speed) {
        this.$refs.scroll && this.$refs.scroll.scrollToTop(speed);
      },
      scrollEnd(translate, scroll) {
        this.isBackTopVisible = translate < 0 && -translate > scroll.height;
      /* console.log(this.isBackTopVisible,scroll.height) */
      }
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.content-wrapper {
  position: relative;
  height: 100%;
}

.loading-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: $category-popup-z-index;
  @include flex-center();
  width: 100%;
  height: 100%;
  /*background-color: $modal-bgc;*/

  .mine-loading {
    color: #fff;
    font-size: 14px;
  }
}
.loading-wrapper {
  width: 50%;
  padding: 30px 0;
  background-color: $modal-bgc;
  border-radius: 4px;
}

.content {
  padding: 10px;
}

.pic {
  margin-bottom: 12px;

  &-link {
    display: block;
  }

  &-img {
    width: 100%;
  }
}

.section {
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }

  &-title {
    height: 28px;
    line-height: 28px;
    color: #080808;
    font-weight: bold;
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 10px 10px 0;
  }

  &-item {
    width: (100% / 3);
  }

  &-link {
    display: block;
  }

  &-pic {
    position: relative;
    width: 80%;
    height: 94px;
    padding-bottom: 80%;
    margin: 0 auto;
  }

  &-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &-name {
    height: 36px;
    line-height: 36px;
    text-align: center;
    @include ellipsis();
  }
}

.g-backtop-container {
  bottom: 10px;
}
</style>
