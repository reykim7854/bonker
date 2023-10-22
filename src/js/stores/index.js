import { createStore } from "framework7/lite";

export const store = createStore({
  state: {
    bonkerApp: {
      theme: "auto",
    },
  },
  getters: {
    bonkerApp: ({ state }) => {
      return state.bonkerApp;
    },
    /**
     * get `theme` value from bonkerApp state
     * @param store store context
     * @returns {(boolean|string)} `true` for dark mode, `false` for light mode or `auto`
     */
    bonkerAppTheme: ({ state }) => {
      return state.bonkerApp?.theme === undefined
        ? "auto"
        : state.bonkerApp.theme;
    },
  },
  actions: {
    /**
     * get value from local storage for `bonkerApp` state
     * @param store store context
     */
    getBonkerApp: ({ dispatch }) => {
      dispatch("setBonkerApp", JSON.parse(localStorage.getItem("bonkerApp")));
    },

    /**
     * set value for state `bonkerApp` and
     * local storage bonkerApp
     * @param store store context
     * @param {object} items key & value to be set
     */
    setBonkerApp: ({ state }, items) => {
      state.bonkerApp = { ...state.bonkerApp, ...items };
      localStorage.setItem("bonkerApp", JSON.stringify(state.bonkerApp));
    },
  },
});
