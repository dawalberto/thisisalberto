<template>
  <menu-bar class="sticky top-0" />
  <router-view />
</template>

<script>
import MenuBar from '@/components/MenuBar.vue'

export default {
  name: 'App',
  components: { MenuBar },
}
</script>

<style></style>
