<template>
  <menu-bar class="sticky top-0" />

  <!-- background -->
  <div class="bar bar-right"></div>
  <div class="bar bar-left"></div>

  <router-view class="w-screen max-w-6xl mx-auto p-2 md:p-0" />
</template>

<script>
import MenuBar from '@/components/MenuBar.vue'

export default {
  name: 'App',
  components: { MenuBar },
}
</script>

<style>
.bar {
  position: fixed;
  width: 200vw;
  height: 0.1rem;
  z-index: -1;
  @apply bg-gray-800;
}

.bar-right {
  right: -25%;
  bottom: 0;
  transform: rotate(-25deg);
}

.bar-left {
  right: -24%;
  bottom: 0;
  transform: rotate(35deg);
}
</style>
