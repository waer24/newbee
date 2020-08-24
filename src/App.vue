<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide-left',
    };
  },

  watch: {
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        // 下一级到上一级
        this.transitionName = 'slide-left';
      } else if (to.meta.index < from.meta.index) {
        // 上一级到下一级
        this.transitionName = 'slide-right';
      } else {
        this.transitionName = ''; // 同级
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import './common/style/mixin.scss';
#app {
  color: $global-font-color;
}
#nav {
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 999;
}
.router-view {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  -webkit-overfolow-scrolling: touch; /* 控制元素在移动设备上是否使用滚动回弹效果 */
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  height: 100%;
  will-change: transform;
  transition: all 500ms ease;
  position: absolute;
  backface-visibility: hidden; /* 和3D transform效果相关，它用于决定当一个元素的背面面向用户的时候是否可见 */
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
