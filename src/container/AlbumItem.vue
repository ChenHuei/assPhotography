<template>
  <div class="album">
    <div class="title">{{album.name}}</div>
    <figure
      class="photo"
      v-for="photo in album.photos"
      :key="photo.id">
      <img :src="photo.url">
      <span>{{photo.description}}</span>
    </figure>
    <div
      class="top"
      @click="navigateHandler">
      <div class="icon"></div>
      <span>back to top</span>
    </div>
  </div>
</template>

<script>
import { ALBUMS } from '../constants'
export default {
  name: 'Album',
  data () {
    return {
      nowLocation: 0,
      album: {},
      ALBUMS
    }
  },
  methods: {
    onScroll () {
      this.nowLocation = window.pageYOffset
    },
    navigateHandler () {
      const diff = Math.floor(this.nowLocation * 0.1)
      if (diff === 0) {
        window.scroll(0, diff)
      } else {
        this.nowLocation -= diff
        window.scroll(0, this.nowLocation)
        window.requestAnimationFrame(this.navigateHandler)
      }
    }
  },
  mounted () {
    this.album = this.ALBUMS.find(item => item.id === parseInt(this.$route.params.id))
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/import';
.album {
  @include size(100%, auto);
  @include flexCenter;
  flex-direction: column;
  padding: 0 15%;
  cursor: pointer;
  > .title {
    @include size(100%, auto);
    margin-bottom: 24px;
    font-size: 32px;
    font-weight: 900;
    line-height: 40px;
    text-align: center;
    letter-spacing: 1px;
  }
  > .photo {
    @include size(100%, auto);
    position: relative;
    &:hover {
      > img {
        opacity: .5;
      }
      > span {
        opacity: 1;
      }
    }
    > img {
      @include size(100%);
      transition: .5s;
    }
    > span {
      position: absolute;
      left: 50%;
      bottom: 50%;
      transform: translatex(-50%) translateY(-50%);
      color: color(white);
      font-size: 20px;
      letter-spacing: 1px;
      opacity: 0;
      transition: .5s;
    }
  }
  > .top {
    @include size(calc(100% + 40%), 80px);
    @include flexCenter;
    transition: .5s;
    cursor: pointer;
    &:hover {
      opacity: .6;
    }
    > .icon {
      @include size(40px);
      @include backgroundImage('../assets/back-to-top.svg');
      transform: rotate(-90deg);
    }
    > span {
      margin-left: 16px;
      text-transform: capitalize;
    }
  }
}
</style>
