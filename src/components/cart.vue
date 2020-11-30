<template>
  <div class="cart-wrap">
    <v-header :title="name"></v-header>
    <div class="list">
      <ul>
        <li class="item">
          <div class="item-inner">
            <div class="checkbox">
              <van-checkbox-group v-model="result">
                <van-checkbox name="a" checked-color="#1baeae"></van-checkbox>
              </van-checkbox-group>
            </div>
            <div class="img"><img src="" alt="" width="60" height="80" /></div>
            <div class="desc">
              <p class="title">
                HUAWEI Mate 40 Pro+ 5G 全网通
                全网通全网通全网通全网通全网通全网通全网通通全网通全网通全网通全网通全网通全网通
              </p>
              <p class="quantity">X4</p>
              <div class="info">
                <span class="num"><i class="charc">￥</i>4243</span>
                <div class="btn-operator">
                  <span class="reduce"
                    ><i class="iconfont iconreduce"></i
                  ></span>
                  <input
                    type="number"
                    aria-valuenow="4"
                    aria-valuemin="1"
                    class="ipt"
                  />
                  <span class="add"
                    ><i class="iconfont iconweibiaoti1"></i
                  ></span>
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
      padding: 10px 0;
      .item-inner {
        display: flex;
        align-items: center;
        justify-content: space-around;
        .checkbox {
          // padding-right: 10px;
        }
        .img {
          display: contents;
          flex: 1;

          box-sizing: border-box;
          width: 60px;
        }
        .desc {
          position: relative;
          .title {
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;

            width: 160px;
            margin: 0;
            padding: 0 30px 0 0;

            text-overflow: ellipsis;

            -webkit-line-clamp: 2;
          }
          .quantity {
            position: absolute;
            top: 7px;
            right: 7px;

            margin: 0;
            padding: 0;
          }
          .info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .num {
              font-size: 16px;

              color: #ff6b01;
              .charc {
                font-style: normal;

                padding-right: 5px;
                padding-left: 10px;
              }
            }
            .btn-operator {
              overflow: hidden;

              margin-right: 13px;
              .reduce,
              .add {
                font-size: 20px;
                line-height: 20px;

                width: 40px;
                padding: 5px;

                border: none;
              }
              .ipt {
                width: 30px;

                text-align: center;
              }
            }
          }
        }
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
      bottom: 60px;

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
      height: 60px;
    }
  }
}

</style>
