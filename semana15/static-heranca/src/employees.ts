import { Cashier } from "./employee";
import { Chef } from "./chef";

let newCashier = new Cashier("Carlos", "cashier", new Date(), 500);

let newChef = new Chef("Henrique", "chef", new Date(), 900);

export const employees = [newCashier, newChef];
