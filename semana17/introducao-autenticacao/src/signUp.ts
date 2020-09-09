import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import Authenticator from "./services/Authenticator";
import IdGenerator from "./services/IdGenerator";
import { UserDatabase } from "./data/UserDatabase";

const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export const signup = app.post(
  "/signup",
  async (req: Request, res: Response) => {
    try {
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email. Please, insert a valid email.");
      }

      if (!req.body.password || req.body.password.length < 6) {
        throw new Error(
          "Invalid password. Passwords must contain more than six characters."
        );
      }

      const userData = {
        email: req.body.email,
        password: req.body.password,
      };

      const id = IdGenerator.execute();

      const userDb = new UserDatabase();
      await userDb.createUser(id, userData.email, userData.password);

      const authenticator = new Authenticator();
      const token = authenticator.generateToken({
        id,
      });

      res.status(200).send({
        token,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  }
);
