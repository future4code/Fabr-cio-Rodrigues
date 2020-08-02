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
const insertedReceiverName: string = newArgs[3];
const insertedReceiverCpf: string = newArgs[4];
const insertedAmount: number = Number(newArgs[5]);

const transferAmount = (): void => {
  const cpf = insertedCpf;
  const username = insertedName;

  const receiverName = insertedReceiverName;
  const receiverCpf = insertedReceiverCpf;

  try {
    let elementsIndex = updatedAccounts.findIndex(
      (element) => element.cpf == cpf && element.name == username
    );

    let newArray = [...updatedAccounts];

    // Usuário
    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      balance: newArray[elementsIndex].balance - insertedAmount,
    };

    let elementsIndex2 = updatedAccounts.findIndex(
      (element) => element.cpf == receiverCpf && element.name == receiverName
    );

    // Destinatário
    newArray[elementsIndex2] = {
      ...newArray[elementsIndex2],
      balance: newArray[elementsIndex2].balance + insertedAmount,
    };

    const dataAsString: string = JSON.stringify(newArray, null, 2);
    fs.writeFileSync("./data.json", `\n${dataAsString}`);
  } catch (error) {
    console.log("Erro ao atualizar a base de dados.", error);
  }
};

transferAmount();
