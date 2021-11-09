<template>
  <div class="home h-screen w-screen max-w-6xl mx-auto p-2 md:p-0">
    <!-- background -->
    <div class="bar bar-right"></div>
    <div class="bar bar-left"></div>
    <!-- content -->
    <div class="flex flex-col md:flex-row h-full">
      <div class="md:flex-none md:w-2/5"><terminal-simulator /></div>
      <div class="md:flex-none md:w-3/5">
        <img src="@/assets/yoSofa.png" alt="me on the couch" />
      </div>
    </div>
  </div>
</template>

<script>
import TerminalSimulator from '@/components/TerminalSimulator.vue'
export default {
  name: 'Home',
  components: { TerminalSimulator },
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
