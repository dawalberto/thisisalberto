<template>
  <div class="terminal">
    <div class="flex space-x-2 pl-3 py-3">
      <div class="terminal-button terminal-button-red"></div>
      <div class="terminal-button terminal-button-yellow"></div>
      <div class="terminal-button terminal-button-green"></div>
    </div>
    <div class="screen">
      <p style="white-space: pre-line">
        <span class="font-bold text-green-500">➜</span>
        <span class="font-bold text-blue-500 px-3">~</span>
        {{ $t('home.aboutMe') }}
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
