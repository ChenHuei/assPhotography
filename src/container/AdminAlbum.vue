<template>
  <div class="album">
    <Searchbar :isHide="true"/>
    <div class="container">
      <div class="navbar">
        <div class="button back">返回</div>
        <div class="button edit">編輯</div>
      </div>
      <div class="information">
        <div class="title">
          <span>相簿名稱</span>
          <input type="text" v-model="album.name">
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
      album: {}
    }
  },
  components: {
    Searchbar
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
    padding: 5%;
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
      > .title {
        @include size(100%, 80px);
        @include flexCenter;
        justify-content: space-between;
      }
    }
  }
}
</style>
