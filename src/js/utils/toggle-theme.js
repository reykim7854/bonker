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
   * @public
   * @method
   * @param event button properties for toggling theme
   */
  toggleTheme(value) {
    try {
      if (value === "true" || value === "false" || value === "auto") {
        store.dispatch("setBonkerApp", { theme: value });
        store.dispatch("setBonkerAppToLocalStorage", { theme: value });
        this.#fieldTheme = value;
      } else {
        throw new Error("Non acceptable type or value!");
      }
    } catch (error) {
      //
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
