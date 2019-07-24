<template>
  <div class="slider-wrapper" ref="sliderwrapper" :style="{height:viewWidth+'px'}">
    <loading v-if="!img.length"></loading>
    <slider
      :direction="direction"
      :loop="loop"
      :interval="interval"
      :pagination="pagination"
      :data="img"
      v-else
    >
      <swiper-slide v-for="(item,index) in img" :key="index">

        <a href="#" class="slider-link">
          <img :src="item" class="slider-img" />
        </a>
      </swiper-slide>
    </slider>
  </div>
</template>
<script>
  import slider from 'base/slider';
  import { swiperSlide } from 'vue-awesome-swiper';
  import { sliderOptions } from './config';
  import loading from 'base/loading';

  export default {
    name: 'homeslider',
    data() {
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination,
        viewWidth: undefined
      };
    },
    props: {
      img: {
        type: Array
      }
    },
    components: {
      slider,
      swiperSlide,
      loading
    },
    created() {
      this.contviewWidth();
      window.addEventListener('resize', this.contviewWidth);
    },
    methods: {
      contviewWidth() {
        this.viewWidth =
          document.documentElement.clientWidth || window.innerWidth;
        console.log('屏幕宽度'+this.viewWidth);
      }
    }
  };
</script>

<style lang="scss" scoped>
.slider-img {
  width: 100%;
  height: 100%;
}
.slider-link {
  display: block;
  height: 100%;
}
</style>
