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
              <!--  :class="{ current: currentIndex === index }" -->
              <ul>
                <li
                  class="summry-item"
                  v-for="(item, index) in categoryList"
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
            :scroll-data="categoryList"
            @scrollEvent="scrollList"
            class="scroll-rt"
            ref="categoryItem"
          >
            <div class="right-summry">
              <ul class="right-inner">
                <li
                  v-for="(item, index) in categoryList"
                  :key="index"
                  ref="categoryTitle"
                >
                  <van-collapse v-model="activeNames">
                    <van-collapse-item
                      class="title"
                      :title="item.categoryName"
                      :name="item.categoryName"
                      v-for="(item, index) in item.secondLevelCategoryVOS"
                      :key="index"
                    >
                      <ul>
                        <li
                          class="sub"
                          v-for="(subItem, index) in item.thirdLevelCategoryVOS"
                          :key="index"
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
      activeNames: [],
      scrollY: 0, // 实时获取Y轴鼠标的滚动位置
    };
  },
  created() {
    this.category();
  },
  computed: {
    // currentIndex() {},
  },
  watch: {},
  methods: {
    scrollList(pos) {
      // 实时获取滚动到y轴的位置，用户会不断触发scroll事件，因此需要监听scroll，同时也是回应scroll组件中子组件的绑定事件
      this.scrollY = Math.abs(Math.round(pos.y)); // scroll事件本身就包含对x，y的坐标点
      console.log(this.scrollY);
      console.log(22);
      /*
      function onScroll(pos) {
    console.log(`Now position is x: ${pos.x}, y: ${pos.y}`)
} */
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
      console.log(this.categoryList);
      // console.log(this.secList);
    },
    getCategoryItem(index) {
      this.$refs.categoryItem.refresh();
      this.$refs.categoryItem.scrollToElement(
        this.$refs.categoryTitle[index],
        300
      );
    },
  },
  components: { vNav, scroll },
};
</script>
<style lang="scss" scoped>
@import './../common/style/mixin.scss';

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
      padding: 8px;

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

        // min-height: calc(100vh - 100px);

        .left-summry {
          position: relative;

          height: 100%;
          .left-inner {
            flex: 0 0 140px;

            width: 140px;
          }

          .summry-item {
            font-size: 16px;

            position: relative;

            padding: 20px 10px;

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
