<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in list" :key="index"
      ><img :src="item.carouselUrl" alt="" width="100%"
    /></van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import './../common/style/mixin.scss';

.my-swipe .van-swipe-item {
  color: $fc;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: $primary;
}
</style>
