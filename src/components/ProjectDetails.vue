<template>
  <div class="bg-white w-screen max-w-6xl px-3 mx-auto overflow-x-hidden">
    <!-- TODO - Rethink this title -->
    <h1 class="text-3xl md:text-5xl mb-2 text-center">&lt;{{ project }} /&gt;</h1>
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
import { onMounted } from 'vue'

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
    onMounted(() => {
      window.scrollTo(0, 0)
    })
    return {}
  },
}
</script>

<style scoped>
.button-project-details {
  background-color: #f6ce7d;
  @apply text-4xl md:text-6xl py-6 px-12 font-bold;
  -webkit-box-shadow: 10px 10px 0px 0px rgba(50, 85, 127, 1);
  -moz-box-shadow: 10px 10px 0px 0px rgba(50, 85, 127, 1);
  box-shadow: 10px 10px 0px 0px rgba(50, 85, 127, 1);
}
</style>
