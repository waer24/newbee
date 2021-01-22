<!--  -->
<template>
  <div class="user-wrap">
    <v-header :title="name"></v-header>
    <div class="user-info">
      <div class="avatar"><i class="iconfont iconmy"></i></div>
      <div class="user-msg">
        <ul>
          <li>
            <p>nicheng:</p>
            <p>13456234562</p>
          </li>
          <li>
            <p>nicheng:</p>
            <p>13456234562</p>
          </li>
          <li>
            <p>nicheng:</p>
            <p>13456234562</p>
          </li>
        </ul>
      </div>
    </div>
    <ul>
      <li class="item" v-for="(item, index) in list" :key="index">
        <span>{{ item }}</span>
        <span> <i class="iconfont iconright"></i></span>
      </li>
    </ul>

    <div class="nav-wrap">
      <v-nav></v-nav>
    </div>
  </div>
</template>

<script>
import vHeader from "./../views/v-header";
import vNav from "./../views/v-nav";

export default {
  data() {
    return {
      name: "我的",
      list: ["我的订单", "账号管理", "地址管理", "关于我们"],
    };
  },
  methods: {},
  components: { vHeader, vNav },
};
</script>
<style lang="scss" scoped>
@import "./../common/style/mixin.scss";
.van-button--info {
  background-color: $primary;
}
.user-wrap {
  overflow: hidden;
  padding: 10px;
  .user-info {
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, #1baeae, #51c7c7);

    .avatar {
      padding-right: 10px;
    }
  }
  .nav-wrap {
    position: fixed;
    bottom: 0rem;

    width: 100%;
    height: 60px;
  }
}
</style>
