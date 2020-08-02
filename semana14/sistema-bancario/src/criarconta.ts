import * as fs from "fs";
import moment from "moment";

type Account = {
  name: string;
  cpf: string;
  userBirthday: moment.Moment;
  balance: number;
  extract: [];
};

const receivedAccounts: string = fs.readFileSync("./data.json").toString();
const updatedAccounts: Account[] = receivedAccounts
  ? JSON.parse(receivedAccounts)
  : [];

const newArgs = process.argv.slice(1);
const insertedName: string = newArgs[1];
const insertedCpf: string = newArgs[2];
const insertedBirthday: string = newArgs[3];

const checkCpf = (cpf: string): boolean => {
  let data: Account[] = JSON.parse(fs.readFileSync("./data.json").toString());
  for (let user of data) {
    if (user.cpf === cpf) {
      return true;
    }
  }
  return false;
};

const createNewAccount = (): void => {
  if (!insertedName || !insertedBirthday || !insertedCpf) {
    console.log("Oops, informações inválidas! Tente novamente.");
  } else if (checkCpf(insertedCpf) === true) {
    console.log(
      `O CPF ${insertedCpf} já está cadastrado! Tente novamente com outro CPF ou faça login usando este CPF.`
    );
  } else {
    let newAccount: Account = {
      name: insertedName,
      cpf: insertedCpf,
      userBirthday: moment(insertedBirthday, "DD/MM/YYYY"),
      balance: 0,
      extract: [],
    };

    let newAccounts = [...updatedAccounts, newAccount];

    const dataAsString: string = JSON.stringify(newAccounts, null, 2);
    fs.writeFileSync("./data.json", `\n${dataAsString}`);

    console.log("Nova conta criada com sucesso!");
  }
};

createNewAccount();
