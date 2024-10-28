<template>
  <div class="bg-white w-screen max-w-6xl mx-auto p-2 overflow-x-hidden pb-8">
    <close-button @click="close" class="fixed left-2 top-2 opacity-100 2xl:opacity-0" />
    <div class="mx-auto w-2/4 md:w-1/4 mt-24 md:mt-0">
      <kinesis-container>
        <kinesis-element :strength="20" type="depth">
          <img
            class="w-full"
            :src="require(`@/assets/${this.project}Logo.png`)"
            :alt="`${project} logo`"
          />
        </kinesis-element>
      </kinesis-container>
    </div>
    <div class="w-full mx-auto px-2 my-24">
      <h1
        :class="{
          'top-7 right-4 text-4xl': project == 'jjoin',
          'top-20 md:top-28 -right-6 md:right-0 text-4xl': project == 'clasicaguitarra',
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
      <div class="flex flex-col space-y-20 w-full">
        <!-- question -->
        <div>
          <div class="flex justify-start">
            <h1 class="text-2xl underline-title underline-title-yellow">
              {{ $t('projectDetails.why') }}
            </h1>
          </div>
          <div class="flex flex-row items-center mt-2">
            <p class="md:p-10" style="white-space: pre-line">
              {{ $t(`projectDetails.${project}.why`) }}
            </p>
            <div class="w-3/12 md:w-1/6 flex-shrink-0 flex-grow-0">
              <img src="@/assets/absurd-por-que.png" class="w-full" alt="why img" />
            </div>
          </div>
        </div>
        <!-- question -->
        <div class="w-full">
          <div class="flex justify-end">
            <h1 class="text-2xl underline-title underline-title-yellow">
              {{ $t('projectDetails.whatExactly') }}
            </h1>
          </div>
          <div class="flex flex-row-reverse items-center mt-2">
            <p class="md:p-10" style="white-space: pre-line">
              {{ $t(`projectDetails.${project}.whatExactly`) }}
            </p>
            <div class="w-3/12 md:w-1/6 flex-shrink-0 flex-grow-0">
              <img src="@/assets/absurd-que-es.png" class="w-full" alt="what is img" />
            </div>
          </div>
        </div>
        <!-- question -->
        <div>
          <div class="flex justify-start">
            <h1 class="text-2xl underline-title underline-title-yellow">
              {{ $t('projectDetails.technologies') }}
            </h1>
          </div>
          <div class="flex flex-row items-center mt-2">
            <p class="md:p-10" v-html="$t(`projectDetails.${project}.technologies`)"></p>
            <div class="w-3/12 md:w-1/6 flex-shrink-0 flex-grow-0">
              <img
                src="@/assets/absurd-tecnologias.png"
                class="w-full"
                alt="tecnologies img"
              />
            </div>
          </div>
        </div>
        <!-- question -->
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
            <ul v-if="project === 'jjoin'" class="md:pl-2">
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
                <a
                  :href="repoFrontClasicaguitarra"
                  target="_blank"
                  class="text-yellow-500"
                >
                  {{ repoFrontClasicaguitarra }}
                </a>
              </li>
              <li>
                <span class="font-semibold">👉 Back </span>
                <a
                  :href="repoBackClasicaguitarra"
                  target="_blank"
                  class="text-yellow-500"
                >
                  {{ repoBackClasicaguitarra }}
                </a>
              </li>
            </ul>
            <ul v-else-if="project === 'podcaster'" class="md:pl-2">
              <li>
                <span class="font-semibold">👉 </span>
                <a :href="repoPodcaster" target="_blank" class="text-yellow-500">
                  {{ repoPodcaster }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Video -->
    <div v-if="project == 'clasicaguitarra'" class="w-full text-center">
      <iframe
        class="w-full md:w-1/2 h-72 block mx-auto"
        src="https://www.youtube.com/embed/rBnUq__gGd0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
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
    <p class="text-sm mt-10 text-center">
      Illustrations from
      <a href="https://absurd.design" target="_blank">absurd.design</a>
    </p>
  </div>
</template>

<script>
import CloseButton from '@/components/CloseButton.vue'
import { computed } from 'vue'

export default {
  name: 'ProjectDetails',
  components: { CloseButton },
  emits: ['close-project-details'],
  props: {
    project: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const close = () => {
      emit('close-project-details')
    }

    const linkProject = computed(() => {
      switch (props.project) {
        case 'jjoin':
          return linkJjoin
        case 'clasicaguitarra':
          return linkClasicaguitarra
        case 'podcaster':
          return linkPodcaster
        default:
          return ''
      }
    })

    const repoFrontClasicaguitarra =
      'https://github.com/dawalberto/proyecto-final-frontend'
    const repoBackClasicaguitarra = 'https://github.com/dawalberto/proyecto-final-backend'
    const linkClasicaguitarra = 'https://clasicaguitarra.com/'
    const repoJjoin = 'https://github.com/dawalberto/Jjoin'
    const linkJjoin = 'https://github.com/dawalberto/Jjoin/releases'
    const repoPodcaster = 'https://github.com/dawalberto/podcaster'
    const linkPodcaster = 'https://dawalberto.github.io/podcaster/'

    return {
      close,
      repoFrontClasicaguitarra,
      repoBackClasicaguitarra,
      repoPodcaster,
      repoJjoin,
      linkProject,
    }
  },
}
</script>

<style>
.button-project-details {
  background-color: #f6ce7d;
  @apply text-4xl md:text-6xl py-6 px-12 font-bold;
  -webkit-box-shadow: 10px 10px 0px 0px rgba(50, 85, 127, 1);
  -moz-box-shadow: 10px 10px 0px 0px rgba(50, 85, 127, 1);
  box-shadow: 10px 10px 0px 0px rgba(50, 85, 127, 1);
}
</style>
