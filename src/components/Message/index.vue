<template>
  <div class="message">
    <div class="bgc"></div>
    <div :class="containerClassHandler">
      <h4>{{this.message}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: {
      type: String,
      default: "儲存成功"
    }
  },
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
.message {
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
    border-radius: 8px;
    background-color: color(white);
    box-shadow: 0 2px 8px lighten(color(black), 40);
    transform: translate(-50%, -50%);
    transition: 0.5s;
    z-index: 10;
    &.moving {
      top: 25%;
    }
    > h4 {
      margin: 0;
      font-size: 24px;
    }
  }
}
</style>