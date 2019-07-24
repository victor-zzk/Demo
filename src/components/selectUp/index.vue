
<template>
  <pullup :buy="true" :down="down" @sentToCart="sentToCart" >
    <div class="title" slot="top">
      <img class="image" :src="this.image" />

      <div class="title-text">
        <p class="price" ref="price">￥{{priceText}}</p>
        <p class="quantity" ref="quantity">库存 {{quantity}}</p>
        <p class="category">{{kind}}</p>
      </div>
    </div>

    <div class="content" slot="center" v-if="newData.skuBase">
      <dl class="prop" v-for="(item ,index) in newData.skuBase.props" :key="index">
        <dt class="prop-title">{{item.name}}</dt>
        <dd
          class="prop-item"
          v-for="(j ,i) in item.values"
          :key="i"
          :class="{'addactive':j.isActive}"
          @click="getValuesVid(j.vid,item.pid,j.image)"
        >
          <img :src="j.image" class="prop-item-img" v-if="j.image" />
          {{j.name}}
        </dd>
      </dl>
      <div class="num">
        <div class="num-buy">购买数量</div>
        <div class="num-num">
          <button class="numl" :class="{'disabled':isDisabled}" ref="minusBut" @click="minusBut">-</button>
          <input class="numinput" type="number" :value="inpVal" ref="input" @blur="getinputvalue" />
          <button class="numr" @click="addBut">+</button>
        </div>
      </div>
      
    </div>
  </pullup>
</template>
<script>
import navbar from "base/navbar";
import pullup from "base/pullUP";

