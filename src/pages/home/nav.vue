<template>
  <ul class="nav">
    <li class="nav-item" v-for="(item,index) in navs" :key="index">
      <a :href="item.linkUrl" class="nav-link">
        <img :src="item.picUrl" class="nav-pic">
        <span >{{item.text}}</span>
      </a>
    </li>
  </ul>
</template>

<script>
  import { navItems } from './config';
  export default {
    data() {
      return {
        navs: navItems
      };
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.nav{
    @include flex-center($direction:row);
    flex-wrap: wrap;
    padding-top: 10px;
    background-color: #fff;
}
.nav-link{
    @include flex-center($direction:column)
}
.nav-item{
    width: 20%;
    margin-bottom: 18px;
}
.nav-pic{
width: 60%;
margin-bottom: 8px;
}
</style>
