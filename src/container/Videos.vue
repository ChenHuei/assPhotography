<template>
  <div class="videos">
    <router-link
      class="video"
      v-for="video in VIDEOS_DATA"
      :key="video.id"
      :to="routerLinkHandler(video.id)">
      <div
        class="cover"
        :style="coverStyleHandler(video)">
      </div>
      <div class="name">{{video.title}}</div>
      <div class="time">{{video.time}}</div>
    </router-link>
  </div>
</template>

<script>
import { VIDEOS_DATA } from '../constants'
export default {
  name: 'Videos',
  data () {
    return {
      VIDEOS_DATA
    }
  },
  methods: {
    routerLinkHandler (id) {
      return `/videos/${id}`
    },
    coverStyleHandler (item) {
      return {
        'backgroundImage': `url(${item.cover})`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/import';

.videos {
  @include size(100%, auto);
  @include flexCenter;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 16px 10% 0;
  overflow: hidden;
  > .video {
    @include size(calc(25% - 24px), 20vw);
    margin: 0 24px 48px 0;
    color: color(grey);
    text-decoration: none;
    cursor: pointer;
    &:hover {
      opacity: .6;
    }
    &:nth-child(4n + 4) {
      margin: 0 0 48px 0;
    }
    > .cover {
      @include size(100%, 12vw);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }
    > .name {
      @include flexCenter;
      @include size(100%, 64px);
      font-size: 16px;
      line-height: 24px;
      text-align: center;
    }
    > .time {
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      opacity: .6;
    }
  }
}
</style>
