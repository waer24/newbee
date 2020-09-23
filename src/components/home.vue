<template>
  <div class="home-wrap">
    <header :class="{ 'header-active': scrollFlag }" class="header">
      <home-search></home-search>
    </header>
    <section class="content">
      <div class="carousel"><v-swiper :list="carouselList"></v-swiper></div>
      <div class="nav-crab">
        <ul class="nav-crab-list">
          <li class="item" v-for="(item, index) in navCrabList" :key="index">
            <i class="iconfont icons" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <div class="nav-list">
        <ul>
          <li class="item">
            <h2 class="item-title">新品上线</h2>
            <ul>
              <li
                class="sub-item"
                v-for="item in newGoodList"
                :key="item.goodsId"
                @click="getDetail(item.goodsId)"
              >
                <img
                  :src="getImgUrl(item.goodsCoverImg)"
                  width="102"
                  height="102"
                  alt=""
                />
                <p class="desc">{{ item.goodsName }}</p>
                <p class="num"><span>￥</span>{{ item.sellingPrice }}</p>
              </li>
            </ul>
          </li>
          <li class="item">
            <h2 class="item-title">热门商品</h2>
            <ul>
              <li
                class="sub-item"
                v-for="item in hotGoodList"
                :key="item.goodsId"
                @click="getDetail(item.goodsId)"
              >
                <img
                  :src="getImgUrl(item.goodsCoverImg)"
                  width="102"
                  height="102"
                  alt=""
                />
                <p class="desc">{{ item.goodsName }}</p>
                <p class="num"><span>￥</span>{{ item.sellingPrice }}</p>
              </li>
            </ul>
          </li>
          <li class="item">
            <h2 class="item-title">最新推荐</h2>
            <ul>
              <li
                class="sub-item"
                v-for="item in recommandList"
                :key="item.goodsId"
                @click="getDetail(item.goodsId)"
              >
                <img
                  :src="getImgUrl(item.goodsCoverImg)"
                  width="102"
                  height="102"
                  alt=""
                />
                <p class="desc">{{ item.goodsName }}</p>
                <p class="num"><span>￥</span>{{ item.sellingPrice }}</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </section>
    <footer class="footer"><v-nav></v-nav></footer>
  </div>
</template>

<script>
import vNav from "./../views/v-nav";
import homeSearch from "./../views/home-search";
import vSwiper from "./../views/v-swiper";
import { getHome } from "./../api/home.js";
//import { goodsDetail } from './../api/goods';

export default {
  data() {
    return {
      scrollFlag: false,
      carouselList: [],
      newGoodList: [],
      hotGoodList: [],
      recommandList: [],
      navCrabList: [
        { name: "新蜂超市", icon: "iconchaoshi" },
        { name: "新蜂服饰", icon: "iconclothes" },
        { name: "全球购", icon: "iconglobal" },
        { name: "新蜂生鲜", icon: "iconshrimp" },
        { name: "新蜂到家", icon: "iconsendtohome" },
        { name: "充值缴费", icon: "iconrecharge" },
        { name: "9.9元拼", icon: "iconbuy" },
        { name: "领劵", icon: "iconcoupon" },
        { name: "省钱", icon: "icondiscount" },
        { name: "全部", icon: "iconall" },
      ],
    };
  },
  mounted() {
    this.home();
    window.addEventListener("scroll", this.handleScroll);
  },
  computed: {},
  methods: {
    getDetail(id) {
      this.$router.push({
        path: `/home/${id}`,
      });
    },

    /*
    elmApp api use demo
     getCityList(hotCityData).then((res) => {
        if (res.status === STATUS_OK) {
          this.hotCityList = res.data;
          return this.hotCityList;
        }
      });
     */
    async home() {
      const { data } = await getHome();
      (this.carouselList = data.carousels), // console.log('data', { data });
        (this.newGoodList = data.newGoodses);
      this.hotGoodList = data.hotGoodses;
      this.recommandList = data.recommendGoodses;
    },

    getImgUrl(url) {
      return url.indexOf("oss-cn-beijing") > -1
        ? `${url}`
        : `//lmall.xinfeng.site${url}`;
    },
    handleScroll() {
      let scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      // console.log(scrollTop);
      if (scrollTop > 40) {
        this.scrollFlag = true;
      } else {
        this.scrollFlag = false;
      }
    },
  },
  beforeDestroy() {
    // 离开时销毁，否则会报错
    window.removeEventListener("scroll", this.handleScroll);
  },
  components: { vNav, homeSearch, vSwiper },
};
</script>

<style scoped lang="scss">
@import "./../common/style/mixin.scss";
.home-wrap {
  margin-bottom: 60px;

  background-color: $home-bg;
  .header {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
  }
  .header-active {
    color: $fc;
    background-color: $primary;
    ::v-deep.login {
      // TODO 重置子组件的颜色
      color: $fc;
    }
    ::v-deep.icon-list {
      color: $fc;
    }
  }

  .content {
    min-height: calc(100vh - 60px); // css stickey
    .carousel {
      width: 100%;
      height: 132px;
      .my-swipe {
        width: 100%;
        height: 132px;
      }
    }
    .nav-crab {
      overflow: hidden;

      padding: 6px 0;

      background-color: $fc;
      .nav-crab-list {
        display: flex;
        align-items: center;
        flex-flow: row wrap;
        justify-content: space-around;
        .item {
          flex: 0 0 60px;

          padding: 4px 5px;

          text-align: center;
          .icons {
            font-size: 26px;

            display: block;

            color: $primary;
          }
        }
      }
    }
    .nav-list {
      padding-bottom: 60px;
      .item {
        .item-title {
          font-size: 18px;
          font-weight: 400;

          margin: 0;
          padding: 10px 0;

          text-align: center;

          color: $primary;
          background-color: $bc;
        }
        .sub-item {
          display: inline-flex;
          align-items: center;
          flex-flow: row wrap;
          justify-content: center;

          box-sizing: border-box;
          width: 50%;

          border: 1px solid $bc;
          background-color: $fc;
          .desc {
            font-size: 14px;

            color: $global-font-color;

            @include hiddenWord;
          }
          .num {
            font-size: 16px;
            font-weight: 500;

            margin-top: 0;

            color: $primary;
          }
        }
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;

    overflow: hidden;

    width: 100%;
    height: 60px; // css stickey
  }
}
</style>
