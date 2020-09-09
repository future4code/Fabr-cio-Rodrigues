import express, { Request, Response } from "express";
import Authenticator from "./services/Authenticator";
import { UserDatabase } from "./data/UserDatabase";

const app = express();
app.use(express.json());

app.post("/login", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error(
        "Invalid email. Please try again with a registered email."
      );
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserByEmail(userData.email);

    if (user.password !== userData.password) {
      throw new Error(
        "Invalid password. Please try again with a registered password."
      );
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
