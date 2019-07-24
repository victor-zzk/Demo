<template>
  <div>

    <div class="product" v-if="haveData">
      <header class="g-header-container">
        <productheader></productheader>
      </header>
      <scroll>
        <div class="contant">
          <productslider :img="img"></productslider>

          <div>
            <productpresentation :newData="newData"></productpresentation>
          </div>

          <div>
            <productpromotion :newData="newData" v-if="newData.shopProm"></productpromotion>
          </div>

          <div>
            <productservice :newData="newData"></productservice>
          </div>

          <div @click="changeSelectStatus" v-if="this.newData.skuText">
            <!-- 插入**选择*组件 -->
            <productselect :newData="newData"></productselect>
          </div>
          <div @click="changeParameterStatus">
            <!-- 插入**参数*组件 -->
            <productparameter :newData="newData"></productparameter>
          </div>

          <div>
            <productevaluation :newData="newData"></productevaluation>
          </div>

          <div>
            <productseller :newData="newData"></productseller>
          </div>

          <div>
            <productgraphic :newData="newData"></productgraphic>
          </div>
        </div>
      </scroll>

      <div class="g-footer-container">
        <productfooter @selectUp="changeSelectStatus"></productfooter>
      </div>

      <!-- 遮罩 -->
      <transition name="shadow">
        <div class="pullup-shadow" @click="toggleShadow" v-if="shadow"></div>
      </transition>

      <transition name="up-menu">
        <!-- 选择上拉菜单 -->
        <div class="selectup" v-if="toggleSelect" ref="selectup">
          <selectup :newData="newData" :img="img" :id="id"></selectup>
        </div>
      </transition>

      <transition name="up-menu">
        <!-- 参数上拉菜单 -->
        <div class="selectup" v-if="toggleParameter">
          <parameterup :newData="newData" @pullDownStatus="changeParameterStatus"></parameterup>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>

import scroll from "base/scroll";
import productheader from "./header";
import productfooter from "./footer";
import productslider from "./slider";
/* import { HEADER_TRANSITION_HEIGHT } from './config'; */
import { getProductResult } from "../../api/product";

import productpresentation from "./presentation"; // 引入大标题价格基本信息
import productpromotion from "./promotion"; // 引入促销
import productselect from "./select"; // 引入选择
import productparameter from "./parameter"; // 引入参数

import productservice from "./service"; // 引入服务
import productevaluation from "./evaluation"; // 引入商品评价
import productseller from "./seller"; // 引入商家信息
import productgraphic from "./graphic"; // 引入图文详情

/* 上拉菜单引入 */
import selectup from "components/selectUp";
import parameterup from "./parameterup";

