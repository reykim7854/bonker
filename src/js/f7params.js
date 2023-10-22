import { getDevice } from "framework7/lite-bundle";
import { routes } from "./routers/routes";
import { store } from "./stores";

const device = getDevice();

export const f7params = {
  name: "Bonker", // App name
  theme: "auto", // Automatic theme detection
  darkMode: "auto",

  // App store
  store: store,
  // App routes
  routes: routes,

  // Register service worker (only on production build)
  serviceWorker:
    process.env.NODE_ENV === "production"
      ? {
          path: "/service-worker.js",
        }
      : {},

  // Input settings
  input: {
    scrollIntoViewOnFocus: device.capacitor,
    scrollIntoViewCentered: device.capacitor,
  },
  // Capacitor Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },

  card: {
    swipeToClose: true,
    hideToolbarOnOpen: false,
    hideNavbarOnOpen: false,
  },
};
