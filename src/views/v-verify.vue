<template>
  <verify
    ref="loginVerifyRef"
    @success="success()"
    @error="error()"
    :type="1"
    :codeLength="4"
    id="verify"
  ></verify>
</template>

<script>
import verify from "vue2-verify";

export default {
  components: { verify },
  data() {
    return {};
  },

  computed: {},

  watch: {},

  methods: {
    success() {
      this.$emit("success");
    },
    error() {
      this.$emit("error");
    },
    check() {
      this.$refs.loginVerifyRef.$refs.instance.checkCode(); //verify自带的方法
    },
  },

  created() {},

  mounted() {},
};
</script>
<style lang="scss">
/* 去掉了scope，重置部分样式 */
.cerify-code-panel {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.verify-code-area {
  padding: 10px;
}
.verify-btn {
  display: none;
}
</style>
