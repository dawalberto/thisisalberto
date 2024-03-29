<template>
  <li @click="openFullDescription" class="relative">
    <span class="emoji underline-title underline-title-yellow">{{ emoji }}</span>
    <div :class="direction" class="cursor-pointer">
      <div class="relative inline-block text-center">
        <h1 class="flag">{{ title }}</h1>
        <h2
          class="institution"
          :class="direction === 'direction-r' ? 'md:text-right' : 'md:text-left'"
        >
          {{ institution }}
        </h2>
        <h2 class="time-wrapper">
          <span class="time">{{ period }}</span>
        </h2>
      </div>
      <div class="desc">{{ descriptionPreview }}</div>
    </div>
  </li>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'CareerItem',
  emits: ['open-full-descriptions'],
  props: {
    emoji: String,
    title: String,
    institution: String,
    description: String,
    period: String,
    direction: String,
  },
  setup(props, { emit }) {
    const openFullDescription = () => {
      emit('open-full-descriptions', { description: props.description })
    }

    const descriptionPreview = computed(() => {
      return props.description.length > 200
        ? `${props.description.substring(0, 200)}...`
        : props.description
    })

    return { openFullDescription, descriptionPreview }
  },
}
</script>

<style>
.emoji {
  @apply text-2xl absolute left-2/4 
  transform -translate-x-2/4 z-10;
}

.flag {
  @apply relative inline 2xl:static md:block py-2 px-3 
  text-left font-bold bg-white text-xl;
}

.institution {
  @apply relative block bg-white text-sm pt-2 pb-0 px-3 z-20;
}

.time-wrapper {
  @apply inline bg-white 
  text-yellow-500 text-xs px-3;
}

.direction-l .time-wrapper {
  @apply float-left;
}

.direction-r .time-wrapper {
  @apply float-right;
}

.time {
  @apply inline-block py-2 text-xs;
}

.desc {
  margin: 1em 0.75em 0 0;
  @apply italic;
}

.direction-r .desc {
  margin: 1em 0 0 0.75em;
}

@media screen and (max-width: 900px) {
  .flag,
  .institution {
    @apply z-20;
  }

  .emoji {
    @apply top-3 absolute;
  }

  .time {
    @apply py-0;
  }

  .time-wrapper {
    @apply block relative z-20;
  }

  .direction-l .time-wrapper,
  .direction-r .time-wrapper {
    @apply float-none;
  }

  .desc {
    background: rgb(245, 245, 245);
    @apply relative p-3 z-20;
  }

  .direction-l .desc,
  .direction-r .desc {
    @apply relative p-2 z-20 m-1;
  }
}
.direction-l {
  width: 400px;
  @apply text-right float-left relative;
}

.direction-r {
  width: 400px;
  @apply float-right relative;
}

@media screen and (max-width: 900px) {
  .direction-l,
  .direction-r {
    @apply float-none w-full text-center;
  }

  .timeline {
    padding: 4em 0 1em 0;
    @apply w-full;
  }
}
</style>
