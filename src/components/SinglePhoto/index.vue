<template>
  <div class="single">
    <div
      class="bgc"
      @click="back"></div>
    <div class="image">
      <img :src="photo.url">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SinglePhoto',
  props: {
    photo: {
      type: Object,
      required: true
    }
  },
  methods: {
    back () {
      this.$emit('back')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/import';

.single {
  @include size(100%);
  @include fixed;
  @include flexCenter;
  z-index: 10;
  > .bgc {
    @include size(100%);
    @include fixed;
    background-color: color(black);
    opacity: .8;
    cursor: pointer;
  }
  > .image {
    @include size(auto);
    @include flexCenter;
    position: absolute;
    > img {
      @include size(80%);
      box-shadow: 0 10px 20px color(shadow);
      transition: .5s;
    }
  }
}

@media screen and (max-width: 800px) {
  .single {
  > .image {
    > img {
      @include size(80%);
    }
  }
}
}
</style>
