<template>
  <div ref="emblaNode" class="embla">
    <div class="embla__container w-full">
      <div v-for="slideSrc in slidesSrcs" :key="slideSrc" class="embla__slide">
        <img
          :src="slideSrc"
          loading="lazy"
          style="filter: drop-shadow(0 0 7px rgba(0, 0, 0, 0.4))"
        />
      </div>
    </div>
  </div>
</template>

<script>
import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'

export default {
  props: {
    slidesSrcs: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const [emblaNode] = emblaCarouselVue(
      {
        align: 'center',
        containScroll: 'keepSnaps',
        dragFree: true,
        loop: true,
        autoplay: true,
      },
      [Autoplay({ delay: 3000, playOnInit: true })],
    )

    return { emblaNode }
  },
}
</script>

<style scoped>
.embla {
  overflow: hidden;
}

.embla.is-draggable {
  cursor: grab;
}

.embla.is-dragging {
  cursor: grabbing;
}

.embla__container {
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}

.embla__slide {
  flex: 0 0 auto;
  max-width: 105%;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>
