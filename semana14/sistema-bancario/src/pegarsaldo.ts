import * as fs from "fs";

type Account = {
  name: string;
  cpf: string;
  userBirthday: moment.Moment;
  balance: number;
};

const receivedAccounts: string = fs.readFileSync("./data.json").toString();
const updatedAccounts: Account[] = receivedAccounts
  ? JSON.parse(receivedAccounts)
  : [];

const newArgs = process.argv.slice(1);

const insertedName: string = newArgs[1];
const insertedCpf: string = newArgs[2];

const getBalance = (): any => {
  const cpf = insertedCpf;
  const username = insertedName;

  let balance = updatedAccounts.forEach(
    (element: any, i: number, array: any) => {
      if (element.cpf === cpf && element.name === username) {
        console.log(
          `Olá ${
            element.name
          }! O saldo da sua conta é de R$ ${element.balance.toFixed(2)}`
        );
      }
    }
  );

  return balance;
};

getBalance();
