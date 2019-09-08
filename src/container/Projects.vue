<template>
  <div class="projects">
    <router-link
      class="item"
      v-for="item in albums"
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
    </router-link>
  </div>
</template>

<script>
import { db } from "../main.js";
export default {
  name: "Projects",
  data() {
    return {
      isHover: false,
      id: 0,
      albums: []
    };
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
      return `/project/${id}`;
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
  @include flexCenter;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 16px 10vw 0;
  overflow: hidden;
  > .item {
    @include size(auto, 26vw);
    margin: 0 calc(((100vw - 80vw) - 40px - 15px) / 2) 24px 0;
    color: color(grey);
    text-decoration: none;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
    &:nth-child(3n + 3) {
      margin: 0 0 24px 0;
    }
    > .cover {
      @include size(20vw);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }
    > .name {
      margin: 36px 0 0 0;
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

@media screen and (min-width: 660px) and (max-width: 800px) {
  .projects {
    > .item {
      @include size(auto, 40vw);
      margin: 0 calc(((100vw - 84vw) - 40px - 15px)) 24px 0;
      &:nth-child(3n + 3) {
        margin: 0 calc(((100vw - 84vw) - 40px - 15px)) 24px 0;
      }
      &:nth-child(2n + 2) {
        margin: 0 0 24px 0;
      }
      > .cover {
        @include size(32vw);
      }
      > .name {
        margin: 28px 0 0 0;
      }
    }
  }
}
@media screen and (max-width: 659px) {
  .projects {
    > .item {
      @include size(auto, 60vw);
      margin: 0 auto 24px;
      &:nth-child(3n + 3) {
        margin: 0 auto 24px;
      }
      &:nth-child(2n + 2) {
        margin: 0 auto 24px;
      }
      > .cover {
        @include size(50vw);
      }
      > .name {
        margin: 28px 0 0 0;
      }
    }
  }
}
</style>
