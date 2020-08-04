import { Dessert } from "./dessert";
import { SaltyDish } from "./saltydish";
import { dishesList } from "./disheslist";
import Employee from "./employee";

console.log("Ó OS PRATO AE: ", dishesList);

export class Chef extends Employee {
  constructor(
    name: string,
    role: string,
    admissionDate: Date,
    baseSalary: number
  ) {
    super(name, role, admissionDate, baseSalary);
  }

  public removeDishFromMenu(dishName: string): void {
    let newDishesList = dishesList.filter((e) => e.name !== dishName);

    console.log("Cardápio atualizado: ", newDishesList);
  }

  public addDishToMenu(
    type: string,
    name: string,
    price: number,
    cost: number,
    ingredient: string[],
    timeToCook: number,
    slices: number
  ): void {
    if (type === "salty") {
      const newSaltyDish = new SaltyDish(
        name,
        price,
        cost,
        ingredient,
        timeToCook
      );
      console.log(
        `O prato ${newSaltyDish.name} foi adicionado ao menu com sucesso!`
      );
      dishesList.push(newSaltyDish);
    } else if (type === "dessert") {
      const newDessert = new Dessert(
        name,
        price,
        cost,
        ingredient,
        timeToCook,
        slices
      );

      console.log(
        `O prato ${newDessert.name} foi adicionado ao menu com sucesso!`
      );
      dishesList.push(newDessert);
    }
  }
}

let newChef = new Chef("Henrique", "chef", new Date(), 900);

newChef.removeDishFromMenu("beijinho");
newChef.addDishToMenu(
  "salty",
  "x-tudo",
  10,
  7,
  ["hambúrguer", "salsicha", "ovos", "alface"],
  50,
  2
);
