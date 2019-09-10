<template>
  <div class="loading">
    <div class="bgc"></div>
    <div class="svg"></div>
  </div>
</template>

<script>
export default {
  name: "Loading"
};
</script>

<style lang="scss" scoped>
@import "../../styles/utils";

.loading {
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
  > .svg {
    @include size(48px);
    @include backgroundImage("../../assets/loading.svg");
    position: absolute;
  }
}
</style>
