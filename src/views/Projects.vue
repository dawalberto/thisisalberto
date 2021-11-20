<template>
  <div class="flex flex-col space-y-16 pb-24">
    <router-link to="/project-details" class="project-container">
      <div class="logo-container">
        <kinesis-container>
          <kinesis-element :strength="20" type="depth">
            <img class="w-full" src="@/assets/jjoinLogo.png" alt="logo jjoin" />
          </kinesis-element>
        </kinesis-container>
      </div>
      <div class="self-center">
        <h1 class="project-title md:text-left underline-title underline-title-yellow">
          Jjoin
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi magni tempore
          consequatur facere ducimus quas voluptatem quidem repellat quaerat. Dolores
          delectus aspernatur optio suscipit, alias porro quo corporis obcaecati nisi...
        </p>
      </div>
    </router-link>
    <div class="project-container md:flex-row-reverse">
      <div class="logo-container">
        <kinesis-container>
          <kinesis-element :strength="20" type="depth">
            <img
              class="w-full"
              src="@/assets/clasicaguitarraLogo.png"
              alt="logo clasicaguitarra"
            />
          </kinesis-element>
        </kinesis-container>
      </div>
      <div class="self-center">
        <h1 class="project-title md:text-right underline-title underline-title-yellow">
          Clasicaguitarra
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi magni tempore
          consequatur facere ducimus quas voluptatem quidem repellat quaerat. Dolores
          delectus aspernatur optio suscipit, alias porro quo corporis obcaecati nisi...
        </p>
      </div>
    </div>
    <div class="flex md:space-x-4 flex-col md:flex-row p-2">
      <p>
        Considero que estos son mis proyectos más interesantes por la idea y tecnologías
        usadas para llevarlos a cabo pero también tengo
        <a href="#" class="text-yellow-500"> otros proyectitos chulos </a>
      </p>
    </div>
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

export default {
  name: 'Projects',
  components: { KinesisContainer, KinesisElement },
}
</script>

<style>
.project-container {
  @apply flex md:space-x-4 flex-col 
  md:flex-row p-4 cursor-pointer;
}

.logo-container {
  @apply md:flex-none w-3/4 mx-auto md:w-1/5;
}

.project-title {
  @apply mb-2 text-center relative;
}
</style>
