<template>
  <div class="home h-screen w-screen">
    <!-- background -->
    <div class="bar bar-right"></div>
    <div class="bar bar-left"></div>
    <!-- content -->
  </div>
</template>

<script>
// @ is an alias to /src
</script>

<style>
.bar {
  position: fixed;
  width: 200vw;
  height: 0.1rem;
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
