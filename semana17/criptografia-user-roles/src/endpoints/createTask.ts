import { Request, Response } from "express";
import TaskDB from "../data/TaskDatabase";

export default async function createTask(req: Request, res: Response) {
    try {
        const { title, description, limitDate, creatorUserId } = req.body
        const id = Date.now() + Math.random().toString()

        if (!title || !description || !limitDate || !creatorUserId) {
            res
                .status(400)
                .send({
                    message: "\"title\",\"description\", \"limitDate\"e \"creatoUserId\" são obrigatórios"
                })
        }

        await new TaskDB().createTask(
            id,
            title,
            description,
            creatorUserId,
            limitDate
        )

        res
            .status(200)
            .send({
                message: "Nova tarefa criada!",
            });
    } catch (error) {
        res
            .status(400)
            .send({
                message: error.sqlMessage || error.message
            });
    }
}