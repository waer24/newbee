<template>
  <div class="">
    <verify
      @success="success()"
      @error="error()"
      :type="1"
      id="verify"
    ></verify>
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
<style lang="scss">
.cerify-code-panel {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.verify-code-area {
  padding: 10px;
}
.verify-btn {
  display: none;
}

</style>
