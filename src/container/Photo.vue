<template>
  <div class="photo">
    <div class="image">
      <img :src="photo.url">
    </div>
    <div class="description">
      {{photo.create}}
    </div>
  </div>
</template>

<script>
import { PHOTOS } from '../constants'
export default {
  name: 'Photo',
  data () {
    return {
      photo: {},
      PHOTOS
    }
  },
  mounted () {
    this.photo = this.PHOTOS.find(item => item.id === parseInt(this.$route.params.id))
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/import';
.photo {
  @include size(100%);
  @include flexCenter;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  > .image {
    @include size(100%);
    @include flexCenter;
    margin-bottom: 48px;
    cursor: pointer;
    > img {
      @include size(100%);
      max-width: 960px;
    }
  }
  > .description {
    @include size(100%, auto);
    @include flexCenter;
    justify-content: flex-start;
    max-width: 960px;
  }
}
</style>
