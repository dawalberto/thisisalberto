<template>
  <div>
    <!-- The Timeline -->
    <ul class="timeline">
      <career-item @click="showDetails = true" :direction="'direction-r'" />
      <career-item :direction="'direction-l'" />
      <career-item :direction="'direction-r'" />
      <career-item :direction="'direction-l'" />
      <career-item :direction="'direction-r'" />
      <career-item :direction="'direction-l'" />
    </ul>
    <div v-show="showDetails" class="career-details">
      <button
        @click="showDetails = false"
        class="
          terminal-button terminal-button-red
          fixed
          left-2
          top-2
          w-5
          h-5
          cursor-pointer
          flex
          content-center
          items-center
        "
      >
        <span class="self-center mx-auto opacity-0 hover:opacity-100 duration-150">
          X
        </span>
      </button>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, consequatur
        fuga recusandae odio, sapiente beatae dolor voluptatem totam, dolores debitis vero
        reprehenderit voluptatibus? Doloremque nemo laboriosam modi delectus tenetur
        dolorem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. At harum rem
        quis eos nobis sed velit perferendis saepe aliquid? Libero possimus tempora rerum
        expedita minima blanditiis nam, minus aperiam quasi? dolorem! Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. At harum rem quis eos nobis sed velit
        perferendis saepe aliquid? Libero possimus tempora rerum expedita minima
        blanditiis nam, minus aperiam quasi?
      </p>
    </div>
  </div>
</template>

<script>
import CareerItem from '@/components/CareerItem.vue'
import { ref } from 'vue'

export default {
  name: 'Career',
  components: { CareerItem },
  setup() {
    let showDetails = ref(false)

    document.addEventListener('scroll', () => {
      showDetails.value = false
    })

    return { showDetails }
  },
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

.career-details {
  border: 1.5px solid;
  border-color: #32557f;
  @apply fixed top-2/4 left-2/4 
  transform -translate-x-1/2 -translate-y-1/2 
  w-11/12 md:w-2/4 z-50 
  pb-6 pt-12 px-9 
  rounded-lg bg-white;
}
</style>
