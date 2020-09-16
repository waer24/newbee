<!--  -->
<template>
  <div class="category-wrap">
    <header class="header">
      <span class="icon-wrap" @click="goBack()"
        ><i class="iconfont iconback icons"></i
      ></span>
      <div class="seah">
        <span class="seah-icon"><i class="iconfont iconsearch icons"></i></span>
        <input class="ipt" type="text" placeholder="enter to search" />
      </div>
    </header>
    <section class="content">
      <!-- left -->
      <div class="left-summry">
        <ul>
          <li
            class="item"
            v-for="(item, categoryId) in categoryList"
            :key="categoryId"
          >
            {{ item.categoryName }}
          </li>
        </ul>
      </div>
      <!-- right -->
      <div class="right-summry">
        <ul>
          <li v-for="(item, categoryId) in categoryList" :key="categoryId">
            <ul>
              <li
                v-for="(item, categoryId) in item.secondLevelCategoryVOS"
                :key="categoryId"
              >
                <h2 class="title">{{ item.categoryName }}</h2>

                <ul>
                  <li
                    class="sub"
                    v-for="(subItem, categoryId) in item.thirdLevelCategoryVOS"
                    :key="categoryId"
                  >
                    <div class="sub-inner">
                      <span><i class="iconfont icontag"></i></span>
                      <span class="subtitle"> {{ subItem.categoryName }}</span>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
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

export default {
  data() {
    return {
      categoryList: [],
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
  },
  components: { vNav },
};
</script>
<style lang="scss" scoped>
@import "./../common/style/mixin.scss";

.category-wrap {
  background-color: $home-bg;
  .header {
    display: flex;
    justify-content: center;

    height: 50px;

    @include border-1px(#ccc);

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
    min-height: calc(100vh - 100px); // css stickey
    display: flex;
    // justify-content: center;
    .left-summry {
      width: 140px;
      flex: 0 0 140px;
      .item {
        font-size: 16px;
        padding: 20px 10px;
      }
    }
    .right-summry {
      width: 100%;
      padding: 10px 10px 10px 0;
      overflow: hidden;
      .title {
        font-size: 18px;
        padding: 10px;
      }
      .sub {
        font-size: 18px;
        display: inline-table;
        width: 50%;
        padding: 10px 5px;
        box-sizing: border-box;
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
  .footer {
    overflow: hidden;
    height: 60px; // css stickey
  }
}
</style>
