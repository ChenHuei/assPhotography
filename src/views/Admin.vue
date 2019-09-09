<template>
  <div class="admin">
    <Searchbar />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import { Searchbar } from "../components";
export default {
  name: "Admin",
  components: {
    Searchbar
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
