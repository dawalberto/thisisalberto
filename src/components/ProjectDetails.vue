<template>
  <div class="bg-white w-screen max-w-6xl mx-auto p-2 overflow-x-hidden pb-8">
    <close-button @click="close" class="fixed left-2 top-2" />
    <div class="mx-auto w-2/4 md:w-1/4 mt-24">
      <kinesis-container>
        <kinesis-element :strength="20" type="depth">
          <img
            v-if="project == 'jjoin'"
            class="w-full"
            src="@/assets/jjoinLogo.png"
            alt="logo jjoin"
          />
          <img
            v-else-if="project == 'clasicaguitarra'"
            class="w-full"
            src="@/assets/clasicaguitarraLogo.png"
            alt="logo clasicaguitarra"
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
        class="absolute transform rotate-45 md:text-5xl text-center capitalize"
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
          <div class="flex flex-row items-center">
            <p class="md:pl-2" style="white-space: pre-line">
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
          <div class="flex flex-row-reverse items-center">
            <p class="md:pl-2 text-right" style="white-space: pre-line">
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
          <div class="flex flex-row items-center">
            <p class="md:pl-2">
              {{ $t(`projectDetails.${project}.technologies`) }}
            </p>
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
          <div class="flex justify-start">
            <h1 class="text-2xl underline-title underline-title-yellow">
              {{ $t('projectDetails.repository') }}
            </h1>
          </div>
          <div class="flex items-center justify-start">
            <div class="w-3/12 md:w-1/6 flex-shrink-0 flex-grow-0">
              <img
                src="@/assets/absurd-repositorio.png"
                class="w-full"
                alt="what is img"
              />
            </div>
            <ul class="md:pl-2">
              <li>
                <span class="font-semibold">👉 Front </span>
                <a href="#">blablablablabla</a>
              </li>
              <li>
                <span class="font-semibold">👉 Back </span>
                <a href="#">blablablablabla</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full text-center">
      <button
        class="
          button-project-details
          duration-200
          transform
          hover:scale-105 hover:-rotate-3
        "
      >
        Disfruta de <span class="capitalize">{{ project }}</span>
      </button>
    </div>
    <footer-simple class="mt-10" />
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import CloseButton from '@/components/CloseButton.vue'
import FooterSimple from '@/components/FooterSimple.vue'

export default {
  name: 'ProjectDetails',
  components: { KinesisContainer, KinesisElement, CloseButton, FooterSimple },
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

    return { close }
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
