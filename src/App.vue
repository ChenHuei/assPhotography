<template>
  <div id="app">
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './styles/import';
#app {
  @include size(100%, 100vh);
  font-family: $font-family;
}
</style>
