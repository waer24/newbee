<!--  -->
<template>
  <div class="header-wrap">
    <i class="iconfont iconlist icon-list"></i>
    <div class="seah">
      <span class="title">新峰商城</span>
      <span class="sub-title">山河无恙，人间皆安</span>
    </div>
    <span class="login">登录</span>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
@import './../common/style/mixin.scss';

.header-wrap {
  color: $primary;
  height: 40px;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .login {
    color: $primary;
    font-size: 16px;
  }
  .icon-list {
    color: $primary;
    font-size: 28px;
  }
  .seah {
    margin: 6px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 4px;
    font-weight: 500;
    .title {
      text-indent: 16px;
      font-size: 16px;
      color: $primary;
      padding-right: 5px;
      border-right: 1px solid #666;
    }
    .sub-title {
      font-size: 12px;
      padding: 0 6px;
      color: $global-font-color;
    }
  }
}
</style>
