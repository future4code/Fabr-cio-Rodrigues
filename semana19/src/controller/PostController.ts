import {PostBusiness} from "../business/PostBusiness";
import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { CreatePostInputDTO, GetFeedInputDTO, GetFeedByTypeInputDTO, Post } from "../model/Post";
import { BaseDatabase } from "../data/BaseDatabase";

export class PostController{

    public async createPost(req: Request, res: Response){

        try{

            const token = req.headers.authorization!;

            const authenticator = new Authenticator();
            const verifiedToken = authenticator.getData(token);

            const input: CreatePostInputDTO = new CreatePostInputDTO(req.body.image, req.body.description, req.body.type, verifiedToken.id);

            const postBusiness = new PostBusiness();
            await postBusiness.createPost(input);

            res.send({message: "Post created succesfully"}).status(200);

        }catch(error){
            res.status(400).send({error: error.message});
        }

    }

    public async getFriendsFeed(req: Request, res:Response){

        try {

            const token = req.headers.authorization!;

            const authenticator = new Authenticator();
            const verifiedToken = authenticator.getData(token);

            const input: GetFeedInputDTO = {
                userId: verifiedToken.id
            }

            const postBusiness = new PostBusiness();
            const feed = await postBusiness.getFriendsFeed(input);

            res.status(200).send(feed);
            
        } catch (error) {
            res.status(400).send({error: error.message});
        }

        await BaseDatabase.destroyConnection();
    }

    public async getFeedByType(req:Request, res: Response){

        try {
            const token = req.headers.authorization!;

            const authenticator = new Authenticator();
            const verifiedToken = authenticator.getData(token);

            const input: GetFeedByTypeInputDTO = {
                type: Post.mapStringToPostType(req.query.type as string)
            }


            const postBusiness = new PostBusiness(); 
            const feed = await postBusiness.getFeedByType(input);

            res.status(200).send(feed);
            
        } catch (error) {
            res.status(400).send({error: error.message});
        }

        await BaseDatabase.destroyConnection();
    }


}