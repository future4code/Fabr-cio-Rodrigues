import * as fs from "fs";
import moment from "moment";

type Transaction = {
  value: number;
  desc: string;
  paymentDate: string;
};

type Account = {
  name: string;
  cpf: string;
  userBirthday: moment.Moment;
  balance: number;
  extract: any[];
};

const receivedAccounts: string = fs.readFileSync("./data.json").toString();
const updatedAccounts: Account[] = receivedAccounts
  ? JSON.parse(receivedAccounts)
  : [];

const newArgs = process.argv.slice(1);
const insertedName: string = newArgs[1];
const insertedCpf: string = newArgs[2];
const insertedAmount: number = Number(newArgs[3]);
const insertedDescription: string = newArgs[4];
const insertedDate: string = newArgs[5];

const payAccount = (): void => {
  const cpf = insertedCpf;
  const username = insertedName;
  const newDate = moment(insertedDate, "DD/MM/YYYY").format("DD/MM/YYYY");

  try {
    let newTransaction: Transaction = {
      value: insertedAmount,
      desc: insertedDescription,
      paymentDate: insertedDate,
    };

    let elementsIndex = updatedAccounts.findIndex(
      (element) => element.cpf == cpf && element.name == username
    );
    let newArray = [...updatedAccounts];

    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      balance: newArray[elementsIndex].balance - newTransaction.value,
      extract: newArray[elementsIndex].extract = [
        ...newArray[elementsIndex].extract,
        newTransaction,
      ],
    };

    const dataAsString: string = JSON.stringify(newArray, null, 2);
    fs.writeFileSync("./data.json", `\n${dataAsString}`);
  } catch (error) {
    console.log("Erro ao atualizar a base de dados.", error);
  }
};

payAccount();
