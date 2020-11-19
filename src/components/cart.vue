<template>
  <div class="cart-wrap">
    <v-header :title="name"></v-header>
    <div class="list">
      <ul>
        <li class="item">
          <div class="item-inner">
            <div class="checkbox">
              <van-checkbox-group v-model="result">
                <van-checkbox name="a" checked-color="#1baeae">aa</van-checkbox>
                <van-checkbox name="b" checked-color="#1baeae">bb</van-checkbox>
              </van-checkbox-group>
            </div>
            <div class="img"><img src="" alt="" /></div>
            <div class="desc">
              <p class="title"></p>
              <div class="info">
                <span class="num"><i>￥</i>4243</span>
                <div class="btn-operator">
                  <van-button type="default">-</van-button>
                  <input
                    type="number"
                    aria-valuenow="“4”"
                    aria-valuemin="“"
                    1”
                  />
                  <van-button type="default">+</van-button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <footer class="footer">
      <div class="total">
        <div class="lf">
          <van-checkbox name="a"></van-checkbox> <span>全选</span>
        </div>
        <div class="ct">
          <span class="total">合计</span><i>￥</i>
          <p>54234.00</p>
        </div>
        <div class="rt">
          <van-button type="primary">结算</van-button>
        </div>
      </div>
      <div class="nav-wrap">
        <v-nav></v-nav>
      </div>
    </footer>
  </div>
</template>

<script>
import vHeader from "./../views/v-header";
import vNav from "./../views/v-nav";

export default {
  data() {
    return {
      name: "购物车",
      result: ["a", "b"],
    };
  },
  created() {},

  mounted() {},

  computed: {},
  methods: {
    radio() {
      console.log(22);
    },
  },
  watch: {},

  components: { vHeader, vNav },
};
</script>
<style lang="scss" scoped>
.cart-wrap {
  position: fixed;

  overflow: hidden;

  width: 100%;
  height: 100%;
  .list {
    overflow: hidden;
  }
  .footer {
    position: fixed;
    bottom: 0;

    width: 100%;
    height: 50px;
  }
}

</style>
