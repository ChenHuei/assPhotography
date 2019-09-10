<template>
  <div class="title">{{title}}</div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/import";

.title {
  @include size(128px, auto);
  @include flexCenter;
  padding: 6px 12px;
  margin: 0 36px 12px 0;
  color: color(white);
  background-color: color(blue);
  border: 1px solid color(blue);
  border-radius: 8px;
  letter-spacing: 1px;
}
</style>