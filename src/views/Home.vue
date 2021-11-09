<template>
  <div>
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

<style></style>
