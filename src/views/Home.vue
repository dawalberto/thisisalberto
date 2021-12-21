<template>
  <div>
    <!-- background -->
    <div class="bar bar-right"></div>
    <div class="bar bar-left"></div>
    <!-- content -->
    <transition name="slide-fade" appear>
      <div class="flex flex-col-reverse md:flex-row lg:space-x-14">
        <div class="md:flex-none md:w-2/5">
          <terminal-simulator />
        </div>
        <div class="md:flex-none md:w-3/5">
          <img src="@/assets/thisisalberto.png" class="my-img" alt="me on the couch" />
        </div>
      </div>
    </transition>
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
  background-color: #32557f;
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