export default {
  data() {
    return {
      finalData: {
        shopStatus:false,
        price: undefined
      },
      kind: "请选择",
      kindArr: [],
      selectText: "",
      inpVal: 1,
      arrPP: [],
      isDisabled: false,
      isnum1: true,
      // skuInfo: {},
      active: -1,
      image: this.img[0],
      quantity: this.newData.skuCore.sku2info["0"].quantity,
      priceText: this.newData.skuCore.sku2info["0"].price.priceText,
      down:false
    };
  },
  components: {
    pullup,
    scroll,
    navbar
  },
  props: {
    newData: {
      type: Object
    },
    img: {
      type: Array
    },
    id: {}
  },
  mounted() {
    this.setarrPP();
    this.setNameArr();
  },
  methods: {
    setfinalData(image) {
      //将用户选择分类数据融合为一个对象，方便后调用
      this.finalData.title = this.newData.title;
      this.finalData.selectText = this.selectText;
      this.finalData.price = this.priceText;
      this.finalData.id = this.id;
      this.finalData.img = this.img[0] || image;
      this.finalData.num = this.inpVal;
      console.log(this.finalData);
    },

    sentToCart() {
      //将数据打包发送到公共数据
      for (let a in this.finalData) {
        if (this.finalData[a] == undefined) {
          return;
        }
      }
      this.$store.dispatch("inc", this.finalData);
      console.log(this.$store.state.data);
      this.down=true;
      setTimeout(() => {
        this.down=false
      }, 1000);
    },
    getinputvalue() {
      this.inpVal = this.$refs.input.value;
      this.finalData.num = this.inpVal;
      if (this.inpVal <= 1) {
        this.inpVal = 1;
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    },
    addBut() {
      this.inpVal++;
      this.finalData.num = this.inpVal;
    },
    minusBut() {
      this.inpVal--;
      this.finalData.num = this.inpVal;
      if (this.inpVal <= 1) {
        this.inpVal = 1;
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    },
    setarrPP() {
      let props = this.newData.skuBase.props;
      for (let i = 0; i < props.length; i++) {
        let pid = props[i].pid;
        let obj = {};
        obj[pid] = -1;
        this.arrPP.push(obj);
      }
    },
    changeImg(image) {
      if (image) {
        this.image = image;
      }
    },

    setNameArr() {
      let props = this.newData.skuBase.props;
      let propsLen = this.newData.skuBase.props.length;
      for (let index = 0; index < propsLen; index++) {
        // 将第一层分类名称设置为数组的键，然后由for循环顺序添加到kindArr数组中,方便后期添加为其添加值；

        let temporaryNameObj = {};
        temporaryNameObj[props[index].name] = undefined;
        this.kindArr.push(temporaryNameObj);
      }
      // 通过循环将数组中的对象.键取出，设置为标题处的内容
      let arr = [];
      for (let i = 0; i < this.kindArr.length; i++) {
        for (let key in this.kindArr[i]) {
          arr[i] = key;
        }
      }
      let str = arr.join("  ");
      this.kind = `请选择 : ${str}`;
      // console.log(str)
      // console.log(this.kindArr);
    },
    setItemsColor(myvid, mypid) {
      let props = this.newData.skuBase.props;
      let propsLen = this.newData.skuBase.props.length;
      for (let index = 0; index < propsLen; index++) {
        for (let i = 0; i < props[index].values.length; i++) {
          let valuesVid = props[index].values[i].vid;
          if (valuesVid == myvid) {
            for (let k = 0; k < props[index].values.length; k++) {
              props[index].values[k].isActive = false;
            }
            props[index].values[i].isActive = true;
            // console.log(props[index].values);
            // 将具体name值添加到this.kindObj对象中，方便后期使用：用作标题显示，用作购物车模块显示
            for (let j = 0; j < this.kindArr.length; j++) {
              if (props[index].name in this.kindArr[j]) {
                this.kindArr[j][props[index].name] =
                  props[index].values[i].name;
              }
            }
          }
        }
      }
      console.log(this.kindArr);
    },
    getValuesVid(vid, pid, image) {
      // let myPropPath = `${pid}:${vid}`;
      // console.log(myPropPath);
      // console.log(image);
      this.changeImg(image);
      for (let i = 0; i < this.arrPP.length; i++) {
        if (pid in this.arrPP[i]) {
          this.arrPP[i][pid] = vid;
        }
      }
      console.log(this.arrPP);
      this.setItemsColor(vid, pid);
      for (let i = 0; i < this.arrPP.length; i++) {
        for (let key in this.arrPP[i]) {
          if (this.arrPP[i][key] === -1) {
            console.log("还有选项没有选呢...");
            return;
          }
        }
      }
      let getarr = [];
      let getstr = "";
      for (let i = 0; i < this.arrPP.length; i++) {
        for (let key in this.arrPP[i]) {
          getarr[i] = `${key}:${this.arrPP[i][key]}`;
        }
      }
      getstr = getarr.join(";");
      console.log("所有选择都被选中了...");

      // console.log(getstr);
      let skus = this.newData.skuBase.skus;
      let skusLen = skus.length;
      let mySkuId;

      for (let i = 0; i < skusLen; i++) {
        if (skus[i].propPath === getstr) {
          mySkuId = skus[i].skuId;
          console.log("找到了，skuID是这个:" + mySkuId);
          break;
        }
      }
      let skuCore = this.newData.skuCore.sku2info;
      if (mySkuId in skuCore) {
        this.priceText = skuCore[mySkuId].price.priceText;
        this.quantity = skuCore[mySkuId].quantity;
      }

      // 设置头部选择标题 循环遍历kindArr，将内容转换成字符串
      let text = [];
      for (let i = 0; i < this.kindArr.length; i++) {
        for (let x in this.kindArr[i]) {
          text[i] = this.kindArr[i][x];
        }
      }

      this.selectText = text.join("  ");

      console.log("已经选中：" + this.selectText);
      this.kind = `已选择： ${this.selectText}`;

      this.setfinalData(image); //调用设置最终数据的函数
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/scss/mixins"; //引入mixins文件
.title {
  width: 100%;
  height: 100px;
  position: relative;
  padding: 10px;
  .image {
    position: absolute;
    top: -25px;
    border: 2px solid rgb(199, 193, 193);
    border-radius: 7px;
    display: inline-block;
    width: 100px;
    height: 100px;
  }
  &-text {
    width: 100%;
    height: 100%;
    padding-left: 115px;
    .price {
      font-size: 16px;
      color: #ff0036;
      line-height: 18px;
    }
    .quantity {
      font-size: 13px;
      color: #051b28;
      line-height: 18px;
      @include ellipsis();
    }
    .category {
      margin-right: 10px;
      font-size: 13px;
      color: #051b28;
      line-height: 15px;
      word-break: break-all;
      @include multiline-ellipsis($num: 2);
    }
  }
}
.content {
  width: 100%;
  padding: 10px 10px 70px 10px;
  .prop {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    &-title {
      line-height: 18px;
      font-size: 13px;
      color: #666;
      padding: 10px 0;
      width: 100%;
      border-top: 1px solid rgba(85, 85, 85, 0.103);
    }
    &-item {
      line-height: 18px;
      padding: 10px;
      margin: 0 8px 8px 0;
      background-color: #f5f5f5;
      border-radius: 10px;
      &-img {
        margin-right: 5px;
        width: 24px;
        height: 24px;
        border-radius: 5px;
        vertical-align: middle;
      }
    }
  }
  .num {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    font-size: 13px;
    color: #666;
    border-bottom: 1px solid rgba(85, 85, 85, 0.103);
    border-top: 1px solid rgba(85, 85, 85, 0.103);
    line-height: 18px;
    .numl,
    .numr {
      font-size: 20px;
      width: 34px;
      height: 34px;
      color: #000;
      border-radius: 5px;
    }
    .disabled {
      color: #bbbbbb;
      background-color: #f3f3f3;
    }
    .numinput {
      width: 43px;
      height: 34px;
      font-size: 20px;
      margin: 0 2px;
      border-radius: 6px;
      padding: 3px;
      background-color: #f5f5f5;
    }
  }
}
.addactive {
  color: #ff0036;
  border: 1px solid #ff0036;
}

</style>
