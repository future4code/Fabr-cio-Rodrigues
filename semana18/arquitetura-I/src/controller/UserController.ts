import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
export class UserController {
  async signup(req: Request, res: Response) {
    const userBusiness = new UserBusiness();

    try {
      const input = {
        id: req.params.id,
        token: req.headers.authorization!,
      };

      await userBusiness.deleteUser(input);

      res.status(200).send({ message: "Usuário apagado com sucesso" });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }

  async approve(req: Request, res: Response) {
    const userBusiness: UserBusiness = new UserBusiness();
    try {
      const id = req.body.id;

      await userBusiness.approve(id);

      res.status(200).send({ message: "Usuário aprovado" });
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const loginData = {
        email: req.body.email,
        password: req.body.password,
      };

      const userBusiness = new UserBusiness();
      const token = await userBusiness.getUserByEmail(loginData);

      res.status(200).send({ token });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }

  async getUserById(req: Request, res: Response) {
    const userBusiness: UserBusiness = new UserBusiness();
    try {
      const id = req.params.id;
      const result = await userBusiness.getUserById(id);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  }

  async get(req: Request, res: Response) {
    const userBusiness = new UserBusiness();

    try {
      const token = req.headers.authorization!;
      const users = await userBusiness.get(token);

      res.send(users).status(200);
    } catch (error) {
      res.send({ message: error.message }).status(error.status);
    }
  }
}
