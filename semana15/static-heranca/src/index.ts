/** RESPOSTAS DOS EXERCÍCIOS TEÓRICOS:
 * 1. A: Não. Uma vez que ela é Private, podemos acessá-la apenas com métodos.
 * 1. B: Uma vez por instância.
 * 2. A: Houve 1 print do construtor da classe Customer.
 * 2. B: Houveram 2 prints do construtor da classe User. Uma vez que a classe User é a super da classe Customer, ela precisou ser chamada na
 * passada de props e na instanciação.
 * 3. A: O atributo password é privado, sendo imposs´viel de ser pego diretamente, necessitando então de um método que o revele.
 * 4. A: (linha de código usada: console.log(newCustomer.introduceYourself());)
 * 6. A: A mensagem é chamada 3 vezes.
 * 6. B: id, email, name, password, admissionDate e baseSalary.
 * 8. A: Tive que passar todos os parâmetros existentes através do super.
 * 8. B: Não dá para printar nenhum atributo, pois todos são private ou protected. A informação pode ser printada apenas via getter.
 * 9. A: O método setter consegue printar o valor do atributo no terminal pois ele é público.
 * 10. A: O valor impresso no terminal é o valor do salário + benefícios + (comissão por venda * quantidade de vendas), assim como fora declarado
 * na classe filha, que por sua vez deu override no método da classe pai.
 * 11
 */

class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(id: string, email: string, name: string, password: string) {
    console.log("Chamando o construtor da classe User");
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }

  public introduceYourself(): string {
    return `Olá, sou ${this.name}. Bom dia!`;
  }
}

let newUser = new User("a", "a", "aaaa", "020202");

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

let newCustomer = new Customer(
  "1",
  "ola@hotmail.com",
  "Heloísa",
  "00000",
  "5555 5555 5555 55555"
);

console.log(newCustomer.introduceYourself());

class Employee extends User {
  static BENEFITS_VALUE: number = 400;

  protected admissionDate: Date;
  protected baseSalary: number;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    admissionDate: Date,
    baseSalary: number
  ) {
    super(id, email, name, password);
    this.admissionDate = admissionDate;
    this.baseSalary = baseSalary;
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

let newEmployee = new Employee(
  "2",
  "emplo@gmail.com",
  "Rodrigo",
  "010102",
  new Date(),
  500
);

console.log("Novo employee: ", newEmployee);

class Seller extends Employee {
  static SELLING_COMMISSION: number = 5;

  private salesQuantity: number = 0;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    admissionDate: Date,
    baseSalary: number
  ) {
    super(id, email, name, password, admissionDate, baseSalary);
  }

  public setSalesQuantity(n: number): number {
    return (this.salesQuantity = n);
  }

  public calculateTotalSalary(): number {
    return (
      this.baseSalary +
      Seller.BENEFITS_VALUE +
      Seller.SELLING_COMMISSION * this.salesQuantity
    );
  }
}

let newSeller = new Seller(
  "3",
  "employee3@outlook.com",
  "Joana",
  "02040608",
  new Date(),
  1000
);

console.log(newSeller.setSalesQuantity(50));
console.log("NOVO SALÁRIO: ", newSeller.calculateTotalSalary());
