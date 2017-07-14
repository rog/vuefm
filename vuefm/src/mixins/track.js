const trackMixin = {
  methods: {
    selectTrack () {
      this.$emit('select', this.track.id)
      this.$bus.$emit('set-track', this.track)
    }
  }
}

export default trackMixin
