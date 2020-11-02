<!--  -->
<template>
  <div class="login-wrap">
    <v-header
      :title="type === 'login' ? '登录' : '注册'"
      class="header"
    ></v-header>
    <div class="content">
      <div class="image">
        <img src="./../assets/logo.png" alt="" width="100%" height="100%" />
      </div>
      <div v-if="type == 'login'" class="login-body">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            name="password"
            type="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div class="verify-wrap">
            <v-verify
              ref="verify"
              @success="verifySuccess"
              @error="verifyError"
            ></v-verify>
          </div>
          <div style="margin: 16px;">
            <div class="link-register" @click="toggleType('register')">
              立即注册
            </div>
            <van-button round block type="info" native-type="submit">
              登录
            </van-button>
            <!-- @click="signIn" -->
          </div>
        </van-form>
      </div>
      <div v-else class="login-body">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div class="verify-wrap">
            <v-verify
              ref="verify"
              @success="verifySuccess"
              @error="verifyError"
            ></v-verify>
          </div>
          <div style="margin: 16px;">
            <div class="link-register" @click="toggleType('login')">
              已有登录账号
            </div>
            <van-button round block type="info" native-type="submit">
              注册
            </van-button>
            <!-- @click="signIn" -->
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
import vVerify from "./../views/v-verify";
import { login, register } from "./../api/user";
import { Toast } from "vant";
import vHeader from "./../views/v-header";
import { setLocal } from "./../common/js/utils.js";

export default {
  components: { vVerify, vHeader },
  data() {
    return {
      type: "login",
      verify: false, // 验证失败
      username: "",
      password: "",
      /*  username1: "",
      password1: "", */
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

    dealVerify() {
      // 执行验证码的验证，通过 this.verify 知道验证码是否填写正确
      this.$refs.verify.check(); // 调用 子组件的方法
    },
    async onSubmit(values) {
      // 每次提交之前需要验证一下验证码是否正确,再看type等于不同值的问题
      this.dealVerify();
      if (!this.verify) {
        Toast.fail("验证失败或验证码未填写");
        return;
      }
      if (this.type == "login") {
        //验证登录信息
        const { data } = await login({
          loginName: values.username,
          passwordMd5: this.$md5(values.password), //在使用md5进行加密的时候，会报input is invalid type错误，最后发现md5()参数必须为字符串
        }).catch((e) => {
          console.log(e);
        });
        setLocal("token", data);
        window.location.href = "/"; // 返回当前位置
        console.log("over----");
      } else {
        const { data } = await register({
          name: values.username,
          password: values.password,
        });
        Toast.success("注册成功");
        console.log(data);
        // 跳转到登录页面
        this.type = "login";
      }
    },
    verifySuccess() {
      this.verify = true;
    },
    verifyError() {
      this.verify = false;
    },
  },
  /*
  7800
  */
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
      .van-field__control {
        line-height: 28px;
      }
    }
    .link-register {
      font-size: 14px;
      margin-bottom: 20px;
      color: #1989fa;
      display: inline-block;
    }
  }
}
</style>
