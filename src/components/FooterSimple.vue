<template>
  <div
    class="
      footer-simple
      max-w-6xl
      mx-auto
      py-6
      md:px-4
      text-center
      md:text-left
      bg-white
      text-sm
    "
  >
    <div class="flex flex-col md:flex-row md:justify-between">
      <p>Made with ❤️ by Alberto García Sola</p>
      <p>© 2021</p>
    </div>
    <p v-if="path === '/project-details'">
      Illustrations from
      <a href="https://absurd.design" target="_blank">absurd.design</a>
    </p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  name: 'FooterSimple',
  setup() {
    const route = useRoute()
    const path = computed(() => route.path)

    return { path }
  },
}
</script>

<style>
.footer-simple {
  border-top: 1px solid #32557f;
}
</style>
