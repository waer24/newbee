<template>
  <div class="">
    <verify @success="success()" @error="error()" :type="1"></verify>
  </div>
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
  },

  created() {},

  mounted() {},
};
</script>
<style lang="scss" scoped></style>
