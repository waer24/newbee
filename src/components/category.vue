<!--  -->
<template>
  <div class="category-wrap">
    <header class="header">
      <div class="header-inner">
        <span class="icon-wrap" @click="goBack()"
          ><i class="iconfont iconback icons"></i
        ></span>
        <div class="seah">
          <span class="seah-icon"
            ><i class="iconfont iconsearch icons"></i
          ></span>
          <input class="ipt" type="text" placeholder="enter to search" />
        </div>
      </div>
    </header>
    <section class="content-outer">
      <section class="content">
        <div class="content-inner">
          <!-- left -->

          <div class="left-summry">
            <scroll :scroll-data="categoryList" class="left-inner">
              <ul>
                <li
                  class="summry-item"
                  v-for="(item, index) in categoryList"
                  :class="{ current: currentIndex === index }"
                  :key="index"
                  ref="leftItem"
                  @click="getCategoryItem(index)"
                >
                  {{ item.categoryName }}
                </li>
              </ul>
            </scroll>
          </div>

          <!-- right -->
          <scroll
            :listenScroll="listenScroll"
            :scroll-data="categoryList"
            @scrollEvent="scrollList"
            :probeType="probeType"
            class="scroll-rt"
            ref="scroll"
          >
            <div class="right-summry">
              <ul class="right-inner" ref="jsHookList">
                <li
                  v-for="(item, index) in categoryList"
                  :key="index"
                  ref="categoryTitle"
                  class="category-item"
                >
                  <!--  name="index" 这里同data里定义的activeNames数组里保持一致 -->
                  <van-collapse v-model="activeNames">
                    <van-collapse-item
                      class="title"
                      :title="item.categoryName"
                      name="index"
                      v-for="(item, index) in item.secondLevelCategoryVOS"
                      :values="item.categoryName"
                      :key="index"
                    >
                      <!--   :name="item.categoryName" -->
                      <ul>
                        <li
                          class="sub"
                          v-for="(subItem, index) in item.thirdLevelCategoryVOS"
                          :key="index"
                          :values="subItem.categoryName"
                          @click="itemDetail(subItem.categoryId)"
                        >
                          <div class="sub-inner">
                            <span><i class="iconfont icontag"></i></span>
                            <span class="subtitle">
                              {{ subItem.categoryName }}</span
                            >
                          </div>
                        </li>
                      </ul>
                    </van-collapse-item>
                  </van-collapse>
                </li>
              </ul>
            </div>
          </scroll>
        </div>
      </section>
    </section>
    <router-view></router-view>
    <footer class="footer">
      <v-nav></v-nav>
    </footer>
  </div>
</template>

<script>
import vNav from "./../views/v-nav";
import { getCategory } from "./../api/category.js";
import scroll from "./../views/scroll";

