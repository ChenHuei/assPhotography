<template>
  <div class="admin">
    <h4>{{uid}}</h4>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data () {
    return {
      uid: ''
    }
  },
  mounted () {
    this.uid = this.$store.getters.uid
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/import';

</style>
