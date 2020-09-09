import { CreatePostInputDTO, GetFeedInputDTO, Post, GetFeedByTypeInputDTO } from "../model/Post";
import { IdGenerator } from "../services/IdGenerator";
import { PostDatabase } from "../data/PostDatabase";

export class PostBusiness{

    public async createPost(input: CreatePostInputDTO){

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const postDatabase = new PostDatabase();
        if(input.type.toLowerCase() !== "normal" && input.type.toLowerCase() !== "event" ){
            throw new Error("Invalid event type");
        }
        await postDatabase.createPost(id, input.image, input.description, input.type, input.creationDate, input.userId);
    }

    public async getFriendsFeed(input: GetFeedInputDTO): Promise<Post[]>{

        const postDatabase = new PostDatabase();
        return await postDatabase.getFriendsFeed(input.userId);

    }

    public async getFeedByType(input: GetFeedByTypeInputDTO): Promise<Post[]>{

        const postDatabase = new PostDatabase();
        return await postDatabase.getFeedByType(input.type);
    }

}