<template>
  <div class="single">
    <div class="bgc" @click="back"></div>
    <div class="photo">
      <img class="image" :src="photo.url" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SinglePhoto",
  props: {
    photo: {
      type: Object,
      required: true
    }
  },
  methods: {
    back() {
      this.$emit("back");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/import";

.single {
  @include fixed;
  @include size(100vw, 100vh);
  @include flexCenter;
  z-index: 100;
  > .bgc {
    @include fixed;
    @include size(100%);
    background-color: color(black);
    opacity: 0.8;
    cursor: pointer;
  }
  > .photo {
    @include size(auto);
    @include flexCenter;
    position: absolute;
    > .image {
      @include size(80%);
      box-shadow: 0 10px 20px color(shadow);
      transition: 0.5s;
    }
  }
}
</style>
