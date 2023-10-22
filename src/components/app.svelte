<script context="module">
  import { waitLocale } from "svelte-i18n";

  export async function preload() {
    // awaits for the loading of the 'en-US' and 'en' dictionaries
    return waitLocale();
  }
</script>

<script>
  import { f7, f7ready, App } from "framework7-svelte";
  import { onMount } from "svelte";
  import { isLoading } from "svelte-i18n";
  import { capacitorApp } from "../js/capacitor-app";
  import { f7params } from "../js/f7params";
  import { store } from "../js/stores/index";

  import AppPanel from "./app-panel.svelte";
  import AppToolbar from "./app-toolbar.svelte";

  onMount(() => {
    store.dispatch("getBonkerApp");
    f7ready(() => {
      // Init capacitor APIs (see capacitor-app.js)
      if (f7.device.capacitor) {
        capacitorApp.init(f7);
      }

      // Call F7 APIs here
      const theme = store.state.bonkerApp?.theme;
      f7.setDarkMode(
        theme && theme !== "auto" ? (theme === "true" ? true : false) : "auto",
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
