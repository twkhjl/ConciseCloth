import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/site/HomeView.vue";
import AdminHomeView from "@/views/admin/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/admin",
      name: "admin.home",
      component: AdminHomeView,
    },
  ],
});

export default router;
