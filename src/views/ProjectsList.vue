<template>
  <div class="2xl:static">
    <div class="center-body flex flex-col space-y-16">
      <transition name="slide-fade-left" appear>
        <router-link
          to="/projects/podcaster"
          class="project-container flex-col md:flex-row-reverse"
        >
          <div class="logo-container">
            <img class="w-full" src="@/assets/podcasterLogo.png" alt="logo podcaster" />
          </div>
          <div class="self-center">
            <h1
              class="project-title md:text-right underline-title underline-title-yellow"
            >
              Podcaster
            </h1>
            <p>{{ $t('projectDetails.podcaster.why').substring(0, 240) }}...</p>
          </div>
        </router-link>
      </transition>
      <transition name="slide-fade-right" appear>
        <router-link to="/projects/jjoin" class="project-container flex-col md:flex-row">
          <div class="logo-container">
            <img class="w-full" src="@/assets/jjoinLogo.png" alt="logo jjoin" />
          </div>
          <div class="self-center">
            <h1 class="project-title md:text-left underline-title underline-title-yellow">
              Jjoin
            </h1>
            <p>{{ $t('projectDetails.jjoin.whatExactly').substring(0, 240) }}...</p>
          </div>
        </router-link>
      </transition>
      <transition name="slide-fade" appear>
        <div class="flex md:space-x-4 flex-col md:flex-row">
          <p>
            {{ $t('projectDetails.otherProjects') }}
            <a
              href="https://dawalberto.github.io/angular-github-projects/"
              target="_blank"
              class="text-yellow-500"
            >
              {{ $t('projectDetails.otherProjectsLink') }}
            </a>
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Projects',
  setup() {
    let showProjectDetails = ref(false)
    let project = ref('')

    return {
      project,
      showProjectDetails,
    }
  },
}
</script>

<style>
.project-container {
  @apply flex md:space-x-4 
  p-4 cursor-pointer;
}

.logo-container {
  @apply md:flex-none w-3/4 mx-auto md:w-1/5;
}

.project-title {
  @apply mb-2 text-center relative;
}
</style>
