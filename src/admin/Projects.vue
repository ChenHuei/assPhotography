<template>
  <div class="projects">
    <Loading v-if="isLoading" />
    <div class="items">
      <router-link
        class="item"
        v-for="item in list"
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
      <router-link class="item create" :to="routerLinkHanlder('create')">+</router-link>
    </div>
  </div>
</template>

<script>
import { db } from "../main.js";
import { Loading } from "../components";
export default {
  name: "AdminProjects",
  components: {
    Loading
  },
  props: {
    keyword: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isHover: false,
      isLoading: false,
      id: 0,
      projects: []
    };
  },
  computed: {
    list() {
      return this.projects.slice().filter(item => {
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
    this.isLoading = true;
    db.collection("albums")
      .get()
      .then(res => {
        res.docs.forEach(({ id }) => {
          if (id === "default") return;
          db.collection("albums")
            .doc(id)
            .get()
            .then(res => {
              this.projects.push(res.data());
            });
        });
        this.isLoading = false;
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
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 5vw;
  }
}
.item {
  @include size(18vw, 24vw);
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
  &.create {
    @include size(18vw);
    @include flexCenter;
    font-size: 60px;
    border: 1px solid color(primary);
    border-radius: 4px;
  }
}

.cover {
  @include size(18vw);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.name {
  @include size(18vw, 6vw);
  @include flexCenter;
  font-size: 16px;
}

@media screen and (min-width: 801px) and (max-width: 1024px) {
  .item {
    @include size(24vw, 30vw);
    margin: 0 calc(((100vw - 82vw) - 15px) / 2) 24px 0;
    &:nth-child(4n + 4) {
      margin: 0 calc(((100vw - 82vw) - 15px) / 2) 24px 0;
    }
    &:nth-child(3n + 3) {
      margin: 0 0 24px 0;
    }
    &.create {
      @include size(24vw);
    }
  }
  .cover {
    @include size(24vw);
  }
  .name {
    @include size(24vw, 6vw);
  }
}

@media screen and (min-width: 660px) and (max-width: 800px) {
  .projects {
    > .items {
      padding: 5vw 10vw 60px;
    }
  }
  .item {
    @include size(34vw, 44vw);
    margin: 0 calc(((100vw - 88vw) - 15px)) 24px 0;
    &:nth-child(4n + 4),
    &:nth-child(3n + 3) {
      margin: 0 calc(((100vw - 88vw) - 15px)) 24px 0;
    }
    &:nth-child(2n + 2) {
      margin: 0 0 24px 0;
    }
    &.create {
      @include size(34vw);
    }
  }
  .cover {
    @include size(34vw);
  }
  .name {
    @include size(34vw, 10vw);
  }
}

@media screen and (max-width: 659px) {
  .item {
    @include size(48vw, 60vw);
    margin: 0 auto 24px;
    &:nth-child(4n + 4),
    &:nth-child(3n + 3),
    &:nth-child(2n + 2) {
      margin: 0 auto 24px;
    }
    &.create {
      @include size(48vw);
    }
  }
  .cover {
    @include size(48vw);
  }
  .name {
    @include size(48vw, 12vw);
  }
}
</style>
