<template>
  <menu-bar />
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
