<template>
  <div class="list">
    <router-link
      class="item"
      v-for="item in albums"
      :key="item.name"
      :to="routerLinkHanlder(item.id)">
      <div
        class="cover"
        :style="coverStyleHandler(item)"
        @mouseenter="enterHandler(item.id)"
        @mouseleave="leaveHandler">
      </div>
      <div class="name">{{item.name}}</div>
      <div class="time">{{item.time}}</div>
    </router-link>
  </div>
</template>

<script>
import { db } from '../main.js'
export default {
  name: 'List',
  data () {
    return {
      isHover: false,
      id: 0,
      albums: []
    }
  },
  methods: {
    coverStyleHandler (item) {
      const url = this.id === item.id ? this.isHover ? item.hover : item.cover : item.cover
      return {
        'backgroundImage': `url(${url})`
      }
    },
    enterHandler (id) {
      this.id = id
      this.isHover = true
    },
    leaveHandler () {
      this.isHover = false
    },
    routerLinkHanlder (id) {
      return `/project/${id}`
    }
  },
  mounted () {
    db.collection('albums').get().then(res => {
      res.docs.forEach(({ id }) => {
        db.collection('albums').doc(id).get().then(res => {
          this.albums.push(res.data())
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/import';
.list {
  @include size(100%, auto);
  @include flexCenter;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 16px 10% 0;
  overflow: hidden;
  > .item {
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

@media screen and (min-width: 660px) and (max-width: 800px) {
  .list {
    padding: 0 10%;
    > .item {
      @include size(calc(50% - 12px), 280px);
      &:nth-child(2n+ 2) {
        margin: 0 0 48px 0;
      }
    }
  }
}
@media screen and (max-width: 659px) {
  > .list {
    padding: 0 10%;
    > .item {
      @include size(100%, 280px);
      margin: 0 0 48px 0;
    }
  }
}
</style>
