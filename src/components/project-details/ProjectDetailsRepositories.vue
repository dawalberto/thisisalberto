<template>
  <section class="w-full">
    <div class="flex justify-start">
      <h1 class="text-2xl underline-title underline-title-yellow">
        {{ $t('projectDetails.repository') }}
      </h1>
    </div>
    <ul class="md:py-8 md:px-10">
      <li class="flex items-center gap-4">
        <span class="font-semibold"
          >🦊 {{ repoBack ? 'Front' : `${$t('projectDetails.code')}` }}</span
        >
        <a :href="linkRepository" target="_blank" class="text-yellow-500">
          {{ repoLabel }}
        </a>
      </li>
      <li v-if="repoBack" class="flex items-center gap-4">
        <span class="font-semibold">🦊 Back</span>
        <a :href="linkRepositoryBack" target="_blank" class="text-yellow-500">
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
    linkRepository: {
      type: String,
      required: true,
    },
    linkRepositoryBack: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const repoLabel = removeHttpsFromUrl(props.linkRepository)
    const repoBackLabel = removeHttpsFromUrl(props.linkRepositoryBack)
    return { repoLabel, repoBackLabel }
  },
}
</script>

<style></style>
