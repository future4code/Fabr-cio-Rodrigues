import { BandDatabase } from './../data/BandDatabase';
import { IdGenerator } from './../services/IdGenerator';
import { BandInputDTO } from './../model/Band';



export class BandBusiness {

    async createBand(band: BandInputDTO) {

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const bandDatabase = new BandDatabase();
        await bandDatabase.createBand(id, band.name, band.musicGenre, band.responsible);

    }
}