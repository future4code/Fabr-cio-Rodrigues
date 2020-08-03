import { UserAccount } from "./UserInfo";
import JSONFileManager from "./JSONFileManager";

export default class Bank {
  accounts: UserAccount[];
  fileManager: JSONFileManager;

  constructor(newAccounts: UserAccount[], fileManager: JSONFileManager) {
    this.accounts = newAccounts;
    this.fileManager = fileManager;
  }

  createAccount = (userAccount: UserAccount): void => {
    const accounts = this.fileManager.getObjectFromFile();

    accounts.push(userAccount);

    this.fileManager.writeObjectToFile(accounts);
  };

  getAllAccounts = (): UserAccount[] => {
    const accounts: UserAccount[] = this.fileManager.getObjectFromFile();

    console.log("Aqui estão todas as contas vinculadas ao nosso banco:");
    console.log(accounts);
    return accounts;
  };

  getAccountByCpfAndName = (cpf: string, name: string): any => {
    const accounts: UserAccount[] = this.fileManager.getObjectFromFile();
    let retrievedAccount: any = [];

    accounts.forEach((element: any, i: number, array: any) => {
      if (element.cpf === cpf && element.name === name) {
        let newAccount = {
          name: element.name,
          age: element.age,
          cpf: element.cpf,
          balance: element.balance,
          transactions: element.transactions,
        };

        retrievedAccount.push(newAccount);
      }
    });

    if (retrievedAccount.length !== 0) {
      return retrievedAccount;
    }
  };
}
