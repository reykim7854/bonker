<script context="module">
  import { waitLocale } from "svelte-i18n";

  export async function preload() {
    // awaits for the loading of the 'en-US' and 'en' dictionaries
    return waitLocale();
  }
</script>

<script>
  import { getDevice } from "framework7/lite-bundle";
  import {
    f7,
    f7ready,
    App,
  } from "framework7-svelte";
  import { onMount } from "svelte";
  import { isLoading } from "svelte-i18n";
  import cordovaApp from "../js/cordova-app";

  import routes from "../js/routes";
  import store from "../js/store";

  import AppPanel from "./app-panel.svelte";
  import AppToolbar from "./app-toolbar.svelte";

  const device = getDevice();

  // Framework7 Parameters
  let f7params = {
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
      scrollIntoViewOnFocus: device.cordova,
      scrollIntoViewCentered: device.cordova,
    },
    // Cordova Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },

    card: {
      swipeToClose: true,
      hideToolbarOnOpen: false,
      hideNavbarOnOpen: false,
    }
  };

  onMount(() => {
    const storage = JSON.parse(window.localStorage.getItem("bonker"));
    f7ready(() => {
      // Init cordova APIs (see cordova-app.js)
      if (f7.device.cordova) {
        cordovaApp.init(f7);
      }

      // Call F7 APIs here
      f7.setDarkMode(
        storage && storage?.theme && storage.theme !== "auto" ? (storage.theme === "true" ? true : false) : "auto",
      );
    });
  });
</script>

<App {...f7params}>
  {#if !$isLoading}
    <!-- Main panel-->
    <AppPanel></AppPanel>

    <!-- Main Toolbar -->
    <AppToolbar></AppToolbar>
  {/if}
</App>
