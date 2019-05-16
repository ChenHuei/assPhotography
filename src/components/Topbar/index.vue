<template>
  <nav class="topbar">
    <h2 @click="goHome">ASS PHOTOGRAPHY</h2>
    <div class="icons">
      <a
        class="icon"
        v-for="icon in HOME_ICONS"
        :key="icon.name"
        :href="icon.link"
        target="_blank">
        <font-awesome-icon :icon="iconHandler(icon.name)"></font-awesome-icon>
      </a>
    </div>
    <div class="items">
      <router-link
        v-for="item in HOME_ITEMS"
        :key="item.name"
        :to="item.link"
        :class="itemClassHandler(item.path)">
        {{item.name}}
      </router-link>
    </div>
  </nav>
</template>

<script>
import { HOME_ICONS, HOME_ITEMS } from '../../constants'
export default {
  name: 'topbar',
  props: {
    active: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      HOME_ICONS,
      HOME_ITEMS
    }
  },
  methods: {
    iconHandler (name) {
      return {
        prefix: 'fab',
        iconName: name
      }
    },
    itemClassHandler (path) {
      return {
        item: true,
        active: path.some(item => item === this.active)
      }
    },
    goHome () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/import';
.topbar {
  @include size(100%, 240px);
  @include flexCenter;
  flex-direction: column;
  padding: 32px;
  box-sizing: border-box;
  > h2 {
    margin: 0;
    font-size: 32px;
    cursor: pointer;
  }
  > .icons {
    margin: 32px 0;
    > .icon {
      margin-right: 24px;
      font-size: 24px;
      color: color(blue);
      transition: .5s;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        color: color(white);
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  > .items {
    @include size(100%, auto);
    @include flexCenter;
    > a {
      padding: 8px 16px;
      margin-right: 24px;
      font-size: 16px;
      color: color(white);
      transition: .5s;
      text-decoration: none;
      cursor: pointer;
      &.active {
        color: color(blue);
      }
      &:hover {
        opacity: .6;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
