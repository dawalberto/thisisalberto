<template>
  <nav class="shadow-none">
    <div class="max-w-6xl mx-auto px-4 sm:px-16 flex justify-between">
      <div class="flex sm:space-x-9">
        <!-- Website Logo -->
        <div class="my-2">
          <a href="#" class="flex items-center">
            <img src="@/assets/i.png" alt="Logo" class="w-28 sm:w-36" />
          </a>
        </div>
        <!-- Primary Navbar items -->
        <div class="flex items-center space-x-4">
          <a href="" class="menu-item">
            {{ projectsTitle }}
          </a>
          <a href="" class="menu-item">
            {{ studiesTitle }}
          </a>
        </div>
      </div>
      <!-- Secondary Navbar items -->
      <div class="flex items-center space-x-3">
        <a href="" class="menu-item">
          {{ contactTitle }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed } from 'vue'
import { useWindowSize } from 'vue-window-size'

export default {
  name: 'MenuBar',
  setup() {
    let windowWidth = ref(useWindowSize().width)

    const projectsTitle = computed(() => {
      return windowWidth.value >= 768 ? 'Projects' : '🧑🏻‍💻'
    })
    const studiesTitle = computed(() => {
      return windowWidth.value >= 768 ? 'Studies' : '🎓'
    })
    const contactTitle = computed(() => {
      return windowWidth.value >= 768 ? 'Contact' : '📞'
    })

    return { projectsTitle, studiesTitle, contactTitle }
  },
}
</script>

<style>
.menu-item {
  @apply text-4xl md:text-xl opacity-80 
  cursor-pointer py-4 px-2 
  text-gray-800 font-light hover:text-yellow-500 
  transition duration-300;
}
</style>
