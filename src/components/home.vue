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
    </section>
    <footer class="footer"><v-nav></v-nav></footer>

    <router-view></router-view>
  </div>
</template>

<script>
import vNav from './../views/v-nav';
import homeSearch from './../views/home-search';
import vSwiper from './../views/v-swiper';
import { getHome } from './../api/home.js';
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
        { name: '新蜂超市', icon: 'iconchaoshi' },
        { name: '新蜂服饰', icon: 'iconclothes' },
        { name: '全球购', icon: 'iconglobal' },
        { name: '新蜂生鲜', icon: 'iconshrimp' },
        { name: '新蜂到家', icon: 'iconsendtohome' },
        { name: '充值缴费', icon: 'iconrecharge' },
        { name: '9.9元拼', icon: 'iconbuy' },
        { name: '领劵', icon: 'iconcoupon' },
        { name: '省钱', icon: 'icondiscount' },
        { name: '全部', icon: 'iconall' },
      ],
    };
  },
  mounted() {
    this.home();
    window.addEventListener('scroll', this.handleScroll);
  },
  computed: {},
  methods: {
    getDetail(id) {
      this.$router.push({
        path: `/${id}`,
      });
      // console.log(this.path);
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
      return url.indexOf('oss-cn-beijing') > -1
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
    window.removeEventListener('scroll', this.handleScroll);
  },
  components: { vNav, homeSearch, vSwiper },
};
</script>

<style scoped lang="scss">
@import './../common/style/mixin.scss';
.home-wrap {
  background-color: $home-bg;
  margin-bottom: 60px;
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
      padding: 6px 0;
      overflow: hidden;
      background-color: $fc;
      .nav-crab-list {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: center;
        .item {
          text-align: center;
          padding: 4px 5px;
          flex: 0 0 60px;
          .icons {
            display: block;
            font-size: 26px;
            color: $primary;
          }
        }
      }
    }
    .nav-list {
      padding-bottom: 60px;
      .item {
        .item-title {
          padding: 10px 0;
          font-size: 18px;
          font-weight: 400;
          color: $primary;
          text-align: center;
          background-color: $bc;
          margin: 0;
        }
        .sub-item {
          box-sizing: border-box;
          width: 50%;
          display: inline-flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: center;
          background-color: $fc;
          border: 1px solid $bc;
          .desc {
            font-size: 14px;
            color: $global-font-color;
            @include hiddenWord;
          }
          .num {
            font-size: 16px;
            margin-top: 0;
            color: $primary;
            font-weight: 500;
          }
        }
      }
    }
  }
  .footer {
    height: 60px; // css stickey
    overflow: hidden;
    position: fixed;
    bottom: 0;
  }
}
</style>
