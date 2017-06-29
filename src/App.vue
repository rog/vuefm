<template lang="pug">
#app
  img(src='./assets/logo.png')
  h1 VueFM
  select(v-model="selectedCountry")
    option(v-for="country in countries" :value="country.value") {{ country.name }}
  spinner(v-show="loading")
  ul
    artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")
</template>

<script>
import Spinner from './components/Spinner.vue'
import Artist from './components/Artist.vue'
import getArtists from './api'

export default {
  name: 'app',
  data () {
    return {
      artists: [],
      countries: [
        {name: 'México', value: 'mexico'},
        {name: 'España', value: 'spain'},
        {name: 'Japón', value: 'japan'}
      ],
      selectedCountry: 'mexico',
      loading: true
    }
  },
  components: {
    Artist,
    Spinner
  },
  methods: {
    refreshArtist() {
      const self = this
      self.loading = true
      self.artists = []
      getArtists(this.selectedCountry)
        .then(function(artists) {
          self.artists = artists
          self.loading = false
        })
    }
  },
  mounted () {
    this.refreshArtist()
  },
  watch: {
    selectedCountry() {
      this.refreshArtist()
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
