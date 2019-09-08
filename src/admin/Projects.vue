<template>
  <div class="projects">
    <Searchbar :keyword.sync="keyword" />
    <div class="items">
      <router-link
        class="item"
        v-for="item in showAlbums"
        :key="item.name"
        :to="routerLinkHanlder(item.id)"
      >
        <div
          class="cover"
          :style="coverStyleHandler(item)"
          @mouseenter="enterHandler(item.id)"
          @mouseleave="leaveHandler"
        ></div>
        <div class="name">{{item.name}}</div>
        <div class="time">{{item.time}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { db } from "../main.js";
import { Searchbar } from "../components";
export default {
  name: "AdminProjects",
  data() {
    return {
      isHover: false,
      id: 0,
      keyword: "",
      albums: []
    };
  },
  components: {
    Searchbar
  },
  computed: {
    showAlbums() {
      return this.albums.slice().filter(item => {
        return item.name.toLowerCase().indexOf(this.keyword.toLowerCase()) > -1;
      });
    }
  },
  methods: {
    coverStyleHandler(item) {
      const url =
        this.id === item.id
          ? this.isHover
            ? item.hover
            : item.cover
          : item.cover;
      return {
        backgroundImage: `url(${url})`
      };
    },
    enterHandler(id) {
      this.id = id;
      this.isHover = true;
    },
    leaveHandler() {
      this.isHover = false;
    },
    routerLinkHanlder(id) {
      return `/admin/${id}`;
    }
  },
  mounted() {
    db.collection("albums")
      .get()
      .then(res => {
        res.docs.forEach(({ id }) => {
          db.collection("albums")
            .doc(id)
            .get()
            .then(res => {
              this.albums.push(res.data());
            });
        });
      });
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/import";
.projects {
  @include size(100%, auto);
  min-height: 100%;
  overflow: hidden;
  > .items {
    @include size(100%, auto);
    @include flexCenter;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 5% 10%;
    > .item {
      @include size(calc(25% - 24px), 280px);
      margin: 0 24px 48px 0;
      color: color(primary);
      text-decoration: none;
      cursor: pointer;
      &:hover {
        opacity: 0.6;
      }
      &:nth-child(4n + 4) {
        margin: 0 0 48px 0;
      }
      > .cover {
        @include size(100%, 200px);
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
        opacity: 0.6;
      }
    }
  }
}
</style>
