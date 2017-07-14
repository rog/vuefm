<template lang="pug">
  main
    VueFmLoader(v-show="isLoading")
    VueFmNotification(
      v-show="showNotification"
      :typeNotification="typeNotification"
    )
      p(slot="body") {{ searchMessage }}
    section.section(v-show="!isLoading")
      nav.nav
        .container
          input.input.is-large(
            type="text",
            placeholder="Seach song",
            v-model="searchQuery",
            @keyup.enter="search"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
      .container.tracks
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            VueFmTrack(
              v-blur="t.preview_url"
              :class="{ 'is-active': t.id === selectedTrack }",
              :track="t",
              @select="setSelectedTrack"
            )
</template>

<script>
import VueFmTrack from '@/components/Track.vue'

import VueFmNotification from '@/components/shared/Notification.vue'
import VueFmLoader from '@/components/shared/Loader.vue'

import trackService from '@/services/track'

export default {
  name: 'app',
  components: {
    VueFmNotification,
    VueFmTrack,
    VueFmLoader
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      typeNotification: 0,
      notificationMessage: '',
      selectedTrack: ''
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
      if (!this.searchQuery) {
        this.showNotification = true
        this.typeNotification = 0
        return
      }
      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = true
          this.typeNotification = res.tracks.total === 0 ? 0 : 1
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  },
  computed: {
    searchMessage () {
      let tracksLength = this.tracks.length
      return (tracksLength === 0) ? 'No songs found' : `Found: ${this.tracks.length}`
    }
  }
}
</script>

<style lang="scss">
.is-active {
  border: 3px solid #23d160;
}
.tracks {
  margin-top: 35px;
}
</style>
