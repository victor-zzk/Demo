<template>
  <div class="cart">
    <div>
      <cartHeader @deleteButton="deleteButton"></cartHeader>
    </div>
    <scroll>
      <div>
        <cartContainer
          @changeIsactiveAll="changeIsactiveAll"
          @countMoney="countMoney"
          ref="container"
        ></cartContainer>
      </div>
    </scroll>
    <confirm ref="confirm" @confirm="deleteSelect"></confirm>
    <div>
      <cartotal
        :totalMoney="totalMoney"
        :deleteButtonStatus="deleteButtonStatus"
        :isactiveAll="isactiveAll"
        @setectAllfalse="setectAllfalse"
        @setectAlltrue="setectAlltrue"
        @deleteSelect="showConfirm"
      ></cartotal>
    </div>
  </div>
</template>

<script>
import confirm from "base/confirm";
import cartHeader from "./header";
import cartContainer from "./container";
import scroll from "base/scroll";

import cartotal from "./total";

export default {
  data() {
    return {
      totalMoney: 0,
      deleteButtonStatus: false,
      isactiveAll: false
    };
  },
  components: {
    cartHeader,
    cartContainer,
    scroll,
    cartotal,
    confirm
  },
  methods: {
    deleteButton() {
      this.deleteButtonStatus = !this.deleteButtonStatus;
    },
    changeIsactiveAll(active) {
      this.isactiveAll = active;
    },
    setectAllfalse() {
      this.$refs.container.setectAllfalse();
    },
    setectAlltrue() {
      this.$refs.container.setectAlltrue();
    },
    countMoney(totalMoney) {
      this.totalMoney = totalMoney.toFixed(2);
    },
    showConfirm() {
      this.$refs.confirm.show();
    },
    deleteSelect() {
      this.$refs.container.deleteSelect();
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
}
</style>
