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
        <div class="cart-btn" @click="gotoCart">
          <i class="iconfont iconshopcar"></i>
          <i class="num" v-show="sortCount > 0">{{ sortCount }}</i>
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
          >立即购买</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from "./../views/v-header";
import { goodsDetail } from "./../api/goods";
import { mapGetters, mapMutations, mapState } from "vuex";
import { Toast } from "vant";

export default {
  data() {
    return {
      name: "商品详情",
      goods: {},
      sortCount: 0,
      cartGoods: {}, // 产品页面的购物车
    };
  },
  created() {
    this.getGoodsDetail();
    this.isHaveList();
  },

  computed: {
    ...mapGetters(["cartList", "shopId", "storeList"]),
  },

  methods: {
    ...mapMutations(["SET_INIT_LIST"]),
    isHaveList() {
      if (
        localStorage.getItem("storeList") === null || // null !== null，因此把null的情况放前面
        localStorage.getItem("storeList") === undefined
      ) {
        this.sortCount = 0;
      } else {
        this.sortCount = Object.keys(this.storeList()).length;
      }
    },
    async getGoodsDetail() {
      const { id } = this.$route.params;
      const { data } = await goodsDetail(id);
      this.goods = data;
    },

    gotoCart() {
      this.$router.push({
        path: "/cart",
      });
    },

    addCart() {
      // this.calcCount();
      //  Object.values()返回一个数组，其元素是在对象上找到的可枚举属性值
      console.log("storeList", this.storeList());
      if (this.storeList() && Object.values(this.storeList()).length !== 0) {
        for (let key in this.storeList()) {
          if (Number(key) === this.goods.goodsId) {
            Toast.fail("已经添加过啦~");
          }
        }
      }
      this.SET_INIT_LIST({
        name: this.goods.goodsName,
        shopId: this.goods.goodsId,
        price: this.goods.sellingPrice,
      });
      this.isHaveList();
    },
  },
  components: {
    vHeader,
  },
};
</script>

<style lang="scss" scoped>
@import "./../common/style/mixin.scss";

.detail-wrap {
  z-index: 1;

  width: 100%;
  height: 100%;

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

        margin: 2px;

        text-align: center;

        color: #666;
      }
      .desc {
        font-size: 12px;

        margin: 0;
        padding: 5px 0;

        color: #999;
      }
      .num {
        font-size: 16px;
        font-weight: 700;

        margin: 0;
        padding: 0;

        color: #f63515;
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
          padding-right: none;

          border-right: none;
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
    position: fixed;
    right: 0;
    bottom: 0;

    display: flex;

    width: 100%;
    height: 60px;

    background-color: #fff;
    .left-btn {
      display: flex;
      align-items: center;
      justify-content: space-around;

      width: 120px;
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
        font-size: 12px;
        font-style: normal;
        line-height: 18px;

        position: absolute;
        top: -4px;
        right: 0;

        width: 18px;
        height: 18px;

        text-align: center;

        color: #fff;
        border-radius: 100%;
        background-color: #f63515;
      }
    }
    .right-btn {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: center;
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
}
</style>
