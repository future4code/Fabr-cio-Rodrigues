import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class ConcertDatabase extends BaseDatabase {

  private static TABLE_NAME = "LAMA_Concerts";

    public async createConcert(
        id: string,
        weekDay: string,
        startTime: number,
        endTime: number,
        bandId: string
    ): Promise<void> {
        try {
            await this.getConnection()
            .insert({
                id,
                week_day: weekDay,
                start_time: startTime,
                end_time: endTime,
                band_id: bandId
            })
            .into(ConcertDatabase.TABLE_NAME)
        } catch(error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getAllConcertsByDay(week_day: string): Promise<any> {
        try {
          const result = await this.getConnection()
            .select("*")
            .from(ConcertDatabase.TABLE_NAME)
            .where({ week_day });
          return result[0];
        } catch (error) {
          throw new Error(error.sqlMessage || error.message);
        }
      }
}