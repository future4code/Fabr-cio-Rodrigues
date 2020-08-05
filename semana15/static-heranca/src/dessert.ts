import { Dish } from "./dish";

export class Dessert extends Dish {
  public slicesNumber: number;
  constructor(
    name: string,
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number,
    slicesNumber: number
  ) {
    super(name, price, cost, ingredients, timeToCook);
    this.slicesNumber = slicesNumber;
  }

  public getSlicePrice(): number {
    return this.price / this.slicesNumber;
  }

  public cook(): void {
    console.log("Baking Dessert");
  }
}

const brigadeiro = new Dessert(
  "brigadeiro",
  100,
  20,
  ["leite condensado"],
  100,
  10
);
console.log(brigadeiro.getSlicePrice());
console.log(brigadeiro.getProfit());

const beijinho = new Dessert(
  "beijinho",
  80,
  10,
  [
    "leite condensado",
    "coco seco ralado",
    "leite",
    "manteiga",
    "cravo-da-índia",
  ],
  95,
  10
);

console.log(beijinho.getSlicePrice());
console.log(beijinho.getProfit());
