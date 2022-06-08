<template>
  <transition name="slide-fade" appear>
    <div>
      <!-- The Timeline -->
      <ul class="timeline">
        <career-item
          v-for="careerItem in careerList"
          :key="careerItem.position"
          :emoji="careerItem.emoji"
          :title="careerItem.title"
          :period="careerItem.period"
          :description="careerItem.description"
          :direction="careerItem.direction"
          @open-full-descriptions="openFullDescription"
        />
      </ul>
      <div v-show="showFullDescription" class="career-details">
        <close-button @click="closeFullDescription" class="absolute -top-3 -left-2" />
        <close-button @click="closeFullDescription" class="absolute -bottom-3 -right-2" />
        <p>
          {{ fullDescription }}
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
import CareerItem from '@/components/CareerItem.vue'
import CloseButton from '@/components/CloseButton.vue'
import { ref } from 'vue'
import { useI18n } from 'vue3-i18n'
import emitter from '@/services/emitter'

export default {
  name: 'Career',
  components: { CareerItem, CloseButton },
  setup() {
    let showFullDescription = ref(false)
    let fullDescription = ref('')

    let i18n = useI18n()
    let locale = i18n.getLocale()
    let careerList = ref([])

    const getSanitizedCareerList = (i18n, locale) => {
      let career = i18n.messages[locale].career
      let jobs = career.jobs
      let studies = career.studies

      jobs = Object.keys(jobs).map((key) => {
        let job = jobs[key]
        job.emoji = '👨🏼‍💻'
        return job
      })

      studies = Object.keys(studies).map((key) => {
        let study = studies[key]
        study.emoji = '🎓'
        return study
      })

      careerList.value = [...jobs, ...studies]

      careerList.value = careerList.value.map((careerItem, i) => {
        let direction = 'direction-r'

        if (i % 2 === 0) {
          direction = 'direction-l'
        }

        return { ...careerItem, direction }
      })

      careerList.value.sort((a, b) => a.position - b.position)

      return careerList.value
    }

    careerList.value = getSanitizedCareerList(i18n, locale)

    emitter.on('locale-changed', (localeSelected) => {
      careerList.value = getSanitizedCareerList(i18n, localeSelected)
    })

    const openFullDescription = ({ description }) => {
      fullDescription.value = description
      showFullDescription.value = true
    }

    const closeFullDescription = () => {
      showFullDescription.value = false
    }
    document.addEventListener('scroll', closeFullDescription)

    return {
      careerList,
      showFullDescription,
      openFullDescription,
      fullDescription,
      closeFullDescription,
    }
  },
}
</script>

<style>
.timeline {
  /* width: 900px; */
  @apply md:w-9/12;
  @apply relative my-0 mx-auto mt-5 py-5 list-none;
}

.timeline:before {
  content: ' ';
  background: #32557f;
  @apply absolute left-2/4 top-0 transform -translate-x-1/2 block w-1 h-full z-10;
}

.timeline li {
  @apply py-16;
}

.timeline li:after {
  content: '';
  visibility: hidden;
  @apply clear-both h-0 block;
}

.career-details {
  border-color: #32557f;
  @apply fixed top-2/4 left-2/4 
  transform -translate-x-1/2 -translate-y-1/2 
  w-11/12 md:w-2/4 z-50 
  pb-6 pt-6 px-9 
  border-t-2 border-b-2 bg-white;
}
</style>