export default {
  data() {
    return {
      categoryList: [],
      activeNames: ["index"],
      scrollY: -1, // 实时获取Y轴鼠标的滚动位置,用于在获取右边每个li的实际高度时，与之对比，获取到currentIndex
      itemsHeight: [], // 获取右边li所有item的高度
    };
  },
  created() {
    // 不用追踪数据，只是纯粹的定义共享变量
    this.listenScroll = true;
    this.probeType = 3;
    this.scroll = true;
    this.category();
  },
  watch: {
    categoryList() {
      this.$nextTick(() => {
        this._initHeight(); // 通过watch监听右边列表是否发生变化
        this.$refs.scroll.refresh(); // 重新计算scroll滚动的高度
      });
    },
  },
  computed: {
    // 方法一
    currentIndex() {
      const { scrollY, itemsHeight } = this;
      // console.log(itemsHeight);
      return itemsHeight.findIndex((item, index) => {
        return scrollY >= item && scrollY < itemsHeight[index + 1];
      });
    },

    // 方法二
    /* currentIndex() {
      for (let i = 0; i < this.itemsHeight.length; i++) {
        let h1 = this.itemsHeight[i];
        let h2 = this.itemsHeight[i + 1];
        if (this.scrollY >= h1 && this.scrollY < h2) {
          console.log(i);
          return i;
        }
      }
      return 0; // 其他情况
    }, */
  },

  methods: {
    _initHeight() {
      // console.log(this.categoryList);
      let itemArray = []; // 定义一个伪数组
      let itemTop = 0;
      itemArray.push(itemTop);
      let allItems = this.$refs.jsHookList.getElementsByClassName(
        "category-item"
      );
      // 转化为真数组
      Array.prototype.slice.call(allItems).forEach((item) => {
        itemTop += item.clientHeight; // 获取每个li的高度
        itemArray.push(itemTop);
      });
      this.itemsHeight = itemArray;
      // console.log(this.itemsHeight);
    },
    scrollList(pos) {
      // 实时获取滚动到y轴的位置，用户会不断触发scroll事件，因此需要监听scroll，同时也是回应scroll组件中子组件的绑定事件
      this.scrollY = Math.abs(Math.round(pos.y)); // scroll事件本身就包含对x，y的坐标点
    },

    getCategoryItem(index) {
      this.$refs.scroll.refresh();
      this.$refs.scroll.scrollToElement(this.$refs.categoryTitle[index], 300);
    },

    itemDetail(id) {
      this.$router.push({
        path: `/category/${id}`,
      });
    },

    goBack() {
      this.$router.go(-1);
    },
    async category() {
      const { data } = await getCategory();
      this.categoryList = data;
      this.secList = this.categoryList[0].secondLevelCategoryVOS;
      // console.log(this.categoryList);
      // console.log(this.secList);
    },
  },
  components: { vNav, scroll },
};
</script>
<style lang="scss" scoped>
@import "./../common/style/mixin.scss";

.category-wrap {
  width: 100%;
  height: 100%;

  background-color: $home-bg;
  .header {
    position: fixed;
    z-index: 1;

    width: 100%;

    background-color: #fff;

    .header-inner {
      display: flex;
      justify-content: center;

      height: 50px;

      @include border-1px(#ccc);
    }

    .icon-wrap {
      position: absolute;
      top: 0;
      left: 0;

      width: 30px;
      height: 30px;
      padding: 10px;

      .icons {
        font-size: 24px;
      }
    }
    .seah {
      display: flex;
      align-items: center;

      width: 80%;

      .seah-icon {
        position: relative;

        padding-left: 20px;

        .icons {
          font-size: 24px;

          position: absolute;
          top: -11px;
        }
      }
      .ipt {
        line-height: 28px;

        width: 100%;
        padding-left: 20px;

        text-indent: 18px;

        border: 1px solid #ccc;
        border-radius: 5px;
      }
    }
  }
  .content-outer {
    position: relative;

    width: 100%;
    height: calc(100vh - 60px);
    .content {
      position: absolute;
      top: 45px;
      bottom: 60px;

      width: 100%;
      .content-inner {
        display: flex;
        overflow: hidden;

        height: 100%;
        .left-summry {
          position: relative;

          height: 100%;
          .left-inner {
            flex: 0 0 140px;

            width: 140px;
            height: 100%;
          }

          .summry-item {
            font-size: 16px;

            position: relative;

            padding: 18px 10px;

            &.current {
              color: $primary;
            }
          }
        }
        .scroll-rt {
          width: calc(100% - 120px);
          .right-summry {
            width: 100%;
            .right-inner {
              overflow: hidden;
              flex: 1;

              width: 100%;
              min-height: 700px;
              padding: 10px 10px 10px 0;
              .title {
                font-size: 18px;
              }
              .sub {
                font-size: 18px;

                display: inline-table;

                box-sizing: border-box;
                width: 50%;
                padding: 10px 5px;

                .sub-inner {
                  font-size: 16px;

                  display: flex;
                  flex-direction: column;
                  flex-wrap: wrap;

                  text-align: center;
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

    /*         position: absolute;
        bottom: 0;
        overflow: hidden;
        width: 100%;
        height: 60px; // css sticky */

    width: 100%;
    height: 60px;

    background-color: #fff;
  }
}
</style>
