<template lang="pug">
  section.hero.is-success
    .hero-head
      header.nav
        .container
          .nav-left
            .nav-item
              strong VueFM
          .nav-right.nav-menu
    .hero-body
      .container.has-text-centered
        h1.title VueFM
        h2.subtitle Vue music search
        VueFmPlayer
</template>

<script>
import VueFmPlayer from '@/components/Player.vue'
export default {
  components: { VueFmPlayer }
}
</script>
