<template>
  <Black>
    <div :class="containerClassHandler">
      <h4>{{this.message}}</h4>
      <div class="buttons">
        <div class="button" @click="confirmHandler('YES')">是</div>
        <div class="button" @click="confirmHandler('NO')">否</div>
      </div>
    </div>
  </Black>
</template>

<script>
import Black from "../Black";
export default {
  name: "Popover",
  components: { Black },
  props: {
    message: {
      type: String,
      default: "確定是否刪除？"
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
  methods: {
    confirmHandler(ans) {
      this.$emit("confirm", ans);
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
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 2%;
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
.buttons {
  @include flexCenter;
  margin-top: 20px;
  > .button {
    @include size(60px, 36px);
    @include flexCenter;
    margin-right: 12px;
    border: 1px solid color(primary);
    border-radius: 4px;
    transition: 0.5s;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      color: color(white);
      background-color: color(primary);
    }
  }
}
@media screen and (max-width: 659px) {
  .container {
    @include size(60%, 20%);
  }
}
</style>