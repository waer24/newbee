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
    <section class="content">
      <div class="content-inner">
        <!-- left -->

        <scroll :scroll-data="categoryList">
          <div class="left-summry">
            <ul>
              <li
                class="summry-item"
                v-for="(item, categoryId) in categoryList"
                :key="categoryId"
                @click="setChoose(categoryId)"
              >
                {{ item.categoryName }}
              </li>
            </ul>
          </div>
        </scroll>

        <!-- right -->
        <scroll :scroll-data="categoryList">
          <div class="right-summry">
            <div class="right-summry-inner">
              <ul>
                <li
                  v-for="(item, categoryId) in categoryList"
                  :key="categoryId"
                >
                  <van-collapse v-model="activeNames">
                    <van-collapse-item
                      class="title"
                      :title="item.categoryName"
                      :name="item.categoryName"
                      v-for="(item, categoryId) in item.secondLevelCategoryVOS"
                      :key="categoryId"
                    >
                      <ul>
                        <li
                          class="sub"
                          v-for="(subItem,
                          categoryId) in item.thirdLevelCategoryVOS"
                          :key="categoryId"
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
          </div>
        </scroll>
      </div>
    </section>
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
    };
  },
  created() {
    this.category();
  },
  computed: {},

  watch: {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async category() {
      const { data } = await getCategory();
      this.categoryList = data;
      this.secList = this.categoryList[0].secondLevelCategoryVOS;

      console.log(this.categoryList);
      console.log(this.secList);
    },
    setChoose(id) {
      console.log(id);
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
  .content {
    position: relative;

    width: 100%;
    margin-top: 45px;
    margin-bottom: 60px;
    .content-inner {
      display: flex;

      min-height: calc(100vh - 100px);

      .left-summry {
        flex: 0 0 140px;

        width: 140px;

        .summry-item {
          font-size: 16px;

          position: relative;

          padding: 20px 10px;

          &.current {
            color: $primary;
          }
        }
      }
      .right-summry {
        width: 100%;
        .right-summry-inner {
          overflow: hidden;

          width: 100%;
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
  .footer {
    position: absolute;
    bottom: 0;

    overflow: hidden;

    width: 100%;
    height: 1.6rem; // css sticky
  }
}

</style>