export default {
  name: "product",
  data() {
    return {
      haveData: false,
      newData: {}, // 装满了所有需要调用的数据
      aaa: false,
      shadow: false, // 阴影的布尔值
      toggleSelect: false, // **选择**类别组件的的布尔值
      toggle: false,
      toggleParameter: false, // **参数**类别组件的的布尔值

      Jdata: {},
      img: [],
      propsCut: "",
      id: this.$route.params.id,
      soldCount: this.$route.params.soldCount,
      apiStackObj: {},
      apiStack: []
    };
  },
  components: {
    selectup,
    parameterup,
    scroll,
    productheader,
    productfooter,
    productslider,
    productpresentation,
    productpromotion,
    productselect,
    productparameter,
    productservice,
    productevaluation,
    productseller,
    productgraphic,

  },

  created() {
    this.getDataAll();
  },
  methods: {
    toggleShadow() {
      // 改变遮罩层的布尔值
      this.shadow = !this.shadow;
      if (this.toggle) {
        this.toggle = false;
        this.$refs.selectup.style.transform = "translate3d(0, 105%, 0)";
      }
      if (this.toggleParameter) {
        this.toggleParameter = !this.toggleParameter;
      }
    },
    changeSelectStatus() {
      // 改变**选择**类别的布尔值
      if (this.toggleSelect) {
        this.$refs.selectup.style.transform = "translate3d(0, 0, 0)";
      }
      this.toggleSelect = true;
      this.shadow = !this.shadow;
      this.toggle = true;

      console.log(this.toggleSelect);
    },
    changeParameterStatus() {
      // 改变**参数**类别的布尔值
      this.toggleParameter = !this.toggleParameter;
      this.shadow = !this.shadow;
      console.log(this.toggleParameter);
    },

    update() {
      return this.getDataAll();
    },
    getDataAll() {
      console.log("当前ID   " + this.id);
      return getProductResult(this.id).then(data => {
        if (data) {
          this.dataAll = data;
          this.img = this.dataAll.data.item.images;

          if (this.dataAll.data.propsCut) {
            this.propsCut = this.dataAll.data.propsCut;
            this.propsCut = this.propsCut
              .split(" ")
              .slice(0, 2)
              .join(" ");
          }

          this.Jdata = data.data;
          this.apiStackObj = JSON.parse(data.data.apiStack[0].value);

          console.log(JSON.parse(data.data.apiStack[0].value));
          console.log(this.Jdata);

          // 整理API

          //* ********* */大标题价格基本信息*****************************
          this.newData.priceText =
            this.apiStackObj.price.price.priceText || undefined; // 商品价格
          this.newData.title = this.Jdata.item.title || undefined; // 商品标题
          this.newData.vagueSellCount =
            this.apiStackObj.item.vagueSellCount || undefined; // 月销量
          this.newData.postage = this.apiStackObj.delivery.postage || undefined; // 快递包邮
          this.newData.from = this.apiStackObj.delivery.from || undefined; // 发货地

          this.newData.apiStackObj = {}; // 定义原价对象···
          this.newData.apiStackObj.priceTitle =
            this.apiStackObj.price.newExtraPrices[0].priceTitle || undefined; // 原价标题  冒号前的内容
          this.newData.apiStackObj.priceText =
            this.apiStackObj.price.newExtraPrices[0].priceText || undefined; // 原价

          //* **********/选择，参数************************************
          this.newData.skuText = this.apiStackObj.item.skuText; // 选择
          this.newData.propsCut = this.propsCut; // 参数

          this.newData.skuBase = {}; // 获取选择类别下的详细分类
          this.newData.skuBase = this.apiStackObj.skuBase;
          this.newData.skuCore = {};
          this.newData.skuCore = this.apiStackObj.skuCore;

          // 为每个values添加isActive=false,方便后期调用
          let props = this.newData.skuBase.props;
          let propsLen = this.newData.skuBase.props.length;
          for (let index = 0; index < propsLen; index++) {
            for (let i = 0; i < props[index].values.length; i++) {
              props[index].values[i].isActive = false;
            }
          }

          this.newData.groupProps = {}; // 获取参数类别下的详细分类
          this.newData.groupProps = this.Jdata.props.groupProps[0].基本信息;

          //* ********* */促销******************************************
          this.newData.shopPromTitle =
            this.apiStackObj.price.shopPromTitle || undefined; // 促销标题

          this.newData.shopProm = []; // 定义促销数组···
          this.newData.shopProm = this.apiStackObj.price.shopProm || undefined;

          //* ************/服务**************************************
          this.newData.consumerProtection = {}; // 获取服务参数的所在的对象
          this.newData.consumerProtection = this.apiStackObj.consumerProtection;

          //* ***************/商品评价**********************************
          this.newData.rate = this.Jdata.rate; // 获取商品评价所在对象

          this.newData.vertical = {};
          this.newData.vertical = this.Jdata.vertical; // 获取问大家所在对象

          //* ************************ */商家信息***************************
          this.newData.seller = {}; // 获取店铺信息所在对象
          this.newData.seller = this.Jdata.seller;

          //* ******************** */图文详情*******************************
          this.newData.subtitle = this.Jdata.item.subtitle || undefined;
          this.newData.taobaoDescUrl =
            this.Jdata.item.taobaoDescUrl || undefined;

          this.newData.moduleDescUrl = // 获取图文json
            this.Jdata.item.moduleDescUrl || undefined;

          console.log(this.newData);
          console.log(this.newData.moduleDescUrl);
          setTimeout(() => {
            this.haveData = true;
            console.log("详情页数据都拿到了！！");
          },0);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.contant {
  padding-bottom: $tabbar-height;
}
.product {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: $product-z-index;
  width: 100%;
  height: 100%;
  background-color: $bgc-theme;
  transition: all 1s;
}
.pullup-shadow {
  transition: all 1s;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1300;
}
.selectup {
  width: 100%;
  height: 80%;
  position: fixed;
  bottom: 0;
  z-index: 1400;
  transition: all 0.3s;
}
.up-menu-enter-active,
.up-menu-leave-active {
  transition: all 0.3s;
}

.up-menu-enter,
.up-menu-leave-to {
  transform: translate3d(0, 100%, 0);
}
.shadow-enter-active,
.shadow-leave-active {
  transition: all 0.3s;
}

.shadow-enter,
.shadow-leave-to {
  opacity: 0;
}
</style>
