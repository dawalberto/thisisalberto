<template>
  <div
    class="
      footer-simple
      max-w-6xl
      mx-auto
      py-6
      md:px-4
      text-center
      md:text-left
      bg-white
      text-sm
    "
  >
    <div>
      <language-changer />
    </div>
    <div class="flex flex-col md:flex-row md:justify-between">
      <p>{{ $t('made') }}</p>
      <p>© 2021 / {{ currentYear }}</p>
    </div>
  </div>
</template>

<script>
import LanguageChanger from '@/components/LanguageChanger.vue'

export default {
  components: { LanguageChanger },
  name: 'FooterSimple',
  setup() {
    const currentYear = new Date().getFullYear()
    return { currentYear }
  },
}
</script>

<style>
.footer-simple {
  border-top: 1px solid #32557f;
}
</style>
