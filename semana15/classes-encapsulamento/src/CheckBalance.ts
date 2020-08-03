import JSONFileManager from "./JSONFileManager";
const fileManager: JSONFileManager = new JSONFileManager("data.json");
const accounts = fileManager.readDatabase();

const insertedName: string = process.argv[2];
const insertedCpf: string = process.argv[3];

const getBalance = (): any => {
  let balance = accounts.forEach((element: any, i: number, array: any) => {
    if (element.cpf === insertedCpf && element.name === insertedName) {
      console.log(
        `Olá ${
          element.name
        }! O saldo da sua conta é de R$ ${element.balance.toFixed(2)}`
      );
    }
  });

  return balance;
};

getBalance();
