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
const insertedAmount: number = Number(newArgs[3]);

const updateBalance = () => {
  const cpf = insertedCpf;
  const username = insertedName;

  let elementsIndex = updatedAccounts.findIndex(
    (element) => element.cpf == cpf && element.name == username
  );
  let newArray = [...updatedAccounts];

  newArray[elementsIndex] = {
    ...newArray[elementsIndex],
    balance: newArray[elementsIndex].balance + insertedAmount,
  };

  const dataAsString: string = JSON.stringify(newArray, null, 2);
  fs.writeFileSync("./data.json", `\n${dataAsString}`);
};

updateBalance();
