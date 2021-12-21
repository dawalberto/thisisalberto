<template>
  <nav v-show="$route.name !== 'ProjectDetails'" class="bg-white z-40">
    <div class="max-w-6xl mx-auto md:px-16 flex justify-between">
      <div class="flex sm:space-x-9">
        <!-- Website Logo -->
        <div class="my-2">
          <router-link to="/" class="flex items-center">
            <img
              src="@/assets/yo.png"
              alt="Logo"
              class="w-28 sm:w-36 transform hover:rotate-6 hover:scale-110 duration-300"
            />
          </router-link>
        </div>
        <!-- Primary Navbar items -->
        <div class="flex items-center md:space-x-8">
          <router-link
            to="/projects"
            class="underline-title underline-title-yellow text-4xl"
          >
            {{ projectsTitle }}
          </router-link>
          <router-link
            to="/career"
            class="underline-title underline-title-yellow text-4xl"
          >
            {{ careerTitle }}
          </router-link>
        </div>
      </div>
      <!-- Secondary Navbar items -->
      <div class="flex items-center space-x-4">
        <router-link
          to="/contact"
          class="underline-title underline-title-yellow text-4xl"
        >
          {{ contactTitle }}
        </router-link>
        <a href="" class="underline-title underline-title-yellow text-4xl"> </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed } from 'vue'
import { useWindowSize } from 'vue-window-size'
import { useI18n } from 'vue3-i18n'

export default {
  name: 'MenuBar',
  setup() {
    let i18n = useI18n()
    let windowWidth = ref(useWindowSize().width)

    const projectsTitle = computed(() => {
      return windowWidth.value >= 768 ? i18n.t('menu.projects') : '🧑🏻‍💻'
    })
    const careerTitle = computed(() => {
      return windowWidth.value >= 768 ? i18n.t('menu.career') : '🎓'
    })
    const contactTitle = computed(() => {
      return windowWidth.value >= 768 ? i18n.t('menu.contact') : '📞'
    })

    return { projectsTitle, careerTitle, contactTitle }
  },
}
</script>
