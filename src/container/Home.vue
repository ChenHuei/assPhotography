<template>
  <div class="home">
    <div class="photos">
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
    <div :class="loadingClassHandler"></div>
  </div>
</template>

<script>
import { SCREEN_SIZES, PAGE_SIZE } from '../constants'
import { db } from '../main.js'
export default {
  name: 'Home',
  data () {
    return {
      isLoading: true,
      count: 0,
      rowNumber: 0,
      screenWidth: document.body.clientWidth,
      list: [],
      SCREEN_SIZES,
      PAGE_SIZE
    }
  },
  computed: {
    rowStyleHandler () {
      return {
        width: `${100 / this.rowNumber}%`
      }
    },
    loadingClassHandler () {
      return {
        loading: true,
        show: this.isLoading
      }
    },
    startIndex () {
      return (this.count - 1) * this.PAGE_SIZE
    },
    endIndex () {
      return this.count * this.PAGE_SIZE
    }
  },
  methods: {
    onResize () {
      this.screenWidth = document.body.clientWidth
      this.rowNumber = this.SCREEN_SIZES.reduce((acc, item, index) => {
        if (this.screenWidth > item) acc += 1
        return acc
      }, 1)
    },
    onScroll () {
      if (this.isLoading) return false
      if (window.pageYOffset + window.innerHeight > document.body.scrollHeight - window.innerHeight / 2) {
        this.isLoading = true
        this.fetchPhotos()
      }
    },
    rowData (idx) {
      return this.list.filter((item, index) => index % this.rowNumber === idx)
    },
    routerLinkHanlder (id) {
      return `/photo/${id}`
    },
    fetchPhotos () {
      this.count++
      db.collection('photos').orderBy('create', 'desc').limit(this.endIndex).get().then(res => {
        res.docs.slice(this.startIndex, this.endIndex).forEach(({ id }) => {
          db.collection('photos').doc(id).get().then(res => {
            this.list.push(res.data())
          })
        })
        this.isLoading = false
      })
    }
  },
  mounted () {
    window.addEventListener('resize', this.onResize)
    window.addEventListener('scroll', this.onScroll)
    this.fetchPhotos()
    this.onResize()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/import';
.home {
  @include size(100%, auto);
  position: relative;
  display: flex;
  flex-direction: column;
  > .photos {
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
          color: color(grey);
          line-height: 24px;
          box-sizing: border-box;
          transition: .5s;
        }
      }
    }
  }
  > .loading {
    @include size(100%, 60px);
    @include flexCenter;
    position: absolute;
    left: 10px;
    bottom: -90px;
    background: center center url('../assets/loading.svg') no-repeat;
    background-size: contain;
    opacity: 0;
    transform: translateY(-50%);
    transition: .5s;
    &.show {
      opacity: 1;
    }
  }
}

@media screen and (max-width: 800px) {
  .home {
    > .photos {
      > .row {
        > a {
          &:first-child {
            > figure {
              margin: 0 16px 16px;
            }
          }
        }
      }
    }
  }
}
</style>
