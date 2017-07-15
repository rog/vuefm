const trackMixin = {
  methods: {
    selectTrack () {
      this.$store.commit('setTrack', this.track)
    }
  }
}

export default trackMixin
