<template>
  <div class="detail-wrap">
    <v-header :title="name"></v-header>
    <div class="content">
      <div class="detail-img">
        <img
          :src="goods.goodsCoverImg"
          alt=""
          width="100%"
          class="img"
          height="100%"
        />
      </div>
      <div class="product-info">
        <h2 class="title">{{ goods.goodsName }}</h2>
        <p class="desc">免邮费 顺非快递</p>
        <p class="num"><span class="num">￥</span>{{ goods.sellingPrice }}</p>
      </div>
      <div class="product-intro">
        <ul class="list">
          <li class="item">概述</li>
          <li class="item">参数</li>
          <li class="item">安装服务</li>
          <li class="item">常见问题</li>
        </ul>

        <div class="product-img" v-html="goods.goodsDetailContent"></div>
      </div>
    </div>
    <div class="buttom-cart">
      <div class="left-btn">
        <div class="btn">
          <i class="iconfont iconcustomer"></i>
          <p class="txt">客服</p>
        </div>
        <div class="cart-btn">
          <i class="iconfont iconshopcar"></i>
          <i class="num">{{ cartCount }}</i>
          <p class="txt">购物车</p>
        </div>
      </div>
      <div class="right-btn">
        <van-button
          class="btn lf-radius"
          type="primary"
          round
          color="linear-gradient(to right, #6bd8d8,#1baeae)"
          @click="addCart"
          >加入购物车</van-button
        >
        <van-button
          type="primary"
          class=" btn rt-radius"
          round
          color="linear-gradient(to right, #6bd8d8,#1baeae)"
          @click="buyImmediately"
          >立即购买</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from "./../views/v-header";
import { goodsDetail } from "./../api/goods";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      name: "商品详情",
      goods: {},
    };
  },
  created() {
    //  console.log(this.$route);
    this.getGoodsDetail();
  },
  computed: {
    ...mapGetters(["cartList", "shopId", "cartCount"]),
  },
  methods: {
    ...mapMutations(["GET_CART_ADD", "SET_CART_COUNT"]),
    async getGoodsDetail() {
      const { id } = this.$route.params;
      const { data } = await goodsDetail(id);
      this.goods = data;
      /*  console.log(this.$route.params);
      console.log(this.goods); */
    },
    addCart() {
      // console.log(this.goods.goodsId);
      this.GET_CART_ADD({
        shopId: this.goods.goodsId,
        name: this.goods.goodsName,
        price: this.goods.sellingPrice,
      });
      this.SET_CART_COUNT();
    },
    buyImmediately() {},
  },
  components: {
    vHeader,
  },
};
</script>

<style lang="scss" scoped>
@import "./../common/style/mixin.scss";

.detail-wrap {
  width: 100%;
  height: 100%;
  z-index: 9222;
  background-color: $fc;

  .content {
    padding: 5px;
    .detail-img {
      /* 预留图片占位 */
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 100%;
      .img {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .product-info {
      padding: 5px;
      .title {
        font-size: 20px;
        color: #666;
        text-align: center;
        margin: 2px;
      }
      .desc {
        font-size: 12px;
        color: #999;
        padding: 5px 0;
        margin: 0;
      }
      .num {
        color: #f63515;
        font-size: 16px;
        margin: 0;
        padding: 0;
        font-weight: 700;
      }
    }
    .product-intro {
      padding: 5px;
      .list {
        display: flex;
        justify-content: space-between;
        .item {
          padding-right: 28px;
          border-right: 1px solid #999;
        }
        .item:last-child {
          border-right: none;
          padding-right: none;
        }
      }
    }
    .product-img {
      padding: 5px;
    }
    ::v-deep img {
      max-width: 100%;
    }
  }
  .buttom-cart {
    width: 100%;
    position: fixed;
    right: 0;
    bottom: 0;
    display: flex;
    height: 60px;
    background-color: #fff;
    .left-btn {
      width: 120px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .cart-btn {
        position: relative;
      }
      .txt {
        font-size: 10px;
        margin: 0;
        padding: 5 0;
        text-align: center;
      }
      .num {
        color: #fff;
        background-color: #f63515;
        border-radius: 100%;
        width: 18px;
        height: 18px;
        position: absolute;
        top: -9px;
        right: -2px;
        text-align: center;
        font-style: normal;
        line-height: 18px;
        font-size: 12px;
      }
    }
  }
  .right-btn {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn {
      padding: 10px 30px;
    }
    .lf-radius {
      border-top-right-radius: 50%;
      border-bottom-right-radius: 50%;
    }
    .rt-radius {
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
    }
  }
}
</style>
