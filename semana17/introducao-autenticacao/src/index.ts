import IdGenerator from "./services/IdGenerator";
import Authenticator from "./services/Authenticator";
import { UserDatabase } from "./data/UserDatabase";

const newUser = new UserDatabase();
// newUser.createUser(IdGenerator.execute(), "jose@hotmail.com", "123561");

// EXERCÍCIO 5 B:
// newUser.getUserByEmail("jose@hotmail.com");
