import { db } from "../../libs/dexie.js";

export class AccountTable {
  /**
   * handler to GET all data from account table
   * @public
   * @method
   */
  getAll() {
    return db.accounts.toArray();
  }
}
