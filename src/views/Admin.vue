<template>
  <div class="admin">
    <Searchbar/>
  </div>
</template>

<script>
import { Searchbar } from '../components'
export default {
  name: 'Admin',
  data () {
    return {
      uid: ''
    }
  },
  components: {
    Searchbar
  },
  mounted () {
    this.uid = this.$store.getters.uid
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/import';
.admin {
  @include size(100%, auto);
  min-height: 100%;
  color: color(black);
}
</style>
