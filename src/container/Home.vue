<template>
  <div class="home">
    <div class="photos">
      <div
        class="row"
        v-for="row in rowNumber"
        :key="row"
        :style="rowStyleHandler">
        <div class="photo"
          v-for="item in rowData(row)"
          :key="item.url"
          @click="openSinglePhoto(item)">
          <figure>
            <img :src="item.url">
          </figure>
        </div>
      </div>
    </div>
    <div :class="loadingClassHandler"></div>
    <SinglePhoto
      v-if="isOpenSinglePhoto"
      :photo="photo"
      @back="clearPhoto"/>
  </div>
</template>

<script>
import { SinglePhoto } from '../components'
import { SCREEN_SIZES, PAGE_SIZE } from '../constants'
import { db } from '../main.js'
export default {
  name: 'Home',
  data () {
    return {
      isLoading: true,
      isShow: true,
      count: 0,
      rowNumber: 0,
      screenWidth: document.body.clientWidth,
      photo: {},
      list: [],
      SCREEN_SIZES,
      PAGE_SIZE
    }
  },
  components: {
    SinglePhoto
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
    },
    isOpenSinglePhoto () {
      return Object.keys(this.photo).length > 0
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
      return this.list.filter((item, index) => index % this.rowNumber === idx - 1)
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
    },
    openSinglePhoto (photo) {
      this.photo = photo
    },
    clearPhoto () {
      this.photo = {}
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
      > .photo {
        @include size(100%, auto);
        position: relative;
        transition: .5s;
        overflow: hidden;
        cursor: pointer;
        &:hover {
          > figure {
            opacity: .4;
          }
        }
        > figure {
          @include size(calc(100% - 16px), auto);
          margin: 8px;
          font-size: 0;
          > img {
            @include size(100%);
            -webkit-filter:grayscale(1)
          }
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
        > .photo {
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
