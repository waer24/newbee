<!--  -->
<template>
  <div class="login-wrap">
    login
    <v-header :title="name" class="header"></v-header>
    <div class="content">
      <div class="image">
        <img src="./../assets/logo.png" alt="" width="100%" height="100%" />
      </div>
      <div v-if="type == 'login'" class="login-body">
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
          <!--
              验证滚动条无法滚动，暂时关闭
           -->
          <!--  <div class="verify-wrap">
            <verify></verify>
          </div> -->
          <div class="signup">{{}}</div>
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
              注册
            </van-button>
            <!-- @click="signIn" -->
          </div>
        </van-form>
      </div>
      <div v-else class="login-body">
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
          <!--
              验证滚动条无法滚动，暂时关闭
           -->
          <!--  <div class="verify-wrap">
            <verify></verify>
          </div> -->
          <div class="signup">{{}}</div>
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
              登录
            </van-button>
            <!-- @click="signIn" -->
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from "./../views/v-header";
import { getUserInfo } from "./../api/user.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
      type: "login",
      verify: false, // 验证失败
    };
  },
  created() {},

  mounted() {},
  computed: {},

  watch: {},

  methods: {
    toggleType(v) {
      this.verify = false;
      this.type = v;
    },
    async onSubmit(values) {
      // 每次提交之前需要验证一下验证码是否正确,再看type等于不同值的问题
      if (!this.verify) {
        Toast.fail("验证失败或验证码未填写");
      }
      if (type == "login") {
        const { data } = {
          login_name: values.userName,
          password: this.$md5(values.password),
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-wrap {
  overflow: hidden;
  .content {
    padding: 10px;

    text-align: center;
    .image {
      display: block;

      width: 100px;
      height: 100px;
      margin: 30px auto;
    }
    .login-body {
      padding: 5px;
    }
  }
}

</style>
