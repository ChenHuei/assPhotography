<template>
  <div class="ass">
    <Topbar :active="active"/>
    <div class="container">
      <router-view :key="$route.fullPath"/>
    </div>
  </div>
</template>

<script>
import { Topbar } from '../components'
export default {
  name: 'ass',
  data () {
    return {
      active: ''
    }
  },
  components: {
    Topbar
  },
  mounted () {
    this.active = this.$route.name
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/import';
.ass {
  @include size(100%, auto);
  min-height: 100%;
  color: color(grey);
  background-color: color(black);
  > .container {
    @include size(100%, auto);
    min-height: calc(100% - 240px);
    padding: 0 20px 80px;
    box-sizing: border-box;
  }
}
</style>
