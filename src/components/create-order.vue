<template>
  <div class="order-wrap">
    <v-header :title="name"> </v-header>
    <div class="panel">
      <div class="text">
        <div>
          <span class="name">darcy</span>
          <span class="phone">18513457845</span>
        </div>

        <p class="address">
          广东省 深圳市 宝安区 西乡大道新湖路坪洲轻铁西7巷9号
        </p>
      </div>
      <div class="icon">
        <i class="iconfont iconright"></i>
      </div>
    </div>
    <div class="list-wrap">
      <ul>
        <li class="item">
          <div class="item-inner">
            <div class="img">
              <img src="" alt="" width="60" height="80" />
            </div>
            <div class="desc">
              <p class="title">HUAWEI Mate 40 Pro 全网通5G手机 8</p>
              <p class="quantity">X&nbsp;<span>3</span></p>
              <div class="info">
                <span class="num"><i class="charc">￥</i>7833</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <div class="recap">
        <span class="">商品金额</span>
        <span class="">￥&nbsp;34222</span>
      </div>
      <button class="btn">
        生成订单
      </button>
    </div>
  </div>
</template>

<script>
import VHeader from "../views/v-header.vue";
import vHeader from "./../views/v-header";

export default {
  data() {
    return {
      name: "生成订单",
    };
  },
  components: {
    vHeader,
  },
};
</script>

<style lang="scss" scoped>
.order-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  .panel {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;

    .text {
      padding-right: 10px;
    }
    .icon {
      flex: 0 1 auto;
    }
    &:before {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 0.05333rem;

      background: repeating-linear-gradient(
        135deg,
        #ff6c6c,
        #ff6c6c 20%,
        transparent 0,
        transparent 25%,
        #1989fa 0,
        #1989fa 45%,
        transparent 0,
        transparent 50%
      );
      background-size: 2.13333rem;
      content: "";
    }
  }
}
</style>
