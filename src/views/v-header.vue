<!--  -->
<template>
  <div class="header-wrap">
    <i class="iconfont iconlist icon-list"></i>
    <div class="seah">
      <span class="title">新峰商城</span>
      <span class="sub-title">山河无恙，人间皆安</span>
    </div>
    <span class="login color">登录</span>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
@import './../common/style/mixin.scss';

.header-wrap {
  position: -webkit-sticky;
  position: sticky;
  height: 40px;
  margin-bottom: 20px;
  background: $primary;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .icon-list {
    color: $fc; // $primary;
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
  .login {
    color: $fc; //$primary;
    font-size: 16px;
  }
}
</style>
