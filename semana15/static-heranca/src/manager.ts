import { employees } from "./employees";
import { Cashier } from "./employee";
import { Chef } from "./chef";

class Manager extends Cashier {
  constructor(
    name: string,
    role: string,
    admissionDate: Date,
    baseSalary: number
  ) {
    super(name, role, admissionDate, baseSalary);
  }

  public hireEmployee(name: string, role: string, baseSalary: number): void {
    const newEmployee = new Chef(name, role, new Date(), baseSalary);
    console.log(`Novo(a) empregado(a) contratado(a) com sucesso!`);
    employees.push(newEmployee);
  }

  public fireEmployee(name: string): void {
    let newEmployeesList = employees.filter((e) => e.name !== name);

    console.log(`Empregado(a) demitido(a) com sucesso!`);
  }
}
