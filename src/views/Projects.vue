<template>
  <div class="flex flex-col space-y-16">
    <div class="project-container">
      <div class="logo-container">
        <img class="w-full" src="@/assets/jjoinLogo.png" alt="logo jjoin" />
      </div>
      <div class="self-center">
        <h1 class="project-title md:text-left underline-title">Jjoin</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi magni tempore
          consequatur facere ducimus quas voluptatem quidem repellat quaerat. Dolores
          delectus aspernatur optio suscipit, alias porro quo corporis obcaecati nisi...
        </p>
      </div>
    </div>
    <div class="project-container md:flex-row-reverse">
      <div class="logo-container">
        <img
          class="w-full"
          src="@/assets/clasicaguitarraLogo.png"
          alt="logo clasicaguitarra"
        />
      </div>
      <div class="self-center">
        <h1 class="project-title md:text-right underline-title">Clasicaguitarra</h1>
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
export default {}
</script>

<style>
.project-container {
  @apply flex md:space-x-4 flex-col 
  md:flex-row p-4 rounded-xl 
  cursor-pointer;
}

.logo-container {
  @apply md:flex-none w-3/4 mx-auto md:w-1/5;
}

.project-title {
  @apply mb-2 text-center relative;
}
</style>
