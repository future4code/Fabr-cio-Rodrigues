import * as fs from "fs";
import moment from "moment";
type account = {
  nome: string;
  cpf: string;
  dataNascimento: string;
  saldo: number;
};

const newArgs = process.argv.slice(1);
const insertedName: string = newArgs[1];
const insertedCpf: string = newArgs[2];
const insertedBirthday: string = newArgs[3];

let accounts;

export function writeToDatabase(data: any): void {
  try {
    const dataAsString: string = JSON.stringify(data, null, 2);
    fs.appendFileSync("./data.json", `\n${dataAsString}`);
  } catch (error) {
    console.log("Erro ao salvar os dados: " + error.message);
  }
}

export function readDatabase(): any {
  try {
    const fileData: string = fs.readFileSync("./data.json").toString();
    JSON.parse('{"rightQuotes": 5}');
    return JSON.parse(fileData);
  } catch (error) {
    console.log("Erro ao ler a base de dados: " + error.message);
    return [];
  }
}

const createNewAccount = () => {
  let newAccount: account = {
    nome: insertedName,
    cpf: insertedCpf,
    dataNascimento: insertedBirthday,
    saldo: 0,
  };

  console.log("Nova conta criada com sucesso!");
  writeToDatabase(newAccount);
};

createNewAccount();
