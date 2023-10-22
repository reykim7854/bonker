import { store } from "../stores/index.js";

/**
 * Class for toggling app theme
 * @class ToggleTheme
 */
class ToggleTheme {
  /**
   * @private theme field
   * @type string
   */
  #theme = "auto";

  /**
   * initialize field theme
   * @constructor
   */
  constructor() {
    this.#theme = store.state.bonkerApp.theme;
  }

  /**
   * Method for toggling light or dark theme
   * @method
   * @param event button properties for toggling theme
   */
  toggleTheme(value) {
    if (value === "true" || value === "false" || value === "auto") {
      store.dispatch("setBonkerApp", { theme: value });
      this.#fieldTheme = value;
    } else {
      throw new Error("Non acceptable type or value!");
    }
  }

  /**
   * @public
   * @return theme field
   */
  get fieldTheme() {
    return this.#theme;
  }

  /**
   * @private
   * @param {string} theme accepts `true`, `false` or `auto`
   */
  set #fieldTheme(theme) {
    this.#theme = theme;
  }
}

export { ToggleTheme };
