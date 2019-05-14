<template>
  <div class="home">
    <div
      class="row"
      v-for="row in rowNumber"
      :key="row"
      :style="rowStyleHandler">
      <router-link
        v-for="item in rowData(row - 1)"
        :key="item.url"
        :to="routerLinkHanlder(item.id)">
        <figure>
          <img :src="item.url">
        </figure>
        <div class="description">
          {{item.create}}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { PHOTOS, SCREEN_SIZES } from '../constants'
export default {
  name: 'Home',
  data () {
    return {
      rowNumber: 0,
      screenWidth: document.body.clientWidth,
      list: [],
      PHOTOS,
      SCREEN_SIZES
    }
  },
  computed: {
    rowStyleHandler () {
      return {
        width: `${100 / this.rowNumber}%`
      }
    }
  },
  methods: {
    resize () {
      this.screenWidth = document.body.clientWidth
      this.rowNumber = this.SCREEN_SIZES.reduce((acc, item, index) => {
        if (this.screenWidth > item) acc += 1
        return acc
      }, 1)
    },
    rowData (idx) {
      return this.list.filter((item, index) => index % this.rowNumber === idx)
    },
    routerLinkHanlder (id) {
      return `/photo/${id}`
    }
  },
  mounted () {
    window.addEventListener('resize', this.resize)
    this.resize()
    this.list = this.PHOTOS
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resize)
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/import';
.home {
  @include size(100%, auto);
  display: flex;
  > .row {
    @include size(auto);
    display: flex;
    flex-direction: column;
    > a {
      @include size(100%, auto);
      position: relative;
      transition: .5s;
      overflow: hidden;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        > figure {
          opacity: .4;
        }
        > .description {
          bottom: 16px;
        }
      }
      > figure {
        @include size(calc(100% - 32px), auto);
        margin: 16px;
        > img {
          @include size(100%);
        }
      }
      > .description {
        @include size(calc(100% - 32px), 56px);
        position: absolute;
        bottom: -48px;
        left: 16px;
        padding: 16px;
        color: color(white);
        line-height: 24px;
        box-sizing: border-box;
        transition: .5s;
      }
    }
  }
}
</style>
