<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <i-navbar>
    <i-navbar-brand to="/"> ⚽ 🏆 </i-navbar-brand>
    <i-navbar-collapsible>
      <i-nav>
        <i-nav-item to="/"> Home </i-nav-item>
        <i-nav-item to="/tomorrow"> Matches Tomorrow </i-nav-item>
        <i-nav-item to="/about"> About </i-nav-item>
      </i-nav>
      <!-- <ColorModeSwitch /> -->
    </i-navbar-collapsible>
  </i-navbar>
  <i-layout>
    <i-layout-header> </i-layout-header>
    <i-layout-content>
      <RouterView :key="$route.fullPath" />
    </i-layout-content>
    <i-layout-footer>
      <i-container>
        <i-row center class="_margin-y:3">
          <i-column>
            <router-link to="/">Home</router-link>
          </i-column>
          <i-column>
            <router-link to="/tomorrow">Matches Tomorrow</router-link>
          </i-column>
          <i-column>
            <router-link to="/about">About</router-link>
          </i-column>
        </i-row>
      </i-container>
    </i-layout-footer>
  </i-layout>
</template>
<script lang="ts">
// import ColorModeSwitch from "@/components/ColorModeSwitch.vue";
</script>
<style scoped></style>
