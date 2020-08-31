export default async function getPostById(id: string, table: string): Promise<any> {

    try {

        const result = await this.getConnection()
            .select("*")
            .from(table)
            .where({ id });

        return result

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}