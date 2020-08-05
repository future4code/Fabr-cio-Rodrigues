export class Dish {
  public price: number;
  public cost: number;
  public ingredients: string[];
  public timeToCook: number;

  constructor(
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number
  ) {
    this.price = price;
    this.cost = cost;
    this.ingredients = ingredients;
    this.timeToCook = timeToCook;
  }

  public getProfit(): number {
    return this.price - this.cost;
  }
}
