<template>
  <div class="album">
    <Searchbar :isHide="true"/>
    <div class="container">
      <div class="navbar">
        <div
          class="button back"
          @click="back">
          返回
        </div>
        <div
          class="button edit"
          @click="edit">
          {{editTitleHandler}}
        </div>
      </div>
      <div class="information">
        <div :class="itemClassHandler">
          <span>相簿名稱</span>
          <input type="text" v-model="album.name">
        </div>
        <div :class="itemClassHandler">
          <span>相簿封面(主)</span>
          <figure>
            <img :src="album.cover">
          </figure>
        </div>
        <div :class="itemClassHandler">
          <span>相簿封面(副)</span>
          <figure>
            <img :src="album.hover">
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../main.js'
import { Searchbar } from '../components'
export default {
  name: 'AdminAlbum',
  data () {
    return {
      isEdit: false,
      keyword: '',
      album: {}
    }
  },
  components: {
    Searchbar
  },
  computed: {
    editTitleHandler () {
      return this.isEdit ? '完成' : '編輯'
    },
    itemClassHandler () {
      return {
        item: true,
        edit: this.isEdit
      }
    }
  },
  methods: {
    changeKeyword (e) {
      this.keyword = e
    },
    back () {
      this.$router.go(-1)
    },
    edit () {
      this.isEdit = !this.isEdit
    }
  },
  mounted () {
    db.collection('albums').doc(this.$route.params.id).get().then(res => {
      this.album = res.data()
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/import';
.album {
  @include size(100%, auto);
  > .container {
    @include size(100%, auto);
    padding: 5% 10%;
    > .navbar {
      @include size(100%, auto);
      @include flexCenter;
      justify-content: space-between;
      margin-bottom: 40px;
      > .button {
        @include size(120px, 40px);
        @include flexCenter;
        border: 1px solid color(black);
        border-radius: 8px;
        transition: .5s;
        cursor: pointer;
        &:hover {
          color: color(white);
          background-color: color(black);
        }
      }
    }
    > .information {
      > .item {
        @include size(100%, auto);
        @include flexCenter;
        justify-content: space-between;
        padding: 16px 0;
        > input {
          @include size(calc(25% + 16px), auto);
          padding: 8px 16px;
          border: 1px solid transparent;
          border-radius: 8px;
          outline: none;
          pointer-events: none;
        }
        > figure {
          @include size(25%, auto);
          margin: 0;
          overflow: hidden;
          > img {
            @include size(100%);
          }
        }
        &.edit {
          > input {
            border: 1px solid color(grey);
            pointer-events: auto;
            &:focus {
              border: 1px solid color(blue);
            }
          }
        }
      }
    }
  }
}
</style>
