<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
</template>

<script>
export default {};
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
