import { Request, Response } from "express";
import moment from "moment";
import TaskDB from "../data/TaskDatabase";

export default async function getTaskById(req: Request, res: Response) {
    try {
        const task = await new TaskDB().getTaskById(req.params.id)

        if (!task) {
            res
                .status(404)
                .send({
                    message: "Tarefa não encontrada"
                });
        }

        res
            .status(200)
            .send({
                message: "Sucesso!",
                task: {
                    "taskId": task.id,
                    "title": task.title,
                    "description": task.description,
                    "limitDate": moment(task.limit_date, "YYYY-MM-DD").format("DD/MM/YYYY"),
                    "status": task.status,
                    "creatorUserId": task.creator_user_id,
                    "creatorUserNickname": task.nickname
                }
            });
    } catch (error) {
        res
            .status(400)
            .send({
                message: error.sqlMessage || error.message
            });
    }
}