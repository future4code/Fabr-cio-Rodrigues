import JSONFileManager from "./JSONFileManager";
import { UserAccount, Transaction } from "./UserInfo";
import Bank from "./Bank";

const fileManager: JSONFileManager = new JSONFileManager("data.json");

const accounts = fileManager.getObjectFromFile();

const newName: string = process.argv[2];
const newAge: number = Number(process.argv[3]);
const newCpf: string = process.argv[4];

let newAccount = new UserAccount(newName, newAge, newCpf);

let newBank = new Bank(accounts, fileManager);

// newBank.createAccount(newAccount);

newBank.getAllAccounts();

newAccount.payBill("iFood", 35);

// newAccount.addBalance(100)

// console.log("Olá! Dados da sua conta abaixo:");
// console.log(newBank.getAccountByCpfAndName("111.222.333-44", "Fabrício"));
