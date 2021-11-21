<template>
  <div>
    <!-- The Timeline -->
    <ul class="timeline">
      <career-item :direction="'direction-r'" />
      <career-item :direction="'direction-l'" />
      <career-item :direction="'direction-r'" />
      <career-item :direction="'direction-l'" />
      <career-item :direction="'direction-r'" />
      <career-item :direction="'direction-l'" />
    </ul>
  </div>
</template>

<script>
import CareerItem from '@/components/CareerItem.vue'

export default {
  name: 'Career',
  components: { CareerItem },
}
</script>

<style>
.timeline {
  width: 900px;
  @apply relative my-0 mx-auto mt-5 py-5 list-none;
}

.timeline:before {
  content: ' ';
  background: #32557f;
  @apply absolute left-2/4 top-0 transform -translate-x-1/2 block w-1 h-full z-10;
}

.timeline li {
  @apply py-16;
}

.timeline li:after {
  content: '';
  visibility: hidden;
  @apply clear-both h-0 block;
}

.direction-l {
  width: 400px;
  @apply text-right float-left relative;
}

.direction-r {
  width: 400px;
  @apply float-right relative;
}

@media screen and (max-width: 900px) {
  .direction-l,
  .direction-r {
    @apply float-none w-full text-center;
  }

  .timeline {
    padding: 4em 0 1em 0;
    @apply w-full;
  }
}
</style>
