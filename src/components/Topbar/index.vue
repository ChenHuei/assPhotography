<template>
  <nav class="topbar">
    <div class="title" @click="goHome">ASS PHOTOGRAPHY</div>
    <div class="icons">
      <a class="icon" v-for="icon in HOME_ICONS" :key="icon.name" :href="icon.link" target="_blank">
        <font-awesome-icon :icon="iconHandler(icon.name)"></font-awesome-icon>
      </a>
    </div>
    <div class="items">
      <router-link
        v-for="item in HOME_ITEMS"
        :key="item.name"
        :to="item.link"
        :class="itemClassHandler(item.path)"
      >{{item.name}}</router-link>
    </div>
  </nav>
</template>

<script>
import { HOME_ICONS, HOME_ITEMS } from "../../constants";
export default {
  name: "topbar",
  props: {
    active: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      HOME_ICONS,
      HOME_ITEMS
    };
  },
  methods: {
    iconHandler(name) {
      return {
        prefix: "fab",
        iconName: name
      };
    },
    itemClassHandler(path) {
      return {
        item: true,
        active: path.some(item => item === this.active)
      };
    },
    goHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/import";
.topbar {
  @include size(100%, 240px);
  @include flexCenter;
  flex-direction: column;
  padding: 48px 32px 32px;
  > .title {
    @include size(100%, 40px);
    @include flexCenter;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 2px;
    cursor: pointer;
  }
  > .icons {
    margin: 28px 0;
  }
  > .items {
    @include size(100%, auto);
    @include flexCenter;
  }
}

.icon,
.item {
  margin-right: 24px;
  color: color(blue);
  transition: 0.5s;
  text-decoration: none;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
}

.icon {
  font-size: 24px;
  color: color(blue);
  &:hover {
    color: color(grey);
  }
}

.item {
  padding: 8px 16px;
  font-size: 16px;
  color: color(grey);
  &.active {
    color: color(blue);
  }
  &:hover {
    opacity: 0.6;
  }
}

@media screen and (max-width: 659px) {
  .topbar {
    > .title {
      font-size: 24px;
    }
    > .icons {
      margin: 20px 0;
    }
  }
  .item {
    margin-right: 16px;
  }
}
</style>
