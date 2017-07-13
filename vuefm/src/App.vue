<template lang="pug">
  #app
    section.section
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
        p
          small {{ searchMessage }}
        .columns
          .column(v-for="t in tracks")
            | {{ t.name }} - {{ t.artists[0].name }}
</template>

<script>
import trackService from './services/track'

export default {
  name: 'app',
  data () {
    return {
      seachQuery: '',
      tracks: []
    }
  },
  methods: {
    search () {
      if (!this.seachQuery) { return }
      trackService.search(this.seachQuery)
        .then(res => {
          this.tracks = res.tracks.items
        })
    }
  },
  computed: {
    searchMessage () {
      return `Found: ${this.tracks.length}`
    }
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss"
</style>
