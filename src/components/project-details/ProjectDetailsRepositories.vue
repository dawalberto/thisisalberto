<template>
  <section class="w-full mt-20">
    <div class="flex justify-start">
      <h1 class="text-2xl underline-title underline-title-yellow">
        {{ $t('projectDetails.repository') }}
      </h1>
    </div>
    <ul class="md:py-8 md:px-10">
      <li class="flex items-center gap-4">
        <span class="font-semibold">{{
          linkBack ? '🦊 Front' : `🦊 ${$t('projectDetails.code')}`
        }}</span>
        <a :href="link" target="_blank" class="text-yellow-500">
          {{ linkLabel }}
        </a>
      </li>
      <li v-if="linkBack" class="flex items-center gap-4">
        <span class="font-semibold">🦊 Back</span>
        <a :href="linkBack" target="_blank" class="text-yellow-500">
          {{ linkBackLabel }}
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
    link: {
      type: String,
      required: true,
    },
    linkBack: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const linkLabel = removeHttpsFromUrl(props.link)
    const linkBackLabel = removeHttpsFromUrl(props.linkBack)
    return { linkLabel, linkBackLabel }
  },
}
</script>

<style></style>
