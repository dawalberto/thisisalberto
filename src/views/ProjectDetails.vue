<template>
  <transition name="slide-fade" appear>
    <div class="bg-white">
      <router-link to="/projects">
        <close-button class="fixed left-2 top-2" />
      </router-link>
      <div class="mx-auto w-2/4 md:w-1/4 mt-24">
        <kinesis-container>
          <kinesis-element :strength="20" type="depth">
            <img class="w-full" src="@/assets/jjoinLogo.png" alt="logo jjoin" />
          </kinesis-element>
        </kinesis-container>
      </div>
      <div class="w-full mx-auto px-2 my-24">
        <h1
          class="
            absolute
            top-7
            right-4
            transform
            rotate-45
            text-4xl
            md:text-5xl
            text-center
          "
        >
          Jjoin
        </h1>
        <div class="flex flex-col space-y-20 w-full">
          <!-- question -->
          <div>
            <div class="flex justify-start">
              <h1 class="text-2xl underline-title underline-title-yellow">¿Por qué?</h1>
            </div>
            <div class="flex flex-row items-center">
              <p class="md:pl-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                accusamus suscipit a saepe quas non recusandae explicabo porro veniam
                earum quasi, delectus enim neque ipsam harum modi fugit omnis
                consequuntur.
              </p>
              <div class="w-3/12 md:w-1/6 flex-shrink-0 flex-grow-0">
                <img src="@/assets/absurd-por-que.png" class="w-full" alt="why img" />
              </div>
            </div>
          </div>
          <!-- question -->
          <div class="w-full">
            <div class="flex justify-end">
              <h1 class="text-2xl underline-title underline-title-yellow">
                ¿Qué es exactamente?
              </h1>
            </div>
            <div class="flex flex-row-reverse items-center">
              <p class="md:pl-2 text-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                accusamus suscipit a saepe quas non recusandae explicabo porro veniam
                earum quasi, delectus enim neque ipsam harum modi fugit omnis
                consequuntur.
              </p>
              <div class="w-3/12 md:w-1/6 flex-shrink-0 flex-grow-0">
                <img src="@/assets/absurd-que-es.png" class="w-full" alt="what is img" />
              </div>
            </div>
          </div>
          <!-- question -->
          <div>
            <div class="flex justify-start">
              <h1 class="text-2xl underline-title underline-title-yellow">
                Tecnologías que he usado
              </h1>
            </div>
            <div class="flex flex-row items-center">
              <p class="md:pl-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                accusamus suscipit a saepe quas non recusandae explicabo porro veniam
                earum quasi, delectus enim neque ipsam harum modi fugit omnis
                consequuntur.
              </p>
              <div class="w-3/12 md:w-1/6 flex-shrink-0 flex-grow-0">
                <img
                  src="@/assets/absurd-tecnologias.png"
                  class="w-full"
                  alt="tecnologies img"
                />
              </div>
            </div>
          </div>
          <!-- question -->
          <div class="w-full">
            <div class="flex justify-start">
              <h1 class="text-2xl underline-title underline-title-yellow">Repositorio</h1>
            </div>
            <div class="flex items-center justify-start">
              <div class="w-3/12 md:w-1/6 flex-shrink-0 flex-grow-0">
                <img
                  src="@/assets/absurd-repositorio.png"
                  class="w-full"
                  alt="what is img"
                />
              </div>
              <ul class="md:pl-2">
                <li>
                  <span class="font-semibold">👉 Front </span>
                  <a href="#">blablablablabla</a>
                </li>
                <li>
                  <span class="font-semibold">👉 Back </span>
                  <a href="#">blablablablabla</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full text-center">
        <button
          class="
            button-project-details
            duration-200
            transform
            hover:scale-105 hover:-rotate-3
          "
        >
          Disfruta de Jjoin
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import CloseButton from '@/components/CloseButton.vue'

export default {
  name: 'ProjectDetails',
  components: { KinesisContainer, KinesisElement, CloseButton },
}
</script>

<style>
.button-project-details {
  background-color: #f6ce7d;
  @apply text-4xl md:text-6xl py-6 px-12 font-bold;
  -webkit-box-shadow: 10px 10px 0px 0px rgba(50, 85, 127, 1);
  -moz-box-shadow: 10px 10px 0px 0px rgba(50, 85, 127, 1);
  box-shadow: 10px 10px 0px 0px rgba(50, 85, 127, 1);
}
</style>
