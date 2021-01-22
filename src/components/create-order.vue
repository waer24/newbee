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
      <scroll :scroll-data="storeList" class="list-inner">
        <ul>
          <li class="item" v-for="item in storeList" :key="item.shopId">
            <div class="img">
              <img :src="item.img" alt="" width="60" height="80" />
            </div>
            <div class="desc">
              <p class="title">{{ item.name }}</p>
              <p class="quantity">
                X&nbsp;<span>{{ item.count }}</span>
              </p>
              <div class="info">
                <span class="num"><i class="charc">￥</i>{{ item.price }}</span>
              </div>
            </div>
          </li>
        </ul>
      </scroll>
    </div>
    <div class="bottom">
      <div class="recap">
        <span class="">商品金额</span>
        <span class="price">￥&nbsp;{{ sum }}</span>
      </div>
      <button class="btn" @click="getCreateOrder">
        生成订单
      </button>
    </div>
  </div>
</template>

<script>
import vHeader from "./../views/v-header";
import scroll from "./../views/scroll";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      name: "生成订单",
    };
  },
  computed: {
    ...mapGetters(["storeList", "sum"]),
  },
  methods: {
    getCreateOrder() {
      console.log("print--", this.storeList);
    },
  },
  components: {
    vHeader,
    scroll,
  },
};
</script>

<style lang="scss" scoped>
@import "./../common/style/variable.scss";
.order-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .panel {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    position: relative;
    .text {
      padding-right: 10px;
    }
    .icon {
      flex: 0 1 auto;
      padding: 10px;
    }
    &:before {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 2px;

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
      background-size: 70px;
      content: "";
    }
  }
  .list-wrap {
    padding: 10px;
    position: fixed;
    bottom: 80px;
    top: 130px;

    .list-inner {
      padding: 10px;
      position: relative;
      height: 100%;
      overflow: hidden;
      .item {
        padding-bottom: 15px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .img {
          padding-right: 10px;
        }
        .desc {
          position: relative;
          font-size: 14px;
          .title {
            margin: 0;
            padding-bottom: 5px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            width: 80%;
          }
          .quantity {
            position: absolute;
            right: 3px;
            top: 3px;
          }
          .info {
            color: $orange;
            .num {
              font-weight: bold;
              .charc {
                font-style: normal;
              }
            }
          }
        }
      }
    }
  }
  .bottom {
    padding: 10px;
    position: fixed;
    width: 100%;
    bottom: 0;
    box-sizing: border-box;
    background-color: $fc;
    .recap {
      font-size: 16px;
      padding-bottom: 8px;
      display: flex;
      justify-content: space-between;
      .price {
        color: $orange;
      }
    }
    .btn {
      background-color: #1baeae;
      font-size: 16px;
      color: $fc;
      width: 100%;
      padding: 8px;
      border: none;
    }
  }
}
</style>
