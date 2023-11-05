import { createStore } from "framework7/lite";

export const store = createStore({
  state: {
    bonkerApp: {
      theme: "auto",
    },
  },
  getters: {
    bonkerApp: ({ state }) => state.bonkerApp,

    /**
     * get `theme` value from bonkerApp state
     * @param store store context
     * @returns {(boolean|string)} `true` for dark mode, `false` for light mode or `auto`
     */
    bonkerAppTheme: ({ state }) => {
      if (state.bonkerApp?.theme) {
        if (
          state.bonkerApp.theme === "auto" ||
          state.bonkerApp.theme === "true" ||
          state.bonkerApp.theme === "false"
        ) {
          return state.bonkerApp.theme;
        }
      }

      return "auto";
    },
  },
  actions: {
    /**
     * get value from local storage for `bonkerApp` state
     * @param store store context
     */
    getBonkerAppFromLocalStorage: ({ dispatch }) => {
      dispatch("setBonkerApp", JSON.parse(localStorage.getItem("bonkerApp")));
    },

    /**
     * set value for state `bonkerApp`
     * @param store store context
     * @param {object} items key & value to be set
     */
    setBonkerApp: ({ state }, items) => {
      state.bonkerApp = { ...state.bonkerApp, ...items };
    },

    /**
     * set value for local storage bonkerApp
     * @param store store context
     * @param {object} items key & value to be set
     */
    setBonkerAppToLocalStorage: ({ state }) => {
      localStorage.setItem("bonkerApp", JSON.stringify(state.bonkerApp));
    },
  },
});
