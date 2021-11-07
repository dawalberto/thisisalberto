<template>
  <nav class="shadow-lg">
    <div class="max-w-6xl mx-auto px-4 sm:px-16 flex justify-between">
      <div class="flex space-x-7">
        <!-- Website Logo -->
        <div class="my-2">
          <a href="#" class="flex items-center">
            <img src="@/assets/i.png" alt="Logo" class="w-28 sm:w-36" />
          </a>
        </div>
        <!-- Primary Navbar items -->
        <div class="flex items-center space-x-1">
          <a
            href=""
            class="
              text-4xl
              md:text-lg
              opacity-80
              cursor-pointer
              py-4
              px-2
              text-gray-600
              font-semibold
              hover:text-yellow-500
              transition
              duration-300
            "
          >
            {{ windowWidth >= 768 ? 'Projects' : '🧑🏻‍💻' }}
          </a>
          <a
            href=""
            class="
              text-4xl
              md:text-lg
              opacity-80
              cursor-pointer
              py-4
              px-2
              text-gray-600
              font-semibold
              hover:text-yellow-500
              transition
              duration-300
            "
          >
            {{ windowWidth >= 768 ? 'Studies' : '🎓' }}
          </a>
        </div>
      </div>
      <!-- Secondary Navbar items -->
      <div class="flex items-center space-x-3">
        <a
          href=""
          class="
            text-4xl
            md:text-lg
            opacity-80
            cursor-pointer
            py-4
            px-2
            text-gray-600
            font-semibold
            hover:text-yellow-500
            transition
            duration-300
          "
        >
          {{ windowWidth >= 768 ? 'Contact' : '📞' }}
        </a>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
import { ref } from 'vue'
import { useWindowSize } from 'vue-window-size'

export default {
  setup() {
    let windowWidth = ref(useWindowSize().width)

    let projectsTitle = ref('')
    let studiesTitle = ref('')
    let contactTitle = ref('')

    projectsTitle = windowWidth.value >= 768 ? 'Projects' : '🧑🏻‍💻'
    studiesTitle = windowWidth.value >= 768 ? 'Studies' : '🎓'
    contactTitle = windowWidth.value >= 768 ? 'Contact' : '📞'

    return { projectsTitle, studiesTitle, contactTitle, windowWidth }
  },
}
</script>

<style></style>
