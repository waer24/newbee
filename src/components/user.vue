<!--  -->
<template>
  <div class="user-wrap">
    <!--   <header class="header">
      <span class="icon-wrap" @click="goBack()"
        ><i class="iconfont iconback icons"></i
      ></span>
      <p class="login">登录</p>
    </header> -->
    <v-header :title="name" class="header"></v-header>
    <div class="content">
      <div class="image">
        <img src="./../assets/logo.png" alt="" width="100%" height="100%" />
      </div>
      <div class="input-item">

      </div>
    </div>
  </div>
</template>

<script>
import vHeader from "./../views/v-header";
// import verify from "./../views/verify";

export default {
  data() {
    //这里存放数据
    return {
      name: "登录",
      username: "", //  登录用户名
      password: "", // 登录密码
    };
  },
  methods: {
    toggleText() {
      // return userId ? `已有登录账号` : `立即注册`;
    },
    onSubmit(values) {
      console.log(values);
    },
  },
  components: { vHeader } /* verify */,
};
</script>
<style lang="scss" scoped>
@import './../common/style/mixin.scss';
.van-button--info {
  background-color: $primary;
}
.user-wrap {
  overflow: hidden;
  .header {
    line-height: 38px;

    height: 40px;

    .icon-wrap {
      flex: 0 0 40px;

      width: 40px;
    }
    .login {
      font: 18px;
    }
  }
  .content {
    padding: 10px;

    text-align: center;
    .image {
      display: block;

      width: 100px;
      height: 100px;
      margin: 30px auto;
    }
    .input-item {
      overflow: hidden;
      .verify-wrap {
        overflow: hidden;
      }
      .signup {
        font-size: 16px;

        color: $verify-bg-color;
      }
    }
  }
}

</style>
