export default async function deletePostById(id: string, table: string): Promise<any> {

    try {
        const result = await this.getConnection()
            .delete()
            .from(table)
            .where({ id });

        return result

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}