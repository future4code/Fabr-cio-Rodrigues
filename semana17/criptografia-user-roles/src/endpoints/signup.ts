import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";
import UserDB from "../data/UserDatabase";
import HashManager from "../services/HashManager";

export default async function signup(req: Request, res: Response) {
  try {
    const { name, nickname, email, password, role } = req.body;
    const id = IdGenerator.execute();

    if (!name || !nickname || !email || !password) {
      throw new Error('"name","nickname" e "email" são obrigatórios');
    }

    const cypheredPassword = await new HashManager().hash(password);

    await new UserDB().createUser(
      id,
      name,
      nickname,
      email,
      cypheredPassword,
      role
    );

    const token = Authenticator.generateToken({ id, role });

    res.status(200).send({
      message: "Usuário criado!",
      token,
    });
  } catch (error) {
    res.status(400).send({
      message: error.sqlMessage || error.message,
    });
  }
}
