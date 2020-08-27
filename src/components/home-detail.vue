<template>
  <div class="detail-wrap">
    <v-header></v-header>
  </div>
</template>

<script>
import vHeader from './../views/v-header';

export default {
  components: {
    vHeader,
  },
};
</script>

<style lang="scss" scoped>
@import './../common/style/mixin.scss';

.detail-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: $fc;
}
</style>
