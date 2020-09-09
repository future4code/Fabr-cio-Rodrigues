import { BandBusiness } from './../business/BandBusiness';
import { BandInputDTO } from './../model/Band';
import { Request, Response } from "express";
import { Authenticator } from '../services/Authenticator';

export class BandController {
    async createBand(req: Request, res: Response) {
        try {
            const token = req.headers.auth as string;
            const authenticator = new Authenticator()
            const tokenData = authenticator.getData(token);

            if (tokenData.role !== "ADMIN") {
            throw new Error("Unauthorized!");
            }
            const input: BandInputDTO = {
                name: req.body.name,
                musicGenre: req.body.music_genre,
                responsible: req.body.responsible
            }

            const bandBusiness = new BandBusiness();
            await bandBusiness.createBand(input);

            res.status(200).send({ 
                message: "New band added successfully!"
            });
        } catch(error) {
            res.status(401).send({ error: error.message })
        }
    }

    async getBandByName(req: Request, res: Response) {
        const bandBusiness: BandBusiness = new BandBusiness();
        try {
          const name = req.body.name;
          const result = await bandBusiness.getBandByName(name);
          console.log(name)
          res.status(200).send(result);
        } catch (err) {
          res.status(400).send({ error: err.message });
        }
      }
}