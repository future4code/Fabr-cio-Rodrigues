/** RESPOSTAS DOS EXERCÍCIOS TEÓRICOS:
 * 1. A: Consegui imprimir todas.
 * 2. A: O erro: "Não é possível criar uma instância de uma classe abstrata" aparece na IDE/Editor de texto.
 * 2. B: Exemplo => const newPlace: Place = new Place("10000-202").
 * 4. A: A classe possui propriedades herdadas de Resident e Client, e métodos herdados de ambas também, uma vez que ela é uma subclasse que implementa
 * a interface Client
 * 5. A e B: Quase todas a variáveis e métodos são parecidas, porém o que muda é o CNPJ; seu respectivo método getter e o valor do cálculo de conta.
 * 6. A: A IndustrialClient deve ser filha da classe Industry, uma vez que o conteúdo genérico da mesma se encaixa na IndustrialClient.
 * 6. B: A IndustrialClient implementa a interface Client pois seus atributos genéricos correspondem com os da IndustrialClient.
 * 6. C: Porque não é possível fazer um setter com o MachinesQuantity
 */

export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
  // como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}

export abstract class Place {
  constructor(protected cep: string) {}

  public getCep(): string {
    return this.cep;
  }
}

// EXERCÍCIO 3:
class Residence extends Place {
  constructor(private dwellersQuantity: number, cep: string) {
    super(cep);
  }

  public getDwellersQuantity(): number {
    return this.dwellersQuantity;
  }
}

class Commerce extends Place {
  constructor(private floorsQuantity: number, cep: string) {
    super(cep);
  }

  public getFloorsQuantity(): number {
    return this.floorsQuantity;
  }
}

class Industry extends Place {
  constructor(protected machinesQuantity: number, cep: string) {
    super(cep);
  }

  public getMachinesQuantity(): number {
    return this.machinesQuantity;
  }
}

// EXERCÍCIO 4
class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    dwellersQuantity: number,
    cep: string
  ) {
    super(dwellersQuantity, cep);
  }

  public getResidentCpf(): string {
    return this.cpf;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}

// EXERCÍCIO 5
class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    dwellersQuantity: number,
    cep: string
  ) {
    super(dwellersQuantity, cep);
  }

  public getResidentCnpj(): string {
    return this.cnpj;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }
}

class IndustrialClient extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public industrialRegistrationNumber: number,
    public consumedEnergy: number,
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }

  public getIndustrialRegNumber(): number {
    return this.industrialRegistrationNumber;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
  }
}

// EXERCÍCIO 7
class ClientManager {
  constructor(private clients: Client[], private bills: number[]) {
    this.clients = clients;
    this.bills = bills;
  }

  public getClientsQuantity(): number {
    return this.clients.length;
  }

  public calculateBillOfClient(registrationNumber: number): number {
    const foundClient = this.clients.find((client) => {
      return client.registrationNumber === registrationNumber;
    });

    if (foundClient) {
      this.bills.push(foundClient.calculateBill());
      return foundClient.calculateBill();
    }

    return 0;
  }

  public calculateTotalIncome(): number {
    let total: number = 0;
    this.clients.forEach((client) => {
      total += client.calculateBill();
    });
    return total;
  }

  public deleteUser(registrationNumber: number): void {
    let registrationIndex = undefined;

    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i].registrationNumber === registrationNumber) {
        registrationIndex = i;
      }
    }

    if (registrationIndex !== undefined) {
      this.clients.splice(registrationIndex, 1);
    }
  }
}

const client: Client = {
  name: "Goli",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  },
};
