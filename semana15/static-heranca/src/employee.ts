import { dishesList } from "./disheslist";
import { bills } from "./bills";

class User {
  public name: string;

  constructor(name: string) {
    console.log("Chamando o construtor da classe User");
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public introduceYourself(): string {
    return `Olá, sou ${this.name}. Bom dia!`;
  }
}

export default class Employee extends User {
  static BENEFITS_VALUE: number = 400;
  protected static EMPLOYEES_COUNT: number = 0;

  protected role: string;
  protected admissionDate: Date;
  protected baseSalary: number;

  constructor(
    name: string,
    role: string,
    admissionDate: Date,
    baseSalary: number
  ) {
    super(name);
    this.admissionDate = admissionDate;
    this.baseSalary = baseSalary;
    this.role = role;
    Employee.EMPLOYEES_COUNT += 1;
  }

  public sayJob(): string {
    return `Eu trabalho aqui!`;
  }
  public getAdmissionDate(): Date {
    return this.admissionDate;
  }

  public getBaseSalary(): number {
    return this.baseSalary;
  }

  public calculateTotalSalary(): number {
    return this.baseSalary + Employee.BENEFITS_VALUE;
  }
}

export class Cashier extends Employee {
  constructor(
    name: string,
    role: string,
    admissionDate: Date,
    baseSalary: number
  ) {
    super(name, role, admissionDate, baseSalary);
  }

  public calculateBill(arr: any[]): number {
    let total = arr.reduce(function (prev, cur) {
      return prev + cur.price;
    }, 0);

    bills.push(total);
    return total;
  }
}

let newCashier = new Cashier("Carlos", "cashier", new Date(), 500);

console.log(
  "Aqui está sua conta, senhora: ",
  newCashier.calculateBill(dishesList)
);
