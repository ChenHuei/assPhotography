<template>
  <div class="popover">
    <div class="bgc"></div>
    <div :class="containerClassHandler">
      <h4>{{this.message}}</h4>
      <div class="buttons">
        <div class="button" @click="confirmHandler('YES')">是</div>
        <div class="button" @click="confirmHandler('NO')">否</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popover",
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
.popover {
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
    @include size(40%, 20%);
    @include flexCenter;
    flex-direction: column;
    justify-content: space-around;
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
}
.buttons {
  @include flexCenter;
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
  .popover {
    > .container {
      @include size(60%, 20%);
      > h4 {
        font-size: 20px;
      }
    }
  }

  .buttons {
    @include flexCenter;
    > .button {
      @include size(48px, 24px);
      font-size: 12px;
    }
  }
}
</style>