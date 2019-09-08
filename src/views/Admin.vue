<template>
  <div class="admin">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      uid: ""
    };
  },
  mounted() {
    this.uid = window.localStorage.getItem("uid");
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
