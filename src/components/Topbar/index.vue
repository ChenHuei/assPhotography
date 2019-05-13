<template>
  <nav class="topbar">
    <h2>ASS PHOTOGRAPHY</h2>
    <div class="icons">
      <a
        class="icon"
        v-for="icon in ICONS"
        :key="icon.name"
        :href="icon.link"
        target="_blank">
        <font-awesome-icon :icon="iconHandler(icon.name)"></font-awesome-icon>
      </a>
    </div>
    <div class="items">
      <router-link
        class="item"
        v-for="item in ITEMS"
        :key="item.name"
        :to="item.link">
        {{item.name}}
      </router-link>
    </div>
  </nav>
</template>

<script>
import { ICONS, ITEMS } from '../../constants'
export default {
  name: 'topbar',
  data () {
    return {
      ICONS,
      ITEMS
    }
  },
  methods: {
    iconHandler (name) {
      return {
        prefix: 'fab',
        iconName: name
      }
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
      &:hover {
        color: color(blue);
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
