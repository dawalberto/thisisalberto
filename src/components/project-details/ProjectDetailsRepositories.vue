<template>
  <section class="w-full mt-10">
    <div class="flex justify-start">
      <h1 class="text-2xl underline-title underline-title-yellow">
        {{ $t('projectDetails.repository') }}
      </h1>
    </div>
    <ul class="md:py-8 md:px-10">
      <li class="flex items-center gap-4 mt-2">
        <span class="font-semibold">{{
          repoBack ? '🦊 Front' : `🦊 ${$t('projectDetails.code')}`
        }}</span>
        <a :href="repo" target="_blank" class="text-yellow-500">
          {{ repoLabel }}
        </a>
      </li>
      <li v-if="repoBack" class="flex items-center gap-4">
        <span class="font-semibold">🦊 Back</span>
        <a :href="repoBack" target="_blank" class="text-yellow-500">
          {{ repoBackLabel }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
const removeHttpsFromUrl = (url) => {
  return url ? url.replace(/^https:\/\//, '') : ''
}

export default {
  name: 'ProjectDetailsRepositories',
  props: {
    repo: {
      type: String,
      required: true,
    },
    repoBack: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const repoLabel = removeHttpsFromUrl(props.repo)
    const repoBackLabel = removeHttpsFromUrl(props.repoBack)
    return { repoLabel, repoBackLabel }
  },
}
</script>

<style></style>
