import JSONFileManager from "./JSONFileManager";
import { UserAccount, Transaction } from "./UserInfo";

const fileManager: JSONFileManager = new JSONFileManager("data.json");

const accounts = fileManager.readDatabase();

const newName: string = process.argv[2];
const newAge: number = Number(process.argv[3]);
const newCpf: string = process.argv[4];

let newTransaction: Transaction = new Transaction(
  "20/07/2020",
  50,
  "Jogos de vídeogame"
);

let newAccount = new UserAccount(newName, newAge, newCpf);

accounts.push(newAccount);

console.log(newAccount);

fileManager.writeToDatabase(accounts);

// type person = {
//   name: string;
// };

// function createPerson(name: string): person {
//   return { name: name };
// }

// const myPerson2 = createPerson("Robson");

// console.log(myPerson2);
