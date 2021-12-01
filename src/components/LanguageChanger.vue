<template>
  <div>
    <select v-model="langSelected">
      <option v-for="(lang, i) in langs" :key="`Lang${i}${lang}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
import { useI18n } from 'vue3-i18n'
import { ref, watchEffect } from 'vue'

export default {
  name: 'LanguageChanger',
  setup() {
    const i18n = useI18n()
    const langs = ['es', 'en']
    let langSelected = ref('es')

    const setLocale = (lang) => {
      i18n.setLocale(lang)
    }

    watchEffect(() => setLocale(langSelected.value))

    return { langs, langSelected, setLocale }
  },
}
</script>

<style>
.bar {
  position: fixed;
  width: 200vw;
  height: 0.1rem;
  z-index: -1;
  background-color: #32557f;
}

.bar-right {
  right: -25%;
  bottom: 0;
  transform: rotate(-25deg);
}

.bar-left {
  right: -24%;
  bottom: 0;
  transform: rotate(35deg);
}

.img-home {
  filter: brightness(95%);
}
</style>
