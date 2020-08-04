import { SaltyDish } from "./saltydish";
import { Dessert } from "./dessert";

const feijoada = new SaltyDish("feijoada", 100, 20, ["leite condensado"], 100);

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

const pudimDeLeite = new Dessert(
  "pudim de leite",
  50,
  20,
  ["leite condensado", "leite", "ovos"],
  150,
  80
);

export const dishesList = [feijoada, beijinho, beijinho, pudimDeLeite];

console.log(dishesList);
