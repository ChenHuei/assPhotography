<template>
  <div class="alert">
    <div class="bgc"></div>
    <div :class="containerClassHandler">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  data() {
    return {
      isMoving: true
    };
  },
  computed: {
    containerClassHandler() {
      return {
        container: true,
        moving: this.isMoving
      };
    }
  },
  mounted() {
    setTimeout(() => {
      this.isMoving = false;
    }, 10);
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/import";
.alert {
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
  > .container {
    @include size(40%, 15%);
    @include flexCenter;
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: color(white);
    border-radius: 8px;
    transform: translate(-50%, -50%);
    transition: 0.5s;
    box-shadow: 0 2px 8px lighten(color(black), 40);
    z-index: 10;
    &.moving {
      top: 25%;
    }
    > h4 {
      margin: 0;
      text-align: center;
      font-size: 24px;
    }
  }
}
</style>