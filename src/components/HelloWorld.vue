<template>
  <div class="home">
    yes
    <p>
      darcy
    </p>
    <van-button type="primary">默认按钮</van-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  color: red;
  font-size: 18px;
  .van-button {
    width: 80px;
    font-size: 18px; // todo uppercase
  }
}
</style>
