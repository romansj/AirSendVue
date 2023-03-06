import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/features",
      name: "features",
      component: () => import("../views/FeaturesView.vue"),
    },
    {
      path: "/pricing",
      name: "pricing",
      component: () => import("../views/PricingView.vue"),
    },
    {
      path: "/downloads",
      name: "downloads",
      component: () => import("../views/DownloadsView.vue"),
    },
    {
      path: "/guide",
      name: "guide",
      component: () => import("../views/GuideView.vue"),
    },
    {
      path: "/guide/how-to-connect",
      name: "how-to-connect",
      component: () => import("../views/GuideConnectView.vue"),
    },
    {
      path: "/guide/how-to-disconnect",
      name: "how-to-disconnect",
      component: () => import("../views/GuideDisconnectView.vue"),
    },
    {
      path: "/guide/how-to-message-one-device",
      name: "how-to-message-one-device",
      component: () => import("../views/GuideMessageOneView.vue"),
    },
    {
      path: "/guide/how-to-disable-notifications",
      name: "how-to-disable-notifications",
      component: () => import("../views/GuideNotificationsView.vue"),
    },
    {
      path: "/guide/how-to-disable-battery-optimization",
      name: "how-to-disable-battery-optimization",
      component: () => import("../views/GuideBatteryOptimization.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("../views/FAQView.vue"),
    },
    {
      path: "/legal",
      name: "legal",
      component: () => import("../views/LegalView.vue"),
    },


    {
      path: "/privacy",
      name: "privacy",
      component: () => import("../views/PrivacyAppView.vue"),
    },

    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import("../views/404View.vue") },
    // if you omit the last `*`, the `/` character in params will be encoded when resolving or pushing
    { path: '/:pathMatch(.*)', name: 'bad-not-found', component: () => import("../views/404View.vue") },

  ],
  scrollBehavior () {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
});

export default router;
