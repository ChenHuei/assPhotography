<template>
  <div class="album">
    <div class="list">
      <div
        class="item"
        v-for="item in ALBUMS"
        :key="item.name">
        <div
          class="cover"
          :style="coverStyleHandler(item)"
          @mouseenter="enterHandler(item.id)"
          @mouseleave="leaveHandler"></div>
        <div class="name">{{item.name}}</div>
        <div class="time">{{item.time}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ALBUMS } from '../constants'
export default {
  name: 'Album',
  data () {
    return {
      isHover: false,
      id: 0,
      ALBUMS
    }
  },
  methods: {
    coverStyleHandler (item) {
      const url = this.id === item.id ? this.isHover ? item.hover : item.cover : item.cover
      return {
        'background': `center center url(${url}) no-repeat`,
        'backgroundSize': 'cover'
      }
    },
    enterHandler (id) {
      this.id = id
      this.isHover = true
    },
    leaveHandler () {
      this.isHover = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/import';
.album {
  @include size(100%, auto);
  > .list {
    @include flexCenter;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0 calc(10% - 24px) 0 10%;
    margin-top: 48px;
    overflow: hidden;
    > .item {
      @include size(calc(25% - 24px), 280px);
      margin: 0 24px 48px 0;
      transition: .5s;
      cursor: pointer;
      &:hover {
        opacity: .6;
      }
      &:nth-child(4n + 4) {
        margin: 0 0 48px 0;
      }
      > .cover {
        @include size(100%, 200px);
      }
      > .name {
        margin: 32px 0 16px 0;
        font-size: 16px;
        text-align: center;
      }
      > .time {
        font-size: 12px;
        text-align: center;
        opacity: .6;
      }
    }
  }
}
</style>
