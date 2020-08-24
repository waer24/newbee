<template>
  <div class="home-wrap">
    <v-header></v-header>
    <section class="content">
      <v-swiper></v-swiper>
    </section>
    <footer class="footer"><v-nav></v-nav></footer>

    <router-view></router-view>
  </div>
</template>

<script>
import vNav from './../views/v-nav';
import vHeader from './../views/v-header';
import vSwiper from './../views/v-swiper';

export default {
  components: { vNav, vHeader, vSwiper },
};
</script>

<style scoped lang="scss">
@import './../common/style/mixin.scss';

.home-wrap {
  background-color: $home-bg;
  .content {
    min-height: calc(100vh - 60px); // css stickey
  }
  .footer {
    height: 60px; // css stickey
    overflow: hidden;
  }
}
</style>
