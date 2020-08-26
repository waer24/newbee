<template>
  <div class="header-wrap">
    <span @click="goBack()"><i class="iconfont iconback"></i></span>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.header-wrap {
  overflow: hidden;
  border-bottom: 2px solid #ccc;
}
</style>
