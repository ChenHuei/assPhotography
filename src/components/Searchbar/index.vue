<template>
  <div class="searchBar">
    <div class="path">
      {{adminPathHandler}}
    </div>
    <label :class="searchClassHandler">
      <div class="placeholder">
        <font-awesome-icon icon="search"/>
        <span>Search</span>
      </div>
      <input
        type="text"
        v-model.trim="keywordHandler"
        @blur="reset"
        @focus="toggle">
    </label>
  </div>
</template>

<script>
export default {
  name: 'SearcbBar',
  props: {
    keyword: {
      type: String,
      required: true
    },
    isHide: {
      type: Boolean
    }
  },
  data () {
    return {
      isFocus: false
    }
  },
  computed: {
    keywordHandler: {
      get () {
        return this.keyword
      },
      set (val) {
        this.$emit('keywordChange', val)
      }
    },
    searchClassHandler () {
      return {
        search: true,
        focus: this.isFocus || this.keyword !== '',
        hide: this.isHide
      }
    },
    adminPathHandler () {
      return this.$route.fullPath
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
  justify-content: space-between;
  padding: 12px 60px;
  background-color: color(grey);
  > .path {
    @include size(auto);
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
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
        transition: .5s;
      }
    }
  }
}
</style>
