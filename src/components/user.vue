<!--  -->
<template>
  <div class="user-wrap">
    user页面
  </div>
</template>

<script>
import vHeader from "./../views/v-header";
// import verify from "./../views/verify";

export default {
  data() {
    //这里存放数据
    return {};
  },
  methods: {},
  components: { vHeader } /* verify */,
};
</script>
<style lang="scss" scoped>
@import "./../common/style/mixin.scss";
.van-button--info {
  background-color: $primary;
}
.user-wrap {
  overflow: hidden;
}
</style>
