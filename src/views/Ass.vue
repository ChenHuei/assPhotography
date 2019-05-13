<template>
  <div class="ass">
    <Topbar/>
    <div class="container">
      <router-view :key="$route.fullPath"/>
    </div>
  </div>
</template>

<script>
import { Topbar } from '../components'
export default {
  name: 'ass',
  components: {
    Topbar
  }
}
</script>
<style lang="scss" scoped>
@import '../styles/import';
.ass {
  @include size(100%);
  color: color(white);
  background-color: color(black);
}
</style>
