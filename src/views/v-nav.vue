<template>
  <div class="nav-bar">
    <ul class="nav-inner">
      <router-link tag="li" to="/home" class="item">
        <span class=""><i class="iconfont iconhome icon"></i></span>
        <span>首页</span>
      </router-link>
      <router-link tag="li" to="/category" class="item">
        <span class=""><i class="iconfont iconfenlei icon"></i></span>

        <span>分类</span>
      </router-link>
      <router-link tag="li" to="/shopcar" class="item">
        <span class="icon"
          ><i class="iconfont iconshopcar icon"></i>
          <i class="num">{{ sortCount }}</i></span
        ><!--  cartCount -->

        <span>购物车</span>
      </router-link>
      <router-link tag="li" to="/user" class="item">
        <span class="icon"> <i class="iconfont iconmine icon"></i></span>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortCount: 0,
    };
  },
  created() {
    this.isHaveList();
  },
  methods: {
    isHaveList() {
      if (
        localStorage.getItem("storeList") === null || // null !== null，因此把null的情况放前面
        localStorage.getItem("storeList") === undefined
      ) {
        this.sortCount = 0;
      } else {
        this.sortCount = Object.keys(this.$store.getters.storeList()).length;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../common/style/mixin.scss";
.nav-bar {
  position: fixed;

  width: 100%;
  height: 60px;

  background-color: $fc;
  .nav-inner {
    font-size: 14px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    height: 100%;
    .icon {
      font-size: 18px;

      display: block;

      text-align: center;
      &.router-link-active {
        color: $primary;
      }
    }
    .item {
      position: relative;
      &.router-link-active {
        color: $primary;
      }
      .num {
        font-size: 12px;
        font-style: normal;
        line-height: 18px;

        position: absolute;
        top: -4px;
        right: 0;

        width: 18px;
        height: 18px;

        text-align: center;

        color: #fff;
        border-radius: 100%;
        background-color: #f63515;
      }
    }
  }
}
</style>
