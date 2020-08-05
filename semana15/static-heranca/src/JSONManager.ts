import * as fs from "fs";

export default class JSONFileManager {
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  public readDatabase(): any {
    try {
      const fileData: string = fs
        .readFileSync(`${this.fileName}.json`)
        .toString();
      return JSON.parse(fileData);
    } catch (error) {
      console.log("Erro ao ler a base de dados: " + error.message);
      return [];
    }
  }

  public writeToDatabase(data: any): void {
    try {
      const dataAsString: string = JSON.stringify(data, null, 2);
      fs.writeFileSync(this.fileName, dataAsString);
    } catch (error) {
      console.log("Erro ao salvar os dados: " + error.message);
    }
  }
}
