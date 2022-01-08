<template>
  <div class="flex flex-col space-y-16">
    <project-details
      v-if="showProjectDetails"
      :project="project"
      @close-project-details="hiddeProjectDetailsAction"
      class="z-50 absolute top-0 left-1/2 transform -translate-x-1/2"
    />
    <transition name="slide-fade-left" appear>
      <div @click="showProjectDetailsAction('jjoin')" class="project-container">
        <div class="logo-container">
          <img class="w-full" src="@/assets/jjoinLogo.png" alt="logo jjoin" />
        </div>
        <div class="self-center">
          <h1 class="project-title md:text-left underline-title underline-title-yellow">
            Jjoin
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi magni tempore
            consequatur facere ducimus quas voluptatem quidem repellat quaerat. Dolores
            delectus aspernatur optio suscipit, alias porro quo corporis obcaecati nisi...
          </p>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi magni tempore
            consequatur facere ducimus quas voluptatem quidem repellat quaerat. Dolores
            delectus aspernatur optio suscipit, alias porro quo corporis obcaecati nisi...
          </p>
        </div>
      </div>
    </transition>
    <transition name="slide-fade" appear>
      <div class="flex md:space-x-4 flex-col md:flex-row">
        <p>
          Considero que estos son mis proyectos más interesantes por la idea y tecnologías
          usadas para llevarlos a cabo pero también tengo
          <a href="#" class="text-yellow-500"> otros proyectitos chulos </a>
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
  md:flex-row p-4 cursor-pointer;
}

.logo-container {
  @apply md:flex-none w-3/4 mx-auto md:w-1/5;
}

.project-title {
  @apply mb-2 text-center relative;
}
</style>
