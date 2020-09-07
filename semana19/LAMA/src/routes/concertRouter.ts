import { ConcertController } from './../controller/ConcertController';
import express from "express";

export const concertRouter = express.Router();

const concertController = new ConcertController();

concertRouter.post("/register", concertController.createConcert);
concertRouter.post("/get", concertController.getAllConcertsByDay);

