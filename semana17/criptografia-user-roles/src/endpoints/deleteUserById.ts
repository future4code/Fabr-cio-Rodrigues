import { Request, Response } from "express";
import UserDB from "../data/UserDatabase";
import Authenticator from "../services/Authenticator";

export default async function deleteUserById(req: Request, res: Response) {
  try {
    const user = await new UserDB().deleteUserById(req.params.id);
    const token = req.headers.auth as string;
    const tokenData = Authenticator.getTokenData(token);

    if (tokenData.role !== "ADMIN") {
      throw new Error("Não autorizado!");
    }

    res.status(200).send({
      message: "Usuário deletado com sucesso!",
      user,
    });
  } catch (error) {
    res.status(400).send({
      message: error.sqlMessage || error.message,
    });
  }
}
