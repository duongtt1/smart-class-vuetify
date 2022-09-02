import { defineAsyncComponent } from "vue";

export function registerGlobalComponents(app) {
  app.component(
    "AuthLayout-layout",
    defineAsyncComponent(() => import("../layouts/AuthLayout"))
  );

  app.component(
    "AppLayout-layout",
    defineAsyncComponent(() => import("../layouts/AppLayout.vue"))
  );
}
