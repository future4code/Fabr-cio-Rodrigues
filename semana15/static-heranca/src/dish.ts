export abstract class Dish {
  public name: string;
  public price: number;
  protected cost: number;
  protected ingredients: string[];
  protected timeToCook: number;

  constructor(
    name: string,
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number
  ) {
    this.name = name;
    this.price = price;
    this.cost = cost;
    this.ingredients = ingredients;
    this.timeToCook = timeToCook;
  }

  public getProfit(): number {
    return this.price - this.cost;
  }

  public abstract cook(): void;
}
