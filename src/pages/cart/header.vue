<template>
  <navbar>
    <div class="iconfont icon-fanhui" slot="left" @click="goBack"></div>
    <div class="words" slot="center">
      购物车
      <span></span>
    </div>
    <div slot="right" @click="deleteButton" class="del">{{words}}</div>
  </navbar>
</template>

<script>
import navbar from "base/navbar";
export default {
  data() {
    return {
      words: "管理"
    };
  },
  components: {
    navbar
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    deleteButton() {
      if (this.words == "管理") {
        this.words = "完成";
      } else if (this.words == "完成") {
        this.words = "管理";
      }
      this.$emit("deleteButton");
    }
  }
};
</script>

<style lang="scss" scoped>
.words {
  font-size: 18px;
}
.del {
  font-size: 13px;
}
</style>


