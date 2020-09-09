import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import UserDB from "../data/UserDatabase";

export default async function editUser(req: Request, res: Response) {
    try {
        const { name, nickname, email } = req.body

        const token = req.headers.auth as string
        const tokenData = Authenticator.getTokenData(token)

        if (name === "" || nickname === "" || email === "") {
            res
                .status(400)
                .send({
                    message: "Não pode haver chaves vazias"
                })
        }

        await new UserDB().editUser(
            tokenData.id,
            name,
            nickname,
            email
        )

        res
            .status(200)
            .send({
                message: "Usuário atualizado!",
            });
    } catch (error) {
        console.log(error)
        res
            .status(401)
            .send({
                message: "Unauthorized"
            });
    }
}