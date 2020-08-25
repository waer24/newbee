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
        <span class="icon"><i class="iconfont iconshopcar icon"></i></span>

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
export default {};
</script>

<style lang="scss" scoped>
@import './../common/style/mixin.scss';
.nav-bar {
  width: 100%;
  height: 60px;
  position: fixed;
  background-color: $fc;
  .nav-inner {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 14px;
    .icon {
      display: block;
      font-size: 18px;
      text-align: center;
      &.router-link-active {
        color: $primary;
      }
    }
    .item {
      &.router-link-active {
        color: $primary;
      }
    }
  }
}
</style>
