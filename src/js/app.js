// Import Framework7 Styles
import "framework7/css/bundle";

// Import Icons and App Custom Styles
import "../css/icons.css";
import "../css/app.scss";

// import extra module
import "../localization/i18n.js";
import "./libs/dexie.js";

// Import App Component
import App from "../components/app.svelte";

// Import Framework7
import Framework7 from "framework7/lite-bundle";

// Import Framework7-Svelte Plugin
import Framework7Svelte from "framework7-svelte";

// Init F7 Svelte Plugin
Framework7.use(Framework7Svelte);

// Mount Svelte App
// eslint-disable-next-line no-unused-vars
const app = new App({
  target: document.getElementById("app"),
});
