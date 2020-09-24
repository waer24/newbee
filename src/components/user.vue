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
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
              提交
            </van-button>
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from "./../views/v-header";
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
    onSubmit(values) {
      console.log(values);
    },
  },
  components: { vHeader },
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
    }
  }
}

</style>
