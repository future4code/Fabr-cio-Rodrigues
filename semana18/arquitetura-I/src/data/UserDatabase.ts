import { BaseDatabase } from "./BaseDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

export class UserDatabase extends BaseDatabase {
  static TABLE_NAME: string = "User_arq";
  private idGenerator = new IdGenerator();

  public async signup(name: string, email: string) {
    try {
      const id = this.idGenerator.generate();
      await super.getConnection().raw(`
             INSERT INTO User_arq(id, name, email)
             VALUES
                 (
                     "${id}",
                     "${name}",
                "${email}"
                )
                `);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  public async createUser(
    id: string,
    email: string,
    name: string,
    password: string,
    role: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          email,
          name,
          password,
          role,
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async approve(id: string) {
    const queryData = await this.getConnection().raw(`
        SELECT * FROM User_arq
        WHERE id = "${id}"
        `);

    const data = queryData[0][0];
    console.log(data);

    if (data.is_approved === 1) {
      throw new Error("Usuário já aprovado!");
    }

    await this.getConnection().raw(`
        UPDATE User_arq
        SET is_approved = 1
        WHERE id = "${id}"
        `);
  }

  public async getUserByEmail(email: string): Promise<any> {
    try {
      const result = await this.getConnection()
        .select("*")
        .from(UserDatabase.TABLE_NAME)
        .where({ email });
      if (result[0]) {
        throw new Error("Usuário não encontrado");
      }
      return result[0];
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserById(id: string) {
    const result = await this.getConnection().raw(`
        SELECT * FROM User_arq
        WHERE id = "${id}"
        `);

    const data = result[0][0];
    console.log(data);
    if (data.is_approved === 0) {
      throw new Error("Usuário não aprovado");
    }

    return data;
  }

  public async deleteUser(id: string): Promise<void> {
    try {
      await this.getConnection()
        .where({ id })
        .from(UserDatabase.TABLE_NAME)
        .del();
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async get(): Promise<any[]> {
    try {
      const users: any = [];

      const result = await this.getConnection()
        .select("*")
        .from(UserDatabase.TABLE_NAME);

      for (let user of result) {
        users.push(user);
      }

      return users;
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
