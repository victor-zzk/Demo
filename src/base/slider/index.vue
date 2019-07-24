<template>
  <swiper :options="swiperOption" :key="keyId">
    <slot></slot>
    <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
  import { swiper } from 'vue-awesome-swiper';
  export default {
    name: 'homeslider',
    components: {
      swiper
    },
    props: {
      // 参数的传递
      direction: {
        // 滑动方向设置，水平或者垂直，默认水平
        type: String,
        default: 'horizontal',
        validator(value) {
          // 验证是否是"horizontal"水平,"vertical"垂直之一
          return ['horizontal', 'vertical'].indexOf(value) > -1;
        }
      },
      interval: {
        // 轮播速度设置，默认3000
        type: Number,
        default: 3000,
        validator(value) {
          // 验证数字是否大于0
          return value >= 0;
        }
      },
      loop: {
        // 设置自动循环
        type: Boolean,
        default: true
      },
      pagination: {
        // 设置分页器是否有
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        keyId: Math.random(),
        swiperOption: {
          watchOverflow: true, // 如果只有一张图片，轮播图失效
          direction: this.direction,
          autoplay: this.interval
            ? {
              delay: this.interval,
              disableOnInteraction: false // 如果有交互行为，则停止自动轮播
            }
            : false,
          slidesPerView: 1, // 设置slider容器能够同时显示的slides数量
          loop: this.loop,
          pagination: {
            el: this.pagination ? '.swiper-pagination' : null
          }
        }
      };
    },
    watch: {
      data(newData) {
        if (newData.length === 0) {
          return;
        }
        this.keyId = Math.random();
      }
    }
  };
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
</style>
