<template>
  <div class="video">
    <div class="top">
      <div class="title">{{target.title}}</div>
      <div
        class="back"
        @click="goVideos">
        <div class="icon"></div>
        Back
      </div>
    </div>
    <iframe
      :width="iframeWidth"
      :height="iframeHeight"
      :src="iframeUrl"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</template>

<script>
import { VIDEOS_DATA } from '../constants'
export default {
  name: 'Video',
  data () {
    return {
      id: 0,
      VIDEOS_DATA
    }
  },
  computed: {
    target () {
      return this.VIDEOS_DATA.find(item => item.id === parseInt(this.id))
    },
    iframeWidth () {
      return document.body.clientWidth * 0.8
    },
    iframeHeight () {
      return (document.body.clientHeight - 240) * 0.8
    },
    iframeUrl () {
      return this.target ? this.target.url : ''
    }
  },
  methods: {
    goVideos () {
      this.$router.push({ name: 'videos' })
    }
  },
  mounted () {
    this.id = this.$route.params.id
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/import';

.video {
  @include size(100%, auto);
  @include flexCenter;
  flex-direction: column;
  padding: 0 10%;
  > .top {
    @include size(100%, auto);
    @include flexCenter;
    position: relative;
    margin-bottom: 28px;
    line-height: 40px;
    letter-spacing: 2px;
    > .title {
      font-size: 32px;
      font-weight: 900;
    }
    > .back {
      position: absolute;
      left: 0;
      top: 50%;
      display: flex;
      font-size: 20px;
      font-weight: 500;
      transform: translate(0, -50%);
      cursor: pointer;
      &:hover {
        opacity: .8;
      }
      > .icon {
        @include size(16px);
        @include backgroundImage('../assets/back-to-top.svg');
        margin: 12px 12px 0 0;
        transform: rotate(180deg);
      }
    }
  }
}
</style>
