import { Dish } from "./dish";

export class SaltyDish extends Dish {
  constructor(
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number
  ) {
    super(price, cost, ingredients, timeToCook);
  }
}

const feijoada = new SaltyDish(100, 20, ["leite condensado"], 100);
console.log(feijoada.getProfit());
