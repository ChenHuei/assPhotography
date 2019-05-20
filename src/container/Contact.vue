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
            :target="targetHandler(link.tag)">
            <font-awesome-icon
              :icon="iconHandler(link)"
              :class="iconClassHandler(link.tag)"/>
            <span>{{link.name}}</span>
          </a>
        </div>
        <div class="description">
          <div
            class="row"
            v-for="row in AUTHOR.description"
            :key="row">
            {{row}}
          </div>
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
    },
    targetHandler (tag) {
      return tag === 'envelope' ? '' : '_blank'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/import';
.contact {
  @include size(100%);
  @include flexCenter;
  margin-top: 16px;
  padding: 0 10%;
  > .author {
    @include size(100%, auto);
    @include flexCenter;
    justify-content: space-between;
    max-width: 960px;
    > .left, > .right {
      @include size(50%, 420px);
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
          color: color(grey);
          text-decoration: none;
          cursor: pointer;
          > svg {
            margin-right: 12px;
            font-size: 20px;
            &.center {
              margin: 0 16px 0 2px;
            }
          }
          > span {
            font-size: 16px;
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
      > .description {
        margin-top: 16px;
        > .row {
          font-size: 14px;
          line-height: 24px;
          &:last-child {
            line-height: 60px;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 660px) and (max-width: 800px) {
  .contact {
    margin: 0;
    > .author {
      flex-direction: column;
      > .left, > .right {
        @include size(100%, 420px);
      }
      > .left {
        padding: 0 24px;
        margin-bottom: 24px;
      }
    }
  }
}

@media screen and (max-width: 659px) {
  .contact {
    margin: 0;
    padding: 0;
    > .author {
      flex-direction: column;
      > .left, > .right {
        @include size(100%, 420px);
      }
      > .left {
        padding: 0 24px;
        margin-bottom: 24px;
      }
      > .right {
        > .links {
          > a {
            > span {
              font-size: 13px;
            }
          }
        }
        > .description {
          > .row {
            font-size: 10px;
          }
        }
      }
    }
  }
}
</style>
