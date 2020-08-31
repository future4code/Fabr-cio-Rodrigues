import express from "express";
import {PostController} from "../controller/PostController";
export const postRouter = express.Router();

const postController = new PostController();

postRouter.post("/", postController.createPost);
postRouter.get("/feed", postController.getFriendsFeed);
postRouter.get("/feed/all", postController.getFeedByType);