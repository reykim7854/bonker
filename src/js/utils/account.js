import { AccountTable } from "./db/account.js";
import { accountStore } from "../stores/account.js";

export class Account {
  /**
   * initialize field theme
   * @constructor
   */
  constructor() {
    this.db = new AccountTable();
  }

  /**
   * get account from db
   * @public
   * @method
   */
  async getAccounts() {
    try {
      const res = await this.db.getAll();
      if (res) {
        accountStore.dispatch("setAccounts", res);
      } else {
        throw new Error("Failed to get accounts!");
      }
    } catch (error) {
      //
    }
  }
}
