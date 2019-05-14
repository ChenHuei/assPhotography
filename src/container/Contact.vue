<template>
  <div class="contact">
    <div class="author">
      <div class="left">
        <div
          class="cover"
          :style="coverStyleHandler"></div>
      </div>
      <div class="right">
        <div class="name">{{AUTHOR.name}}</div>
        <div class="englishName">{{AUTHOR.englishName}}</div>
        <div class="links">
          <a
            class="link"
            v-for="link in AUTHOR.links"
            :key="link.name"
            :href="link.url"
            target="_blank">
            <font-awesome-icon
              :icon="iconHandler(link)"
              :class="iconClassHandler(link.tag)"/>
            <span>{{link.name}}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AUTHOR } from '../constants'
export default {
  name: 'Contact',
  data () {
    return {
      AUTHOR
    }
  },
  computed: {
    coverStyleHandler () {
      return {
        'background': `center center url(${this.AUTHOR.cover}) no-repeat`,
        'backgroundSize': 'cover'
      }
    }
  },
  methods: {
    iconHandler (link) {
      return link.isBrand ? { prefix: 'fab', iconName: link.tag } : link.tag
    },
    iconClassHandler (tag) {
      const center = tag === 'mobile-alt' || tag === 'facebook-f'
      return { center }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/import';
.contact {
  @include size(100%);
  @include flexCenter;
  margin-top: 48px;
  > .author {
    @include size(100%, auto);
    @include flexCenter;
    justify-content: space-between;
    max-width: 960px;
    > .left, > .right {
      @include size(50%, 400px);
      padding: 24px;
    }
    > .left {
      > .cover {
        @include size(100%);
      }
    }
    > .right {
      letter-spacing: 1px;
      > .name {
        font-size: 32px;
      }
      > .englishName {
        margin: 8px 0;
        font-size: 16px;
        opacity: .6;
      }
      > .links {
        @include flexCenter;
        align-items: flex-start;
        flex-direction: column;
        margin-top: 24px;
        > a {
          @include flexCenter;
          margin-bottom: 12px;
          color: color(white);
          text-decoration: none;
          cursor: pointer;
          > svg {
            margin-right: 12px;
            font-size: 24px;
            &.center {
              margin: 0 16px 0 2px;
            }
          }
          // 修飾 mail icon 比例不同造成文字不對齊的距離
          &:last-child {
            > svg {
              margin-right: 10px;
            }
          }
          &:hover {
            color: color(blue);
          }
        }
      }
    }
  }
}
</style>
