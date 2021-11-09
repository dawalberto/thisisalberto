<template>
  <div class="terminal">
    <div class="flex space-x-2 pl-3 py-3">
      <div class="terminal-button terminal-button-red"></div>
      <div class="terminal-button terminal-button-yellow"></div>
      <div class="terminal-button terminal-button-green"></div>
    </div>
    <div class="screen">
      <p>
        root@10.0.0.1:~$ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        pellentesque feugiat nibh eget facilisis. Vivamus in urna mauris. Morbi sagittis
        facilisis felis et porttitor. Aliquam erat volutpat. Proin blandit eros eros,
        venenatis dignissim tellus sollicitudin eget. Vivamus et est pretium, rutrum arcu
        ac, tempus risus. Nunc dapibus urna nec tincidunt volutpat. Nullam egestas erat et
        orci auctor eleifend. Aliquam et turpis quis eros pulvinar tincidunt. Integer
        volutpat, ex eu vehicula iaculis, metus erat rutrum tellus, quis efficitur mi ex
        et libero. Aliquam faucibus, ipsum vitae tincidunt tempus, metus est ullamcorper
        justo, nec tincidunt lectus augue vitae libero. Vivamus dapibus est sit amet
        lectus porta molestie. Fusce in enim eu nisl sagittis laoreet in ac neque.
        Phasellus non commodo arcu, id dignissim magna. Donec dapibus lacus dui, vel
        congue tellus facilisis sed.
      </p>
    </div>
  </div>
</template>

<style>
.terminal {
  border: 1.5px solid;
  border-color: #32557f;
  @apply w-full rounded-xl bg-white;
}

.terminal-button {
  @apply rounded-full w-4 h-4 my-auto mx-0;
}

.terminal-button-red {
  background-color: #fd5959;
}

.terminal-button-yellow {
  background-color: #fdbc30;
}

.terminal-button-green {
  background-color: #36ce40;
}

.screen {
  @apply font-mono px-2;
  color: #32557f;
}
</style>
