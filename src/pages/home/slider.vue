<template>
  <div class="slider-wrapper">
    <loading v-if="!sliders.length"></loading>
    <slider
      :direction="direction"
      :loop="loop"
      :interval="interval"
      :pagination="pagination"
      :data="sliders"
      v-else
    >
      <swiper-slide v-for="(item,index) in sliders" :key="index">
        <a :href="item.linkUrl" class="slider-link">
          <img :src="item.picUrl" class="slider-img" />
        </a>
      </swiper-slide>
    </slider>
  </div>
</template>
<script>
  import slider from 'base/slider';
  import { swiperSlide } from 'vue-awesome-swiper';
  import { sliderOptions } from './config';
  import { getHomeSlider } from '../../api/home';
  import loading from 'base/loading';

  export default {
    name: 'homeslider',
    data() {
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination,
        sliders: []
      };
    },
    components: {
      slider,
      swiperSlide,
      loading
    },
    created() {
      this.getSliders();
    },
    methods: {
      update() {
        return this.getSliders();
      },
      getSliders() {
        return getHomeSlider().then(data => {
          this.sliders = data;
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
.slider-wrapper {
  height: 183px;
}
.slider-img {
  width: 100%;
  height: 100%;
}
.slider-link {
  display: block;
  height: 100%;
}
</style>
