<template>
  <div style="min-height: calc(100vh - 6rem)">
    <menu-bar />
    <router-view class="w-screen max-w-6xl mx-auto p-2 overflow-x-hidden pb-8" />
  </div>
  <footer-simple class="h-24" />
</template>

<script>
import MenuBar from '@/components/MenuBar.vue'
import FooterSimple from '@/components/FooterSimple.vue'

export default {
  name: 'App',
  components: { MenuBar, FooterSimple },
  mounted() {
    document.title = 'Alberto García Sola'
  },
}
</script>

<style>
body {
  color: #32557f;
}

/* https://sharkcoder.com/visual/underline */
:root {
  /* The intrinsic width of the underline stroke (in pixels). This is 
   * the same as the height of the cap images. Don't specify the
   * units! This is because of some of the calculations we do later on. */
  --underline-intrinsic-width: 8;

  /* The actual width of the underline stroke we want to render (in pixels).
   * You can modify this, and the sizing and positioning should be calculated
   * accordingly. Again, Don't specify the units! */
  --underline-width: 12;

  /* The color used to draw the underline. It should match the color
   * used in the cap images... unfortunately we can't modify the SVG
   * fill via CSS because it's a background image. */
  --underline-color: #f6ce7d;

  /* We need to know the width of the cap images so that we
   * can position everything on the x axis accordingly. */
  --underline-cap-width: 4px;

  /* The border is positioned relative to the bottom of the line.
   * We can move it upwards a little to create an overlap effect. */
  --underline-offset-y: -2px;

  /* The padding to add to the x axis. By default, the caps would be
   * aligned with the beginning and end of the line. */
  --underline-padding-x: 0.12em;
}

.underline-title {
  /* display: inline; */
  --underline-width-scale: calc(
    var(--underline-width) / var(--underline-intrinsic-width)
  );
  padding: 0
    calc(
      var(--underline-padding-x) +
        calc(var(--underline-cap-width) * var(--underline-width-scale))
    );
  box-decoration-break: clone;
  background-repeat: no-repeat;
  background-position-x: calc(var(--underline-cap-width) * var(--underline-width-scale)),
    0, 100%;
  background-position-y: calc(100% - var(--underline-offset-y) * -1);
  background-size: calc(
        100% - calc(var(--underline-cap-width) * var(--underline-width-scale) * 2)
      )
      calc(var(--underline-width) * 1px),
    auto calc(var(--underline-width) * 1px), auto calc(var(--underline-width) * 1px);

  font-size: 2.5rem;
  font-weight: bold;
  --underline-width: 20;
  --underline-offset-y: -2px;
  /* The cap images to use that form the left and right shape.*/
  --cap-image-left: url('./assets/underline-left-yellow.svg');
  --cap-image-right: url('./assets/underline-right-yellow.svg');
}

.underline-title-yellow {
  background-image: linear-gradient(
      180deg,
      var(--underline-color),
      var(--underline-color)
    ),
    var(--cap-image-left), var(--cap-image-right);
}

.slide-fade-enter-active,
.slide-fade-left-enter-active,
.slide-fade-right-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active,
.slide-fade-left-leave-active,
.slide-fade-right-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(40px);
  opacity: 0;
}

.slide-fade-left-enter-from,
.slide-fade-left-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}

.slide-fade-right-enter-from,
.slide-fade-right-leave-to {
  transform: translateX(40px);
  opacity: 0;
}

.center-body {
  @apply 2xl:absolute 2xl:top-1/2 2xl:left-1/2 2xl:w-screen 2xl:max-w-6xl 2xl:transform 2xl:-translate-y-1/2 2xl:-translate-x-1/2;
}
</style>
