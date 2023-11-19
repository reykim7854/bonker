import Dexie from "dexie";

export const db = new Dexie("bonkerDatabase");
db.version(1).stores({
  accounts: "++id, category, accountName, accountNumber, balance",
  expenses: "++id, category, totalAmount",
  incomes: "++id, category, totalAmount",
  transfers: "++id, [senderId+receiverId], category, amount",
  category: "++id, type",
});
