<template>
  <div class="cart-wrap">
    <v-header :title="name"></v-header>
    <div class="list"></div>
    <footer class="footer">
      <div class="total"></div>
      <div class="nav-wrap">
        <v-nav></v-nav>
      </div>
    </footer>
  </div>
</template>

<script>
import vHeader from "./../views/v-header";
import vNav from "./../views/v-nav";

export default {
  data() {
    return {
      name: "购物车",
    };
  },
  created() {},

  mounted() {},

  computed: {},
  methods: {},
  watch: {},

  components: { vHeader, vNav },
};
</script>
<style lang="scss" scoped>
.cart-wrap {
  position: fixed;

  overflow: hidden;

  width: 100%;
  height: 100%;
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
  }
}

</style>
