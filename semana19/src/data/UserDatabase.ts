import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";

export class UserDatabase extends BaseDatabase {

    private static TABLE_NAME = "Lbk_User";
    private static FRIENDSHIP_TABLE_NAME = "Lbk_Friends";

    public async signup(id: string, name: string, email: string, password: string) {

        try {
            await super.getConnection()
                .insert({
                    id,
                    name,
                    email,
                    password
                })
                .into(UserDatabase.TABLE_NAME);

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }

    }

    public async getUserByEmail(email: string): Promise<User> {

        try {

            const result = await this.getConnection()
                .select("*")
                .from(UserDatabase.TABLE_NAME)
                .where({ email });

            return User.toUserModel(result[0]);

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async befriend(userId: string, targetId: string): Promise<void> {

        try {
            await this.getConnection().raw(`
            INSERT INTO ${UserDatabase.FRIENDSHIP_TABLE_NAME}
            VALUES
            ("${userId}", "${targetId}"),
            ("${targetId}", "${userId}")
            `);

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async unfriend(userId: string, targetId: string): Promise<void> {

        try {
            await this.getConnection().raw(`
            DELETE FROM ${UserDatabase.FRIENDSHIP_TABLE_NAME}
            WHERE
            (id_requester = "${userId}" AND id_responder = "${targetId}")
            OR
            (id_requester = "${targetId}" AND id_responder = "${userId}");
            `);

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async checkFriendship(userId: string, targetId: string): Promise<boolean>{
        try {
           const result = await this.getConnection().raw(`
            SELECT * FROM ${UserDatabase.FRIENDSHIP_TABLE_NAME}
            WHERE
            (id_requester = "${userId}" AND id_responder = "${targetId}")
            OR
            (id_requester = "${targetId}" AND id_responder = "${userId}");
            `);

            if(result[0][0]){
                return true;
            }

            return false;

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }   
    }


}