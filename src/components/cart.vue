<template>
  <div class="cart-wrap">
    <v-header :title="name"></v-header>
    <div class="list-wrapper">
      <scroll :scroll-data="storeList" class="scroll">
        <div class="list">
          <ul>
            <li
              v-for="(item, index) in storeList"
              :key="item.shopId"
              ref="item"
            >
              <van-swipe-cell class="item" :before-close="onClose(index)"
                ><!-- -->
                <template>
                  <div class="item-inner">
                    <div class="checkbox">
                      <van-checkbox
                        :value="item.isCheck"
                        :name="item.shopId"
                        checked-color="#1baeae"
                        @click="saveCheckOne(index)"
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
                          <span class="reduce" @click="saveCartReduce(index)"
                            ><i class="iconfont iconreduce"></i
                          ></span>
                          <input
                            ref="input"
                            type="number"
                            class="ipt"
                            :value="item.count"
                            @blur="changeCount(index)"
                          />
                          <span class="add" @click="saveCartAdd(index)"
                            ><i class="iconfont iconadd"></i
                          ></span>
                          <button @click="saveCartDelete">ffff</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
                <template slot="right">
                  <div class="rt-btn">
                    <van-button
                      square
                      text="删除"
                      type="danger"
                      class="delete-button"
                    ></van-button>
                  </div>
                </template>
              </van-swipe-cell>
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
            :value="isAllChecked"
            @click="saveCheckAll"
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
import { Dialog, Toast } from "vant";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      name: "购物车",
      iptVal: "",
    };
  },

  computed: {
    ...mapGetters(["storeList", "sum", "isAllChecked"]),
    /*   TIPS：   组件中v-model=“XXX”，而XXX是vuex state中的某个变量
       html中 isAllChecked 是由v-model ，vuex中是单项流，v-model是vue中的双向绑定，但是在computed中只通过get获取参数值，
    没有set无法改变参数值，因此增加set的方法 ，并将v-model改成:value*/

    isAllChecked: {
      get() {
        return this.$store.getters.isAllChecked;
      },
      set(val) {
        this.SET_IS_ALL_CHECKED(val);
      },
    },
  },

  methods: {
    ...mapMutations([
      "SET_ITEM_COUNT",
      "GET_CART_ADD",
      "GET_CART_REDUCE",
      "SET_CART_COUNT",
      "GET_SUM",
      "SET_IS_ALL_CHECKED",
    ]),
    ...mapActions([
      "saveCheckAll",
      "saveCheckOne",
      "saveCartAdd",
      "saveCartReduce",
      "saveChangeCount",
      "saveCartDelete",
    ]),

    changeCount(index) {
      this.saveChangeCount({
        index,
        val: Number(this.$refs.input[index].value),
      });
      // this.SET_ITEM_COUNT(index, Number(this.$refs.ipt[index].value));
      // console.log("print--", this.$refs.ipt[index].value);
    },

    onClose(index) {
      // instance 是SwipeCell 实例，用于调用实例方法
      const _this = this
      return function ({ position, instance }) {
        switch (position) {
          case "outside":
            instance.close();
            break;
          case "right":
            Dialog.confirm({
              message: "主人， 确定删除咩？",
            })
              .then(() => {
                _this.saveCartDelete(index); // is not a function
                instance.close();
              })

              .catch((e) => {
                console.log(e);
              });
            break;
        }
      };
    },
  },

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
          margin: 10px;
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
          .rt-btn {
            height: 100%;
            overflow: hidden;
          }
          .delete-button {
            height: 100%;
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
