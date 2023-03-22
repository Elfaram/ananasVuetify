import { createRouter, createWebHistory } from "vue-router";

// Views
import Acceuil from "@/views/Acceuil.vue";
import ContactView from "@/views/ContactView.vue";
import NotFound from "@/views/NotFound.vue";

// Layouts

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Acceuil,
      children: [
        {
          path: "/",
          redirect: { name: "acceuil" },
        },

        {
          path: "/acceuil",
          name: "acceuil",
          component: Acceuil,
        },
      ],
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactView,
    },
    {
      path: "/404",
      name: "404",
      component: NotFound,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },
  ],
});

export default router;
