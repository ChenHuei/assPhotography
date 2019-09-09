<template>
  <div class="searchBar">
    <div class="links">
      <router-link
        v-for="item in ADMIN_ITEMS"
        :key="item.name"
        :to="item.link"
        :class="itemClassHandler(item.link)"
      >{{item.name}}</router-link>
    </div>
    <label :class="searchClassHandler">
      <div class="placeholder">
        <font-awesome-icon icon="search" />
        <span>Search</span>
      </div>
      <input type="text" v-model.trim="keywordHandler" @blur="reset" @focus="toggle" />
    </label>
  </div>
</template>

<script>
import { ADMIN_ITEMS } from "../../constants";
export default {
  name: "SearcbBar",
  props: {
    keyword: {
      type: String,
      required: true
    },
    isHide: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isFocus: false,
      ADMIN_ITEMS
    };
  },
  computed: {
    keywordHandler: {
      get() {
        return this.keyword;
      },
      set(val) {
        this.$emit("update:keyword", val);
      }
    },
    searchClassHandler() {
      return {
        search: true,
        focus: this.isFocus || this.keyword !== "",
        hide: this.isHide
      };
    }
  },
  methods: {
    reset() {
      this.isFocus = false;
    },
    toggle() {
      this.isFocus = !this.isFocus;
    },
    itemClassHandler(path) {
      return {
        item: true,
        active: this.$route.fullPath.indexOf(path) > -1
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/import";
.searchBar {
  @include size(100%, 80px);
  @include flexCenter;
  justify-content: space-between;
  padding: 12px 5vw;
  background-color: color(grey);
  transition: 0.5s;
  > .links {
    @include size(100%);
    @include flexCenter;
    justify-content: flex-start;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    > .item {
      padding: 8px 16px;
      margin-right: 12x;
      color: color(black);
      transition: 0.5s;
      text-decoration: none;
      cursor: pointer;
      &.active {
        color: color(blue);
      }
      &:hover {
        opacity: 0.6;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  > .search {
    @include size(320px, 40px);
    position: relative;
    &.hide {
      display: none;
    }
    &.focus {
      > .placeholder {
        opacity: 0;
      }
    }
    > .placeholder {
      position: absolute;
      left: 24px;
      top: 50%;
      transform: translateY(-50%);
      color: color(grey_dark);
      > svg {
        @include size(16px);
      }
      > span {
        margin-left: 8px;
      }
    }
    > input {
      @include size(100%);
      padding: 8px 16px;
      border: 1px solid color(grey);
      border-radius: 24px;
      outline: none;
      &:focus {
        border: 1px solid color(blue);
        transition: 0.5s;
      }
    }
  }
}

@media screen and (min-width: 660px) and (max-width: 800px) {
  .searchBar {
    padding: 12px 10vw;
  }
}

@media screen and (max-width: 659px) {
  .searchBar {
    > .links {
      font-size: 12px;
      > .item {
        padding: 4px 8px;
        margin-right: 8x;
      }
    }
  }
}
</style>
