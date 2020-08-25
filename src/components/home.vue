<template>
  <div class="home-wrap">
    <header :class="{ 'header-active': scrollFlag }" class="header">
      <v-header></v-header>
    </header>
    <section class="content">
      <div class="carousel"><v-swiper></v-swiper></div>

      <div class="nav-crab">
        <ul class="nav-crab-list">
          <li class="item">
            <i class="iconfont iconhome icons"></i>
            <span>新锋超市</span>
          </li>
        </ul>
      </div>
      <div class="nav-list">
        <ul>
          <li class="item">
            <h2 class="item-title">新品推荐</h2>
            <ul>
              <li class="sub-item">
                <img
                  src="./../assets/phone.jpg"
                  width="102"
                  height="102"
                  alt=""
                />
                <p class="desc">HUAWEI Mate 30 Pro 双4000万徕卡电影四</p>
                <p class="num"><span>￥</span>3333</p>
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
import vHeader from './../views/v-header';
import vSwiper from './../views/v-swiper';
import { getHome } from './../api/home.js';

export default {
  data() {
    return {
      scrollFlag: false,
    };
  },
  mounted() {
    this.home();
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    async home() {
      const { data } = await getHome();
      console.log({ data });
    },
    handleScroll() {
      let scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      console.log(scrollTop);
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
  components: { vNav, vHeader, vSwiper },
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
          padding: 4px 10px;
          .icons {
            display: block;
            font-size: 26px;
            color: $primary;
          }
        }
      }
    }
    .nav-list {
      padding-bottom: 20px;
      .item {
        .item-title {
          font-size: 18px;
          font-weight: 400;
          color: $primary;
          text-align: center;
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
