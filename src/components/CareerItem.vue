<template>
  <li @click="openFullDescription" class="relative">
    <span class="emoji underline-title underline-title-yellow">{{ emoji }}</span>
    <div :class="direction" class="cursor-pointer">
      <div class="relative inline-block text-center">
        <h1 class="flag">{{ title }}</h1>
        <h2 class="time-wrapper">
          <span class="time">{{ period }}</span>
        </h2>
      </div>
      <div class="desc">{{ description.substring(0, 200) }}...</div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'CareerItem',
  emits: ['open-full-descriptions'],
  props: {
    emoji: String,
    title: String,
    description: String,
    period: String,
    direction: String,
  },
  setup(props, { emit }) {
    const openFullDescription = () => {
      emit('open-full-descriptions', { description: props.description })
    }

    return { openFullDescription }
  },
}
</script>

<style>
.emoji {
  @apply text-2xl absolute left-2/4 
  transform -translate-x-2/4 z-10;
}

.flag {
  @apply relative inline md:static md:block py-2 px-3 
  text-left font-bold bg-white text-xl;
}

.time-wrapper {
  @apply inline bg-white 
  text-yellow-500 text-xs;
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
  .flag {
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
