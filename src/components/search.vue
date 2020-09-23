<!--  -->
<template>
  <div class="search">
    <header class="header">
      <span class="icon-wrap" @click="goBack()"
        ><i class="iconfont iconback icons"></i
      ></span>
      <form action="/" class="ipt">
        <van-search
          v-model="searchValue"
          show-action
          placeholider="请输入搜索关键词"
          @search="search"
        />
      </form>
    </header>
    <div class="tab">
      <ul>
        <li class="tab-item" v-for="(item, index) in tabList" :key="index" :class="{'active':isActive=== item }">
          {{ tabList[index] }}
        </li>
      </ul>
      <!--  <van-tabs v-model="tabValue" color="#1baeae">
        <van-tab title="推荐"></van-tab>
        <van-tab title="新品">新品</van-tab>
        <van-tab title="价格">价格</van-tab>
      </van-tabs> -->
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      searchValue: "",
      tabValue: "2",
      tabList: ["推荐", "新品", "价格"],
    };
  },

  computed: {},

  watch: {},

  methods: {
    search() {
      Toast("hello");
    },
  },

  created() {},
};
</script>
<style lang="scss" scoped>
@import './../common/style/mixin.scss';
.search {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: $fc;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .icon-wrap {
      flex: 0 0 40px;

      width: 40px;
    }
    .ipt {
      flex: 1;
    }
  }
  .tab {
    padding: 10px;

    text-align: center;
    .tab-item {
      display: inline-block;

      margin-left: -1px;
      padding: 5px 40px;

      color: $primary;
      border: 1px solid $primary;
      background-color: $bc;
    }
    &.active {
      color: $bc;
      background-color: $primary;
    }
  }
}

</style>
