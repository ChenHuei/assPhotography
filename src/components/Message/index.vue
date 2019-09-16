<template>
  <Black>
    <div :class="containerClassHandler">
      <h4>{{this.message}}</h4>
    </div>
  </Black>
</template>

<script>
import Black from "../Black";
export default {
  name: "Message",
  components: { Black },
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
.container {
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

@media screen and (max-width: 659px) {
  .container {
    @include size(60%, 15%);
  }
}
</style>