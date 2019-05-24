<template>
  <div class="searchBar">
    <div class="left"></div>
    <div class="right">
      <label :class="searchClassHandler">
        <div class="placeholder">
          <font-awesome-icon icon="search"/>
          <span>Search</span>
        </div>
        <input
          type="text"
          v-model="keyword"
          @blur="reset"
          @focus="toggle">
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearcbBar',
  data () {
    return {
      isFocus: false,
      keyword: ''
    }
  },
  computed: {
    searchClassHandler () {
      return {
        search: true,
        focus: this.isFocus
      }
    }
  },
  methods: {
    reset () {
      this.isFocus = false
    },
    toggle () {
      this.isFocus = !this.isFocus
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/import';
.searchBar {
  @include size(100%, 80px);
  @include flexCenter;
  justify-content: space-around;
  background-color: color(grey);
  > .left {
    @include size(160px, 100%);
    background-color: color(red);
  }
  > .right {
    @include size(calc(100% - 160px), 100%);
    @include flexCenter;
    justify-content: flex-end;
    padding: 12px 48px;
    > .search {
      @include size(320px, 40px);
      position: relative;
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
          transition: .5s;
        }
      }
    }
  }
}
</style>
