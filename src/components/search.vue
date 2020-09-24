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
      <!--  <ul>
        <li
          class="tab-item"
          v-for="(item, index) in menu"
          :key="index"
          :class="{ active: isActive === (item.value ? true : false) }"
          @click="
            isActive = item.value;
            currentComp = item.comp;
          "
        >
          {{ item.name }}
        </li>
      </ul> -->
      <!-- TODO 暂时关闭，解决了user的问题再打开 -->
      <div :is="currentComp" class="tab-text"></div>
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
      isActive: "1", // 当前选中的li标签
      currentComp: "div", // 当前选中的组件
      /*  menu: [
        { name: "推荐", value: "1", comp: "recommand" },
        { name: "新品", value: "2", comp: "newGoods" },
        { name: "价格", value: "3", comp: "goodsPrice" },
      ],
      comp需要不同的组件传递，暂时先做user，才有参数
      */
    };
  },

  methods: {
    search() {
      Toast("hello");
    },
  },
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
      &.active {
        color: $bc;
        background-color: $primary;
      }
    }
    .tab-text {
      padding: 10px;
    }
  }
}

</style>
