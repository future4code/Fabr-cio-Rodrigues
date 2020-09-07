import { bandRouter } from './routes/bandRouter';
import dotenv from "dotenv";
import {AddressInfo} from "net";
import express from "express";
import { userRouter } from "./routes/userRouter";
import { concertRouter } from './routes/concertRouter';
dotenv.config();
const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/bands", bandRouter);
app.use("/concerts", concertRouter);

const server = app.listen(3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server up and running on http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });