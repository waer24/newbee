<template>
  <div class="cart-wrap">
    <v-header :title="name"></v-header>
    <div class="list-wrapper">
      <scroll :scroll-data="list" class="scroll">
        <div class="list">
          <ul>
            <li class="item" v-for="(item, index) in list" :key="item.shopId">
              <div class="item-inner">
                <div class="checkbox">
                  <van-checkbox
                    v-model="item.isCheck"
                    :name="item.shopId"
                    checked-color="#1baeae"
                    @click="checkOne(index)"
                  ></van-checkbox>
                  <!-- name 等价于 普通input框中的value -->
                </div>
                <div class="img">
                  <img :src="item.img" alt="" width="60" height="80" />
                </div>
                <div class="desc">
                  <p class="title">{{ item.name }}</p>
                  <p class="quantity">
                    X&nbsp;<span>{{ item.count }}</span>
                  </p>
                  <div class="info">
                    <span class="num"
                      ><i class="charc">￥</i>{{ item.price }}</span
                    >
                    <div class="btn-operator">
                      <span class="reduce" @click="reduceQty(item.shopId)"
                        ><i class="iconfont iconreduce"></i
                      ></span>
                      <input
                        type="number"
                        aria-valuenow="4"
                        aria-valuemin="1"
                        class="ipt"
                        :value="item.count"
                      />
                      <span class="add" @click="addQty(item.shopId, index)"
                        ><i class="iconfont iconadd"></i
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </scroll>
    </div>
    <footer class="footer">
      <div class="total">
        <div class="lf">
          <van-checkbox
            checked-color="#1baeae"
            v-model="isAllChecked"
            @click="checkAll()"
          ></van-checkbox>
          <span class="allselect">全选</span>
        </div>
        <div class="ct">
          <span class="sum">合计:</span><i class="charc">￥</i>
          <p class="num">{{ sum }}</p>
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
import scroll from "./../views/scroll";
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      name: "购物车",
      isAllChecked: false, // 全选
      list: Object.values(this.$store.getters.storeList()), // 购物车对象转数组,因为没有length属性，不能用array.from转化
      sum: 0,
    };
  },

  computed: {
    ...mapGetters(["cartList", "shopId", "storeList"]),
  },

  methods: {
    ...mapMutations(["GET_CART_ADD", "GET_CART_REDUCE"]),
    addQty(item, index) {
      // this.sum = 0;
      this.GET_CART_ADD({ shopId: item });
      //  console.log(this.list[index]);
      if (this.list[index].isCheck) {
        this.sum += this.list[index].price * this.list[index].count;
      }
      this.list = Object.values(this.$store.getters.storeList()); // 重新对list取值，否则不会实时更新数据
      return this.sum;
    },

    reduceQty(item) {
      this.GET_CART_REDUCE({ shopId: item });
      this.list = Object.values(this.$store.getters.storeList());
    },
    checkOne() {
      this.sum = 0;
      this.list.every((value) => {
        // 只有所有的勾选，全选激活
        if (value.isCheck) {
          this.isAllChecked = true;
          console.log(value.isCheck);
        }
      });
      this.list.some((value) => {
        // 只要一个不勾选，全选取消
        if (value.isCheck === false) {
          this.isAllChecked = false;
        }
      });
      this.list.map((value) => {
        if (value.isCheck) {
          this.sum += value.price * value.count;
        }
      });

      return this.sum;
    },
    checkAll() {
      this.sum = 0;
      if (this.isAllChecked) {
        this.list.map((value) => {
          value.isCheck = true;
          this.sum += value.price * value.count;
        });
      } else {
        this.list.map((value) => {
          value.isCheck = false;
        });
      }
      return this.sum;
    },
  },

  /*   watch: {
    list: {
      handler: function(newVal) {
        console.log(newVal);
      },
      deep: true,
      immediate: true,
    },
  }, */

  components: { vHeader, vNav, scroll },
};
</script>
<style lang="scss" scoped>
.cart-wrap {
  position: fixed;

  overflow: hidden;

  width: 100%;
  height: 100%;
  .list-wrapper {
    position: fixed;
    bottom: 3rem;
    top: 1rem;
    .scroll {
      position: relative;
      height: 100%;
      overflow: hidden;

      .list {
        background-color: #fff;
        .item {
          padding: 10px;
          .item-inner {
            display: flex;
            align-items: center;
            justify-content: space-around;
            .img {
              box-sizing: border-box;
              overflow: hidden;
              display: inline-block;
              padding: 0 10px;
            }
            .desc {
              padding: 0 10px;
              position: relative;
              flex: 1;
              .title {
                display: -webkit-box;
                overflow: hidden;
                -webkit-box-orient: vertical;

                margin: 0;
                padding: 0 20px 0 0;

                text-overflow: ellipsis;

                -webkit-line-clamp: 2;
              }
              .quantity {
                position: absolute;
                top: 2px;
                right: 6px;

                margin: 0;
                padding: 0;
                font-size: 16px;
              }
              .info {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 5px 0;
                .num {
                  font-size: 18px;

                  color: #ff6b01;
                  .charc {
                    font-style: normal;

                    padding-right: 5px;
                  }
                }
                .btn-operator {
                  overflow: hidden;

                  /* margin-right: 13px; */
                  .reduce,
                  .add {
                    font-size: 18px;
                    line-height: 18px;

                    width: 40px;
                    padding: 8px;

                    border: none;
                  }
                  .ipt {
                    width: 30px;
                    border: 1px solid #ccc;
                    text-align: center;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    height: 3rem;

    overflow: hidden;

    width: 100%;

    .total {
      position: fixed;
      bottom: 60px;
      background-color: #fff;
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
        width: 110px;
        align-items: center;
        .sum {
          width: 40px;
        }
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
