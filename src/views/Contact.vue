<template>
  <div class="2xl:static">
    <div
      class="
        center-body
        flex flex-col-reverse
        md:flex-row
        items-center
        justify-center
        content-center
      "
    >
      <transition name="slide-fade" appear>
        <div class="w-100 md:w-2/4 flex flex-col items-center">
          <div
            class="
              flex flex-col
              space-y-9
              md:text-xl
              font-light
              mt-28
              md:mt-5 md:items-center
            "
          >
            <a
              class="flex flex-wrap items-center space-x-4 cursor-pointer"
              href="mailto:contact@thisisalberto.dev"
              target="_blank"
            >
              <svg-icon :icon="'message'" />
              <p>contact@thisisalberto.dev</p>
            </a>
            <a
              class="flex flex-wrap items-center space-x-4 cursor-pointer"
              href="https://www.linkedin.com/in/alberto-garcia-sola/"
              target="_blank"
            >
              <svg-icon :icon="'linkedin'" />
              <p>/alberto-garcia-sola</p>
            </a>
            <a
              class="flex flex-wrap items-center space-x-4 cursor-pointer"
              href="https://github.com/dawalberto"
              target="_blank"
            >
              <svg-icon :icon="'github'" />
              <p>/dawalberto</p>
            </a>
          </div>
        </div>
      </transition>
      <div class="w-100 md:w-5/12 mt-0">
        <img class="w-100 my-img" src="@/assets/yoCabeza.png" alt="yo animacion" />
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue'

export default {
  name: 'Contact',
  components: { SvgIcon },
}
</script>

<style>
@keyframes bob {
  from {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, -0.402777775rem);
  }
  to {
    transform: translate(0, 0);
  }
}
.my-img {
  animation-name: bob;
  animation-duration: 3.6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
</style>
