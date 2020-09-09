# RESPOSTAS

### EXERCÍCIO 1

**A:** Strings conseguem conter caractéres especiais, números e letras, deixando eles mais difíceis de serem descriptografados, por isso as prefiro.

### EXERCÍCIO 2

**A:** O código começa com o nome da tabela, que é "User". A seguir, temos a variável de conexão ao banco usando a lib Knex, que contém
informações sensíveis guardadas no arquivo .ENV. Por fim, temos uma função chamada createUser que faz um insert na tabela User usando query builder para inserir id, email e senha.

**B:**
CREATE TABLE User (
id VARCHAR(255) PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);

**D:**
const newUser = new UserDatabase();
newUser.createUser(IdGenerator.execute(), "jose@hotmail.com", "123561");

### EXERCÍCIO 3

**A:** Precisamos fazer com que o JWT_KEY, importado do arquivo .ENV, venha como string e não como Secret.

### EXERCÍCIO 6

**A:** Porque o método verify do JWT é any, logo não podemos tipá-lo nem como string.
