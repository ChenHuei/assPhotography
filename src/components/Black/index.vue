<template>
  <div class="black">
    <div class="bgc"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Black"
};
</script>

<style lang="scss" scoped>
@import "../../styles/utils";

.black {
  @include fixed;
  @include size(100vw, 100vh);
  @include flexCenter;
  z-index: 100;
  > .bgc {
    @include fixed;
    @include size(100%);
    background-color: color(black);
    opacity: 0.2;
  }
}
</style>
