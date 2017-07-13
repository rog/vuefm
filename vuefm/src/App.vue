<template lang="pug">
  #app
    VueFmHeader
    VueFmLoader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav.has-shadow
        .container
          input.input.is-large(
              type="text",
              placeholder="Seach song",
              v-model="seachQuery"
            )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
      .container
        VueFmNotification(v-show="showNotification" :message="searchMessage")
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            VueFmTrack(:track="t")
    VueFmFooter
</template>

<script>
import VueFmFooter from '@/components/layout/Footer.vue'
import VueFmHeader from '@/components/layout/Header.vue'
import VueFmTrack from '@/components/Track.vue'

import VueFmNotification from '@/components/shared/Notification.vue'
import VueFmLoader from '@/components/shared/Loader.vue'

import trackService from './services/track'

export default {
  name: 'app',
  components: {
    VueFmFooter,
    VueFmHeader,
    VueFmNotification,
    VueFmTrack,
    VueFmLoader
  },
  data () {
    return {
      seachQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },
  methods: {
    search () {
      if (!this.seachQuery) { return }
      this.isLoading = true
      trackService.search(this.seachQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    }
  },
  computed: {
    searchMessage () {
      let tracksLength = this.tracks.length
      this.showNotification = (tracksLength > 0)
      return `Found: ${this.tracks.length}`
    }
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss"
</style>
