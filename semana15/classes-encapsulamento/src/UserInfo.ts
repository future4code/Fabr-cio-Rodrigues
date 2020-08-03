export class Transaction {
  date: string;
  value: number;
  description: string;

  constructor(newDate: string, newValue: number, newDescription: string) {
    this.date = newDate;
    this.value = newValue;
    this.description = newDescription;
  }
}

export class UserAccount {
  private name: string;
  private age: number;
  private cpf: string;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(newName: string, newAge: number, newCpf: string) {
    this.name = newName;
    this.age = newAge;
    this.cpf = newCpf;
  }

  getBalance = (): number => this.balance;
  addBalance = (value: number): void => {
    console.log("Saldo atualizado com sucesso!");
    this.balance + value;
  };
}
