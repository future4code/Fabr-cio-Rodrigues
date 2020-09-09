import { BandDatabase } from './../data/BandDatabase';
import { IdGenerator } from './../services/IdGenerator';
import { ConcertInputDTO } from '../model/Concert';
import { ConcertDatabase } from '../data/ConcertDatabase';

export class ConcertBusiness {

    async createConcert(concert: ConcertInputDTO) {

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const concertDatabase = new ConcertDatabase();
        await concertDatabase.createConcert(id, concert.weekDay, concert.startTime, concert.endTime, concert.bandId);

    }
    
      async getAllConcertsByDay(weekDay: any) {
        const concertDatabase = new ConcertDatabase();
        const concertsFromDB = await concertDatabase.getAllConcertsByDay(weekDay);
    
        return concertsFromDB;
      }
    
}

