<template>
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
  </div>
</template>

<script>
export default {
  name: 'ProjectDetailsQuestions',
  props: {
    project: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {}
  },
}
</script>

<style></style>
