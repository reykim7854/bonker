import { createStore } from "framework7/lite";

export const accountStore = createStore({
  state: {
    accounts: [],
  },
  getters: {
    accounts: ({ state }) => state.accounts,
  },
  actions: {
    setAccounts: ({ state }, accounts) => {
      state.accounts = accounts;
    },
  },
});
