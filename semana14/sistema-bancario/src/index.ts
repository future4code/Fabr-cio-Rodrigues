import * as fs from "fs";
import moment from "moment";

type transaction = {
  valor: number;
  desc: string;
  dataPagamento: moment.Moment;
};

export function readDatabase(): any {
  try {
    const fileData: string = fs.readFileSync("./data.json").toString();
    return JSON.parse(fileData);
  } catch (error) {
    console.log("Erro ao ler a base de dados: " + error.message);
    return [];
  }
}

export function writeToDatabase(data: any): void {
  try {
    const dataAsString: string = JSON.stringify(data, null, 2);
    fs.writeFileSync("./data.json", dataAsString);
  } catch (error) {
    console.log("Erro ao salvar os dados: " + error.message);
  }
}
