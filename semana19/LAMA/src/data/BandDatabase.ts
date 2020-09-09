import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandDatabase extends BaseDatabase {

  private static TABLE_NAME = "LAMA_Bands";

    public async createBand(
        id: string,
        name: string,
        musicGenre: string,
        responsible: string
    ): Promise<void> {
        try {
            await this.getConnection()
            .insert({
                id,
                name,
                music_genre: musicGenre,
                responsible
            })
            .into(BandDatabase.TABLE_NAME)
        } catch(error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getBandByName(name: string): Promise<any> {
        try {
          const result = await this.getConnection()
            .select("*")
            .from(BandDatabase.TABLE_NAME)
            .where({ name });
          return result[0];
        } catch (error) {
          throw new Error(error.sqlMessage || error.message);
        }
      }
}