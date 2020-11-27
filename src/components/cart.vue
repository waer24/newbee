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
              </van-checkbox-group>
            </div>
            <div class="img"><img src="" alt="" width="60" height="80" /></div>
            <div class="desc">
              <p class="title"></p>
              <div class="info">
                <span class="num"><i>￥</i>4243</span>
                <div class="btn-operator">
                  <van-button type="default">-</van-button>
                  <input type="number" aria-valuenow="4" aria-valuemin="1" />
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
          <van-checkbox name="a"></van-checkbox>
          <span class="allselect">全选</span>
        </div>
        <div class="ct">
          <span class="sum">合计:</span><i class="charc">￥</i>
          <p class="num">54234.00</p>
        </div>

        <van-button type="primary" color="#1baeae" round class="rt"
          >结算</van-button
        >
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
    .item {
      padding: 10px;
      .item-inner {
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
    }
  }
  .footer {
    position: relative;

// height: 120px;

    overflow: hidden;

    width: 100%;

    .total {
      position: fixed;
      bottom: 40px;

      display: flex;
      align-items: center;
      justify-content: space-around;

      width: 100%;
      .lf {
        display: flex;
        align-items: center;
        justify-content: center;
        .allselect {
          padding: 0 10px;
        }
      }
      .ct {
        display: flex;
        align-items: center;
        .charc {
          font-style: normal;

          padding-left: 10px;

          color: red;
        }
        .num {
          font-size: 18px;

          color: #ff6b01;
        }
      }
      .rt {
        width: 100px;
      }
    }
    .nav-wrap {
      position: fixed;
      bottom: 0rem;

      width: 100%;
      height: 36px;
      padding: 10px 0;
    }
  }
}

</style>
