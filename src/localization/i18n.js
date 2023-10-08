import { register, init, getLocaleFromNavigator } from "svelte-i18n";

register("en", () => import("./en.json"));
register("id", () => import("./id.json"));

init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromNavigator(),
});
