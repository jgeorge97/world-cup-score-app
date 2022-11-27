<template>
  <a @click="setColorMode">
    <icon-fa-solid-sun v-if="colorMode === 'dark'" />
    <icon-fa-solid-moon v-else />
    <span class="_visually-hidden">
      <span>Toggle color mode</span>
    </span>
  </a>
</template>
<script lang="ts">
import type { Prototype } from "@inkline/inkline";
import { defineComponent, inject, ref } from "vue";

export default defineComponent({
  setup() {
    const inkline = inject<Prototype>("inkline", {} as any);
    const colorMode = ref(inkline.options.colorMode);

    // Set the initial color mode value to determine the icon to be displayed
    if (colorMode.value === "system" && typeof window !== "undefined") {
      colorMode.value = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
    }

    // Toggle between light and dark mode
    const setColorMode = () => {
      const mode = colorMode.value === "dark" ? "light" : "dark";

      inkline.options.colorMode = mode;
      colorMode.value = mode;
    };

    return {
      colorMode,
      setColorMode,
    };
  },
});
</script>
