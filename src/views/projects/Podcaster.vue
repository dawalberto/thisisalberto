<template>
  <div class="bg-white w-screen max-w-6xl mx-auto p-2 overflow-x-hidden pb-8">
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
    <div class="w-full mx-auto px-2 my-24">
      <!-- TODO - Rethink this title -->
      <h1
        :class="{
          // 'top-7 right-4 text-4xl': project == 'jjoin',
          // 'top-20 md:top-28 -right-6 md:right-0 text-4xl': project == 'clasicaguitarra',
        }"
        class="
          absolute
          transform
          rotate-45
          md:text-5xl
          text-center
          capitalize
          opacity-100
          md:opacity-0
        "
      >
        {{ project }}
      </h1>
      <project-details-questions project="podcaster" />
    </div>
    <!-- TODO 👉 Create new Carousel component here -->
    <!-- TODO 👉 COMPONENT ProjectDetailsRepositories -->
    <div class="w-full">
      <div class="flex justify-center">
        <h1 class="text-2xl underline-title underline-title-yellow">
          {{ $t('projectDetails.repository') }}
        </h1>
      </div>
      <div class="flex items-center justify-center mt-2">
        <!-- <div class="w-3/12 md:w-1/6 flex-shrink-0 flex-grow-0">
              <img
                src="@/assets/absurd-repositorio.png"
                class="w-full"
                alt="what is img"
              />
            </div> -->
        <!-- <ul v-if="project === 'jjoin'" class="md:pl-2">
          <li>
            <span class="font-semibold">👉 </span>
            <a :href="repoJjoin" target="_blank" class="text-yellow-500">
              {{ repoJjoin }}
            </a>
          </li>
        </ul>
        <ul v-else-if="project === 'clasicaguitarra'" class="md:pl-2">
          <li>
            <span class="font-semibold">👉 Front </span>
            <a :href="repoFrontClasicaguitarra" target="_blank" class="text-yellow-500">
              {{ repoFrontClasicaguitarra }}
            </a>
          </li>
          <li>
            <span class="font-semibold">👉 Back </span>
            <a :href="repoBackClasicaguitarra" target="_blank" class="text-yellow-500">
              {{ repoBackClasicaguitarra }}
            </a>
          </li>
        </ul> -->
        <ul v-if="project === 'podcaster'" class="md:pl-2">
          <li>
            <span class="font-semibold">👉 </span>
            <a :href="repoPodcaster" target="_blank" class="text-yellow-500">
              {{ repoPodcaster }}
            </a>
          </li>
        </ul>
      </div>
    </div>

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

export default {
  name: 'Podcaster',
  components: { ProjectDetailsQuestions },
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
