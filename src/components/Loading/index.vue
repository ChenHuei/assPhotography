<template>
  <Black>
    <div class="svg"></div>
  </Black>
</template>

<script>
import Black from "../Black";
export default {
  name: "Loading",
  components: { Black }
};
</script>

<style lang="scss" scoped>
@import "../../styles/utils";
.svg {
  @include size(48px);
  @include backgroundImage("../../assets/loading.svg");
  position: absolute;
}
</style>
