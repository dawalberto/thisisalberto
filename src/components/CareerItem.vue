<template>
  <li class="relative">
    <span class="emoji underline-title underline-title-yellow">👨🏼‍💻🎓</span>
    <div :class="direction" class="cursor-pointer">
      <div class="relative inline-block text-center">
        <h1 class="flag">Desarrollador Web</h1>
        <span class="time-wrapper"><span class="time">Sep 2019 - Marz 2021</span></span>
      </div>
      <div class="desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est totam tenetur
        deserunt minus dicta labore modi impedit velit? Qui deleniti nobis, omnis
        obcaecati expedita natus non maxime mollitia molestiae modi...
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'CareerItem',
  props: {
    direction: String,
  },
}
</script>

<style>
.emoji {
  @apply text-2xl absolute left-2/4 
  transform -translate-x-2/4 z-10;
}

.flag {
  @apply relative inline py-2 px-3 
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
</style>