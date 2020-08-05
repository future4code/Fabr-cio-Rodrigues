import { Dish } from "./dish";

export class SaltyDish extends Dish {
  constructor(
    name: string,
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number
  ) {
    super(name, price, cost, ingredients, timeToCook);
  }

  public cook(): void {
    console.log("Starting Salty Dish");
  }
}

const feijoada = new SaltyDish("feijoada", 100, 20, ["leite condensado"], 100);
console.log(feijoada.getProfit());

const acaraje = new SaltyDish("acarajé", 100, 20, ["baunilha"], 100);
console.log(acaraje.getProfit());
