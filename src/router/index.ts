import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/MatchView.vue"),
      props: {
        day: 0
      }
    },
    {
      path: "/tomorrow",
      name: "Matches Tomorrow",
      component: () => import("@/views/MatchView.vue"),
      props: {
        day: 1
      }
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/AboutView.vue"),
    },
  ],
});

export default router;
