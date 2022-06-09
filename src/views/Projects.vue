<template>
  <div class="flex flex-col space-y-16 mt-10">
    <project-details
      v-if="showProjectDetails"
      :project="project"
      @close-project-details="hiddeProjectDetailsAction"
      class="z-50 absolute top-0 left-1/2 transform -translate-x-1/2"
    />
    <transition name="slide-fade-left" appear>
      <div
        @click="showProjectDetailsAction('jjoin')"
        class="project-container md:flex-row"
      >
        <div class="logo-container">
          <img class="w-full" src="@/assets/jjoinLogo.png" alt="logo jjoin" />
        </div>
        <div class="self-center">
          <h1 class="project-title md:text-left underline-title underline-title-yellow">
            Jjoin
          </h1>
          <p>{{ $t('projectDetails.jjoin.whatExactly').substring(0, 240) }}...</p>
        </div>
      </div>
    </transition>
    <transition name="slide-fade-right" appear>
      <div
        @click="showProjectDetailsAction('clasicaguitarra')"
        class="project-container md:flex-row-reverse"
      >
        <div class="logo-container">
          <img
            class="w-full"
            src="@/assets/clasicaguitarraLogo.png"
            alt="logo clasicaguitarra"
          />
        </div>
        <div class="self-center">
          <h1 class="project-title md:text-right underline-title underline-title-yellow">
            Clasicaguitarra
          </h1>
          <p>
            {{ $t('projectDetails.clasicaguitarra.whatExactly').substring(0, 240) }}...
          </p>
        </div>
      </div>
    </transition>
    <transition name="slide-fade" appear>
      <div class="flex md:space-x-4 flex-col md:flex-row">
        <p>
          {{ $t('projectDetails.otherProjects') }}
          <a
            href="https://github.com/dawalberto?tab=repositories"
            target="_blank"
            class="text-yellow-500"
          >
            {{ $t('projectDetails.otherProjectsLink') }}
          </a>
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import ProjectDetails from '@/components/ProjectDetails.vue'
import { ref } from 'vue'

export default {
  name: 'Projects',
  components: { ProjectDetails },
  setup() {
    let showProjectDetails = ref(false)
    let project = ref('')

    const showProjectDetailsAction = (projectSelected) => {
      project.value = projectSelected
      window.scrollTo(0, 0)
      showProjectDetails.value = true
    }

    const hiddeProjectDetailsAction = () => {
      showProjectDetails.value = false
    }

    return {
      project,
      showProjectDetailsAction,
      showProjectDetails,
      hiddeProjectDetailsAction,
    }
  },
}
</script>

<style>
.project-container {
  @apply flex md:space-x-4 flex-col 
  p-4 cursor-pointer;
}

.logo-container {
  @apply md:flex-none w-3/4 mx-auto md:w-1/5;
}

.project-title {
  @apply mb-2 text-center relative;
}
</style>
