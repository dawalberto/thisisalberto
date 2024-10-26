<template>
  <div class="bg-white w-screen max-w-6xl mx-auto p-6 overflow-x-hidden pb-8">
    <!-- TODO 👉 COMPONENT ProjectDetailsImage -->
    <!-- <div class="mx-auto w-2/4 md:w-1/4 mt-24 md:mt-0">
      <kinesis-container>
        <kinesis-element :strength="20" type="depth">
          <img
            class="w-full"
            :src="require(`@/assets/${project}Logo.png`)"
            :alt="`${project} logo`"
          />
        </kinesis-element>
      </kinesis-container>
    </div> -->
    <!-- TODO - Rethink this title or create a breadcrumbs -->
    <h1 class="text-2xl md:text-5xl my-8 text-center capitalize">
      {{ project }}
    </h1>
    <project-details-questions project="podcaster" />
    <!-- TODO 👉 Create new Carousel component here -->
    <project-details-repositories link="https://github.com/dawalberto/podcaster" />

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
// import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import ProjectDetailsQuestions from '@/components/project-details/ProjectDetailsQuestions.vue'
import ProjectDetailsRepositories from '../../components/project-details/ProjectDetailsRepositories.vue'

export default {
  name: 'Podcaster',
  components: { ProjectDetailsQuestions, ProjectDetailsRepositories },
  setup() {
    return {
      project: 'podcaster',
      linkProject: '#',
      repoPodcaster: '#',
    }
  },
}
</script>

<style scoped></style>
