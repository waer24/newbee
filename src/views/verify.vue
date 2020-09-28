<template>
  <div class="drag" ref="dragDiv">
    <div class="bg"></div>
    <div class="text">{{ confirmWords }}</div>
    <div
      ref="moveDiv"
      @mousedown="mousedownFn($event)"
      class="handler handle_bg"
      :class="{ 'handler_ok_bg': confirmSuccess }"
      style="position:absolute;top:0px;left:0px"
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      beginClientX: 0, // 距离屏幕左端距离
      mouseMoveState: false, // 触发拖动状态的判断
      maxwidth: "", // 拖动最大宽度，依据滑块宽度算出来的
      confirmWords: "拖动滑块验证" /*滑块文字*/,
      confirmSuccess: false,
    };
  },

  mounted() {
    this.maxwidth =
      this.$refs.dragDiv.clientWidth - this.$refs.moveDiv.clientWidth;
    document
      .getElementsByTagName("html")[0]
      .addEventListener("mousemove", this.mouseMoveFn); // 移动端 e.changedTouches[0].clientX
    document
      .getElementsByTagName("html")[0]
      .addEventListener("mouseup", this.mouseUpFn); // 移动端mousemove
  },

  methods: {
    mouseMoveFn(e) {
      if (this.mouseMoveState) {
        let width = e.clientX - this.beginClientX; // 移动端
        if (width > 0 && width <= this.maxwidth) {
          document.getElementsByClassName("handler")[0].style.left =
            width + "px";
          document.getElementsByClassName("bg")[0].style.width = width + "px";
        } else if (width > this.maxwidth) {
          this.successFunction();
        }
      }
    },

    mouseUpFn(e) {
      this.mouseMoveState = false;
      var width = e.clientX - this.beginClientX; // 移动端 e.changedTouches[0].clientX
      if (width < this.maxwidth) {
        document.getElementsByClassName("handler")[0].style.left = 0 + "px";
        document.getElementsByClassName("bg")[0].style.width = 0 + "px";
      }
    },

    mousedownFn(e) {
      if (!this.confirmSuccess) {
        e.preventDefault && e.preventDefault(); // 阻止文件选中，浏览器默认事件
        this.mouseMoveState = true;
        //  this.beginClientX = e.changedTouches[0].clientX; // 移动端
        this.beginClientX = e.clientX;
      }
    },

    successFunction() {
      this.confirmSuccess = true;
      this.confirmWords = " 验证通过";
      if (window.addEventListener) {
        document
          .getElementsByTagName("html")[0]
          .removeEventListener("mousemove", this.mouseMoveFn); // touchmove
        document
          .getElementsByTagName("html")[0]
          .removeEventListener("mouseup", this.mouseUpFn); // 移动端touchend
      } else {
        document
          .getElementsByTagName("html")[0]
          .removeEventListener("mouseup", () => {});
      }
      document.getElementsByClassName("text")[0].style.color = "#fff";
      document.getElementsByClassName("handler")[0].style.left =
        this.maxwidth + "px";
      /*  document.getElementsByClassName("bg")[0].style.width =
        this.maxwidth + "px"; */
    },
  },
};
</script>
<style lang="scss" scoped>
@import './../common/style/mixin.scss';
.drag {
  line-height: 40px;

  position: relative;

  width: 300px;
  height: 40px;
  margin: 0 auto;

  background-color: $verify-drag-color;
  .bg {
    position: absolute;

    width: 40px;
    height: 100%;

    background-color: $verify-bg-color;
  }
  .text {
    position: absolute;

    width: 100%;
    height: 100%;

    user-select: none;
    text-align: center;
  }
  .btn {
    font-family: 'Courier New', Courier, monospace;

    position: absolute;

    width: 40px;
    height: 38px;

    cursor: move;
    user-select: none;
    text-align: center;

    color: #666;
    border: 1px solid #ccc;
    background-color: #fff;
  }
  .handler {
    width: 40px;
    height: 32px;

    cursor: move;

    border: 1px solid #ccc;
  }
  .handler_ok_bg {
    background-color: $verify-drag-color;
  }
  .handler_bg {
    background-color: $verify-bg-color;
  }
}

</style>
