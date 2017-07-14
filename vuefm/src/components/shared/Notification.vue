<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        .notification(:class="classObject")
          slot(name="body") Algo anduvo mal
</template>
<script>
export default {
  props: {
    typeNotification: { type: Number }
  },
  computed: {
    classObject () {
      return (this.typeNotification === 0) ? 'is-danger' : 'is-success'
    }
  }
}
</script>
<style lang="scss" scoped>
  .notification {
    margin: 10px
  }
</style>
