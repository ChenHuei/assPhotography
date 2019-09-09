<template>
  <div class="admin">
    <Searchbar :keyword.sync="keyword" />
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
