<template>
  <div class="projects">
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
      </router-link>
    </div>
  </div>
</template>

<script>
import { db } from "../main.js";
export default {
  name: "AdminProjects",
  props: {
    keyword: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isHover: false,
      id: 0,
      albums: []
    };
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
      return `/admin/projects/${id}`;
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
  overflow: hidden;
  > .items {
    @include size(100%, auto);
    @include flexCenter;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 5vw 5vw 60px;
    > .item {
      @include size(auto, 24vw);
      margin: 0 calc(((100vw - 82vw) - 15px) / 3) 24px 0;
      color: color(primary);
      text-decoration: none;
      cursor: pointer;
      &:hover {
        opacity: 0.6;
      }
      &:nth-child(4n + 4) {
        margin: 0 0 24px 0;
      }
      > .cover {
        @include size(18vw);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
      > .name {
        margin: 32px 0 0 0;
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

@media screen and (min-width: 801px) and (max-width: 1024px) {
  .projects {
    > .items {
      > .item {
        @include size(auto, 30vw);
        margin: 0 calc(((100vw - 82vw) - 15px) / 2) 24px 0;
        &:nth-child(4n + 4) {
          margin: 0 calc(((100vw - 82vw) - 15px) / 2) 24px 0;
        }
        &:nth-child(3n + 3) {
          margin: 0 0 24px 0;
        }
        > .cover {
          @include size(24vw);
        }
        > .name {
          margin: 28px 0 0 0;
        }
      }
    }
  }
}

@media screen and (min-width: 660px) and (max-width: 800px) {
  .projects {
    > .items {
      padding: 5vw 10vw 60px;
      > .item {
        @include size(auto, 44vw);
        margin: 0 calc(((100vw - 88vw) - 15px)) 24px 0;
        &:nth-child(4n + 4),
        &:nth-child(3n + 3) {
          margin: 0 calc(((100vw - 88vw) - 15px)) 24px 0;
        }
        &:nth-child(2n + 2) {
          margin: 0 0 24px 0;
        }
        > .cover {
          @include size(34vw);
        }
      }
    }
  }
}
@media screen and (max-width: 659px) {
  .projects {
    > .items {
      > .item {
        @include size(auto, 60vw);
        margin: 0 auto 24px;
        &:nth-child(4n + 4),
        &:nth-child(3n + 3),
        &:nth-child(2n + 2) {
          margin: 0 auto 24px;
        }
        > .cover {
          @include size(48vw);
        }
      }
    }
  }
}
</style>
