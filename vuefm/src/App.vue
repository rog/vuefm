<template lang="pug">
  #app
    VueFmHeader
    router-view
    VueFmFooter
</template>

<script>
import VueFmFooter from '@/components/layout/Footer.vue'
import VueFmHeader from '@/components/layout/Header.vue'

export default {
  name: 'app',
  components: {
    VueFmFooter,
    VueFmHeader
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";
.is-active {
  border: 3px solid #23d160;
}
.tracks {
  margin-top: 35px;
}
</style>
