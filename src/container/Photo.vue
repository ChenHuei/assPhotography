<template>
  <div class="photo">
    <div class="image">
      <img :src="photo.url">
    </div>
    <div class="description">
      {{photo.create}}
    </div>
    <div
      class="back"
      @click="goHome">
      <div class="icon"></div>
      <span>back</span>
    </div>
  </div>
</template>

<script>
import { db } from '../main.js'
export default {
  name: 'Photo',
  data () {
    return {
      photo: {}
    }
  },
  methods: {
    goHome () {
      this.$router.push({ name: 'home' })
    }
  },
  mounted () {
    db.collection('photos').doc(this.$route.params.id).get().then(res => {
      this.photo = res.data()
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/import';
.photo {
  @include size(100%);
  @include flexCenter;
  flex-direction: column;
  padding: 16px 32px;
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
  > .back {
    @include size(100%, auto);
    @include flexCenter;
    justify-content: flex-start;
    margin-top: 48px;
    transition: .5s;
    cursor: pointer;
    &:hover {
      opacity: .6;
    }
    > .icon {
      @include size(24px);
      @include backgroundImage('../assets/back-to-top.svg');
      transform: rotate(180deg);
    }
    > span {
      margin-left: 8px;
      text-transform: capitalize;
    }
  }
}

@media screen and (max-width: 800px) {
  .photo {
    padding: 0 16px 16px;
  }
}
</style>
