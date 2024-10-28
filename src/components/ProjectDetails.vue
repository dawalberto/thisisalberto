<template>
  <div class="bg-white w-screen max-w-6xl mx-auto p-6 overflow-x-hidden pb-8">
    <!-- TODO - Rethink this title -->
    <h1 class="text-2xl md:text-5xl my-8 text-center capitalize">✨ {{ project }} ✨</h1>
    <project-details-questions :project="project" />
    <project-details-carousel :slidesSrcs="slidesSrcs" />
    <project-details-repositories :linkRepository="linkRepository" />

    <!-- Button Enjoy -->
    <div class="w-full text-center mt-10">
      <button
        class="
          button-project-details
          duration-200
          transform
          hover:scale-105 hover:-rotate-3
        "
      >
        <a target="_blank" :href="linkProject">
          {{ $t('projectDetails.enjoy') }} <span class="capitalize">{{ project }}</span>
        </a>
      </button>
    </div>
    <!-- Footer -->
    <p class="text-sm mt-10 text-center">
      Illustrations from
      <a href="https://absurd.design" target="_blank">absurd.design</a>
    </p>
  </div>
</template>

<script>
import ProjectDetailsQuestions from '@/components/project-details/ProjectDetailsQuestions.vue'
import ProjectDetailsRepositories from '@/components/project-details/ProjectDetailsRepositories.vue'
import ProjectDetailsCarousel from '@/components/project-details/ProjectDetailsCarousel.vue'

export default {
  name: 'ProjectDetails',
  components: {
    ProjectDetailsQuestions,
    ProjectDetailsRepositories,
    ProjectDetailsCarousel,
  },
  props: {
    project: {
      type: String,
      required: true,
    },
    linkProject: {
      type: String,
      required: true,
    },
    linkRepository: {
      type: String,
      required: true,
    },
    linkRepositoryBack: {
      type: String,
      required: false,
    },
    slidesSrcs: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {
      // project: 'podcaster',
      // linkProject: 'https://dawalberto.github.io/podcaster',
      // linkRepository: 'https://github.com/dawalberto/podcaster',
      // slidesSrcs: [
      //   require('@/assets/carousel/podcaster/desktop.png'),
      //   require('@/assets/carousel/podcaster/desktop-2.png'),
      //   require('@/assets/carousel/podcaster/desktop-3.png'),
      //   require('@/assets/carousel/podcaster/mobile.png'),
      // ],
    }
  },
}
</script>

<style scoped></style>
