<template>
  <div ref="scrollWrap">
    <slot></slot>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

export default {
  props: {
    scrollData: {
      type: Array,
      default: null,
    },
    click: {
      type: Boolean,
      default: true,
    },
    listenScroll: {
      // 参数：{Object} {x, y} 滚动的实时坐标
      type: Boolean,
      default: false,
    },
    probeType: {
      // 滚动的时候派发scroll事件
      type: Number,
      default: 1,
    },
    pullingUp: {
      // 是否滚动到底 用于搜索页面 （在一次上拉加载的动作后，这个时机一般用来去后端请求数据。）
      type: Boolean,
      default: false,
    },
    beforeScroll: {
      type: Boolean,
      default: false,
    },
    refreshDelay: {
      type: Number,
      default: 400,
    },
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  methods: {
    _initScroll() {
      if (!this.$refs.scrollWrap) {
        return;
      }
      this.scroll = new Bscroll(this.$refs.scrollWrap, {
        // scroll must be a globe variable => this.scroll not let scroll =....
        click: this.click,
        probeType: this.probeType,
        stopPropagation: true,
      });
      // 是否需要监听滚动事件？ 需要的话绑定scroll事件，子组件触发它
      /*  pos是bscroll的对象， 包含x, y两个参数; scroll组件监听当前实例一个事件，这个事件是子组件给父组件发射一个名为scrollCompEvent的方法
       */
      if (this.listenScroll) {
        let _this = this;
        this.scroll.on("scroll", (pos) => {
          _this.$emit("scrollevent", pos); // 当前的this是指向scroll组件实例,所有需要事先保存this，让它指向vue实例/ emit传递的函数名称如果和on的名称一致，会导致冲突
        });
      }
      if (this.pullingUp) {
        // 如果触发了pullup 就绑定scrollend事件
        this.scroll.on("scrollend", () => {
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            // maxScrollY为scroll的属性，为负值， + 50为缓冲，即保证前者总是小于后者
            this.$emit("scrollendevent"); // 这只是名称，传递出去
          }
        });
      }
      if (this.beforeScroll) {
        // 增加search的blur情况
        this.scroll.on("beforeScrollStart", () => {
          this.$emit("beforescrollstartevent");
        });
      }
    },

    // 代理scroll的几个方法
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    enable() {
      this.scroll && this.scroll.enable();
    },
    disable() {
      this.scroll && this.scroll.disable();
    },
    scrollTo() {
      // 滚动到指定位置
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement() {
      // 滚动到指定元素，所以需要对外提供方法，否则报错： scrollToElement is not a function
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    },
  },
  watch: {
    // 组件直接调用scroll就行，不必再操心其他的数据刷新，方法都写在scroll中，避免其他组件调用时要命令式的多写代码
    data() {
      setTimeout(() => {
        this.refresh();
      }, this.refreshDelay);
    },
  },
};
</script>
