<template>
  <div class="home">
    <header class="g-header-container">
      <homeheader :class="{'header-transition':isheadertransition}" ref="header"></homeheader>
    </header>

    <scroll
      :new_recommends="recommends"
      pullDown
      pullUp
      @pull-down="pullToRefresh"
      @pull-up="pullToLoadMore"
      @scroll-end="scrollEnd"
      @scroll="scroll"
      @pull-down-transition-end="pullDownTransitionEnd"
      ref="scroll"
    >
      <homeslider ref="slider"></homeslider>
      <homenav></homenav>
      <homerecommend @loaded="getRecommends" ref="recommend"></homerecommend>
    </scroll>

    <div class="g-backtop-container">
      <backtop :visible="isBackTopVisible" @backtop="backToTop"></backtop>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import homeheader from './header';
  import homeslider from './slider';
  import scroll from 'base/scroll';
  import homenav from './nav';
  import homerecommend from './recommend';
  import backtop from 'base/backtop';
  import { HEADER_TRANSITION_HEIGHT } from './config';

  export default {
    name: 'home',
    components: {
      scroll,
      homeheader,
      homeslider,
      homenav,
      homerecommend,
      backtop
    },
    data() {
      return {
        recommends: [],
        isBackTopVisible: false,
        isheadertransition: false
      };
    },
    methods: {
      getRecommends(recommends) {
        this.recommends = recommends;
      },
      pullToRefresh(end) {
        this.$refs.slider.update().then(end);
      },
      pullToLoadMore(end) {
        this.$refs.recommend
          .update()
          .then(end)
          .catch(err => {
            if (err) {
              console.log(err);
            }
            end();
        });
      },
      scrollEnd(translate, scroll, pulling) {
        if (!pulling) {
          this.changeHeaderStatus(translate);
        }
        this.isBackTopVisible = translate < 0 && -translate > scroll.height;
        console.log(this.isBackTopVisible, scroll.height);
      },
      backToTop() {
        this.$refs.scroll && this.$refs.scroll.scrollToTop();
      },
      changeHeaderStatus(translate) {
        if (translate > 0) {
          this.$refs.header.hide();
          return;
        }
        this.$refs.header.show();
        this.isheadertransition = -translate > HEADER_TRANSITION_HEIGHT;
      },
      scroll(translate) {
        this.changeHeaderStatus(translate);
      },
      pullDownTransitionEnd() {
        this.$refs.header.show();
      }

    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins"; //引入mixins文件

.home {
  background-color: $bgc-theme;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
