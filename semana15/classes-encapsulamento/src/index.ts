import JSONFileManager from "./JSONFileManager";
import { UserAccount } from "./UserInfo";
import Bank from "./Bank";

const fileManager: JSONFileManager = new JSONFileManager("data.json");

const accounts = fileManager.getObjectFromFile();

const name: string = process.argv[2];
const age: number = Number(process.argv[3]);
const cpf: string = process.argv[4];

let newAccount = new UserAccount(name, age, cpf);

const checkCpf = (cpf: string): boolean => {
  for (let user of accounts) {
    if (user.cpf === cpf) {
      return true;
    }
  }
  return false;
};

let newBank = new Bank(accounts, fileManager);

if (!name || !age || !cpf) {
  console.log("Por favor, insira nome, idade e CPF válidos.");
} else if (checkCpf(cpf) === true) {
  console.log(
    `O CPF ${cpf} já está cadastrado! Tente novamente com outro CPF ou faça login usando este CPF.`
  );
} else if (age < 18) {
  console.log(`É necessário ter ao menos 18 anos para criar uma conta.`);
} else {
  // newBank.createAccount(newAccount);
}

// newBank.getAllAccounts();

// newAccount.payBill("iFood", 35);

// newAccount.addBalance(100);

// newAccount.transferAmount("Lucas", "000.111.222-44", 10);

// console.log("Olá! Dados da sua conta abaixo:");
// console.log(newBank.getAccountByCpfAndName("111.222.333-44", "Fabrício"));

/** RESPOSTAS DOS EXERCÍCIOS TEÓRICOS 

1) O construtor serve para dar a estrutura inicial de uma classe, atribuindo seus primeiros valores (mutáveis através de um setter). O chamamos na instanciação.
2) O construtor é chamado apenas uma vez, quando o mesmo dá a estrutura inicial da classe.
3) Podemos acessar atributos privados através de métodos.
4) let usuario = new UserAccount("111.111.111-40", "Fabrício", 20);
   console.log(usuario)
   //output: Todas as variáveis privadas são printadas.
*/
