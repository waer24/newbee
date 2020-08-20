<template>
  <div class="home">
    <div class="font">
      <icon-svg icon-class="home" class="icon"></icon-svg>
    </div>
    <hr />
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-home" />
    </svg>
    <van-button type="primary">button</van-button>
  </div>
</template>

<script>
// import iconSvg from './../views/icon-svg/icon-svg';

export default {
  name: 'singleQuote',
  props: {
    msg: String,
  },
  components: {
    // iconSvg,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  color: red;
  font-size: 18px;
  .font {
    font-size: 20px;
  }
  .van-button {
    width: 80px;
    font-size: 18px; // todo uppercase
  }
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
