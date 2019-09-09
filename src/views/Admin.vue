<template>
  <div class="admin">
    <Searchbar :keyword.sync="keyword" :isHide="isHide" />
    <router-view :key="$route.fullPath" :keyword="keyword" />
  </div>
</template>

<script>
import { Searchbar } from "../components";
export default {
  name: "Admin",
  components: {
    Searchbar
  },
  data() {
    return {
      keyword: ""
    };
  },
  computed: {
    isHide() {
      return this.$route.fullPath.split("/").length === 4;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/import";
.admin {
  @include size(100%, auto);
  min-height: 100%;
  color: color(primary);
}
</style>
