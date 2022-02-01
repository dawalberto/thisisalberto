<template>
  <div>
    <select v-model="localeSelected">
      <option v-for="(locale, i) in locales" :key="`lang${i}${locale}`" :value="locale">
        {{ locale }}
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
    const locales = []

    for (let locale in i18n.messages) {
      locales.push(locale)
    }

    const browserLangugae = navigator.language.includes('es') ? 'es' : 'en'
    const positionBrowserLanguageInLocales = locales.includes(browserLangugae)
      ? locales.indexOf(browserLangugae)
      : 0

    let localeSelected = ref(locales[positionBrowserLanguageInLocales])

    const setLocale = (locale) => {
      i18n.setLocale(locale)
    }

    watchEffect(() => setLocale(localeSelected.value))

    return { locales, localeSelected, setLocale }
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
