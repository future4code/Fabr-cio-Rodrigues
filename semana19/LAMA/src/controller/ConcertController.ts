import { ConcertBusiness } from './../business/ConcertBusiness';
import { ConcertInputDTO } from './../model/Concert';
import { Request, Response } from "express";
import { Authenticator } from '../services/Authenticator';

export class ConcertController {
    async createConcert(req: Request, res: Response) {
        try {
            const token = req.headers.auth as string;
            const authenticator = new Authenticator()
            const tokenData = authenticator.getData(token);

            if (tokenData.role !== "ADMIN") {
            throw new Error("Unauthorized!");
            }

            const startTime = req.body.start_time;
            const endTime = req.body.end_time;
            const weekDay = req.body.week_day;
            const weekDayToVerify = weekDay.toLowerCase();

            if (startTime.length > 2  || endTime.length > 2){
                throw new Error("Invalid format! Please, use one of the following formats for 'start_time' and/or 'end_time':\n 00 or 0")
            }

            if (weekDayToVerify === "segunda" || weekDayToVerify === "terça" || weekDayToVerify === "quarta" || weekDayToVerify === "quinta") {
                throw new Error("Invalid day for 'week_day'! Please, use either 'sexta', 'sábado' or 'domingo'.");
            }



            const input: ConcertInputDTO = {
                weekDay: weekDay,
                startTime: startTime,
                endTime: endTime,
                bandId: req.body.band_id
            }

            const concertBusiness = new ConcertBusiness();
            await concertBusiness.createConcert(input);

            res.status(200).send({ 
                message: "New concert added successfully!"
            });
        } catch(error) {
            res.status(401).send({ error: error.message })
        }
    }

    async getAllConcertsByDay(req: Request, res: Response) {
        try { 
            const token = req.headers.auth as string;
            const authenticator = new Authenticator()
            const tokenData = authenticator.getData(token);

            if (tokenData.role !== "ADMIN") {
            throw new Error("Unauthorized!");
            }

            const weekDay = req.body.week_day.toLowerCase();
            console.log(weekDay)

            const concertBusiness = new ConcertBusiness();
            const concerts = await concertBusiness.getAllConcertsByDay(weekDay);

            res.status(200).send({
                concerts
            })
        } catch (error) {
            res.status(401).send({ error: error.message })
        }   
    }

}