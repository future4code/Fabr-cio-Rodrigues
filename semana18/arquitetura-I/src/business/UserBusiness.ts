import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {
  private userDatabase = new UserDatabase();
  authenticator: any;

  public async signup(name: string, email: string) {
    //viriam as validações de negócio.
    await this.userDatabase.signup(name, email);
  }

  async createUser(user: any): Promise<any> {
    const idGenerator = new IdGenerator();
    const hashManager = new HashManager();
    const userDatabase = new UserDatabase();
    const authenticator = new Authenticator();

    try {
      if (!user.name || !user.email || !user.password || !user.role) {
        throw new Error("Please fill all the fields");
      }

      if (user.email.indexOf("@") === -1) {
        throw new Error("Invalid Email");
      }

      if (user.password.length < 6) {
        throw new Error("Password must have at least 6 characters");
      }

      const id = idGenerator.generate();
      const hashPassword = await hashManager.hash(user.password);
      await userDatabase.createUser(
        id,
        user.email,
        user.name,
        hashPassword,
        user.role
      );
      const token = authenticator.generateToken({ id, role: user.role });

      return token;
    } catch (error) {
      throw new Error(
        error.message ||
          "Error creating user. Please check your system administrator."
      );
    }
  }

  public async approve(id: string) {
    await this.userDatabase.approve(id);
  }

  async getUserByEmail(user: any) {
    const userDatabase = new UserDatabase();
    const userFromDB = await userDatabase.getUserByEmail(user.email);

    const hashManager = new HashManager();
    const hashCompare = await hashManager.compare(
      user.password,
      userFromDB.getPassword()
    );

    const authenticator = new Authenticator();
    const accessToken = authenticator.generateToken({ id: userFromDB.getId() });

    if (!hashCompare) {
      throw new Error("Invalid Password!");
    }

    return accessToken;
  }

  public async getUserById(id: string) {
    //return pois é um select
    return await this.userDatabase.getUserById(id);
  }

  async get(token: string) {
    const userDatabase = new UserDatabase();

    this.authenticator.getData(token);
    return await userDatabase.get();
  }

  async deleteUser(input: any) {
    const userDatabase = new UserDatabase();
    const userFromDB = await userDatabase.getUserByEmail(input.email);
    const token = this.authenticator.generateToken({ id: userFromDB.getId() });

    const verifiedToken = this.authenticator.getData(token);

    if (verifiedToken.role !== "ADMIN") {
      throw new Error("Apenas administradores podem deletar usuários!");
    }

    return await userDatabase.deleteUser(input.id);
  }
}
