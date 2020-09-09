import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import signup from "./endpoints/signup";
import getUserById from "./endpoints/getUserById";
import editUser from "./endpoints/editUser";
import createTask from "./endpoints/createTask";
import testEndpoint from "./endpoints/testEndpoint";
import getTaskById from "./endpoints/getTaskById";
import login from "./endpoints/login";
import deleteUserById from "./endpoints/deleteUserById";

/******************************************************************/

dotenv.config();

/******************************************************************/

const app = express();
app.use(express.json());

app.get("/test", testEndpoint);

app.post("/user/signup", signup);
app.post("/user/login", login);
app.get("/user/:id", getUserById);
app.post("/user/edit/", editUser);

app.put("/task", createTask);
app.get("/task/:id", getTaskById);

app.delete("/user/:id", deleteUserById);

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
