import { connection } from "./knexconnection";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

const createUser = async (
  id: string,
  name: string,
  nickname: string,
  email: string
): Promise<void> => {
  try {
    await connection
      .insert({
        id: id,
        name: name,
        nickname: nickname,
        email: email,
      })
      .into("ToDoListUser");
    console.log("Usuário criado com sucesso!");
  } catch (error) {
    console.log(error);
  }
};

app.post("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    await editUser(
      req.params.id,
      req.body.name,
      req.body.nickname,
      req.body.email
    );

    res.status(200).send();
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// CreateUser
app.post("/user", async (req: Request, res: Response) => {
  try {
    await createUser(
      Math.random().toString(36).substr(2, 9),
      req.body.name,
      req.body.nickname,
      req.body.email
    );

    res.status(200).send();
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//CreateTask
app.put("/task", async (req: Request, res: Response) => {
  function ChangeFormatDate(oldDate: string) {
    return oldDate.toString().split("/").reverse().join("-");
  }
  const receivedDate = ChangeFormatDate(req.body.limit_date);
  const newDate = new Date(receivedDate);

  try {
    await createTask(
      Math.random().toString(36).substr(2, 9),
      req.body.title,
      req.body.description,
      "to do",
      newDate,
      req.body.creator_user_id
    );

    res.status(200).send();
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
    console.log("Ó O ERRO: ", receivedDate);
  }
});

// SearchUser
app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const user = await searchUser(req.params.id);
    res.status(200).send({ user });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// SearchTask
app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const task = await searchTask(req.params.id);
    res.status(200).send({ task });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.get("/", async (req: Request, res: Response) => {
  try {
    res.send("eae");
  } catch (error) {
    console.log(error);
  }
});

const createTask = async (
  id: string,
  title: string,
  description: string,
  status: string,
  dateOfLimit: Date,
  creator_user_id: string
): Promise<void> => {
  try {
    await connection
      .insert({
        id: id,
        title: title,
        description: description,
        status: status,
        limit_date: dateOfLimit,
        creator_user_id: creator_user_id,
      })
      .into("ToDoListTask");
    console.log("Tarefa criada com sucesso!");
  } catch (error) {
    console.log(error);
  }
};

const editUser = async (
  id: string,
  name: string,
  nickname: string,
  email: string
): Promise<void> => {
  try {
    await connection.raw(`
      UPDATE ToDoListUser
      SET name = "${name}", nickname = "${nickname}", email = "${email}"
      WHERE id = "${id}"
      `);
    console.log("Usuário editado com sucesso!");
  } catch (error) {
    console.log(error);
  }
};

async function searchUser(id: string) {
  try {
    const result = await connection
      .select("*")
      .from("ToDoListUser")
      .where("id", "LIKE", `%${id}%`);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function searchTask(id: string) {
  try {
    const result = await connection
      .select("*")
      .from("ToDoListTask")
      .where("id", "LIKE", `%${id}%`);
    return result;
  } catch (error) {
    console.log(error);
  }
}

// const updateSalary = async (id: string, salary: number): Promise<any> => {
//   await connection("Actor")
//     .update({
//       salary: salary,
//     })
//     .where("id", id);
// };

// const deleteActor = async (id: string): Promise<any> => {
//   await connection("Actor").delete().where("id", id);
// };

// const avgSalary = async (gender: string): Promise<any> => {
//   const result = await connection("Actor")
//     .avg("salary as average")
//     .where({ gender });

//   return result[0].average;
// };

// TESTES

// createUser("001", "Fabrício", "progfabs", "fabricio@hotmail.com");

// createTask(
//   "001",
//   "Jogar vídeogame",
//   "Jogar vídeogame com os amigos",
//   "to do",
//   new Date("2020-08-15"),
//   "001"
// );
