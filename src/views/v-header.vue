<template>
  <div class="header-wrap">
    <span @click="goBack()" class="icon"
      ><i class="iconfont iconback"></i
    ></span>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.header-wrap {
  position: relative;

  overflow: hidden;

  text-align: center;

  border-bottom: 2px solid #ccc;
  .icon {
    position: absolute;
    top: 2px;
    left: 10px;
  }
  .title {
    font-size: 18px;

    display: inline-block;

    letter-spacing: 5px;
  }
}

</style>
