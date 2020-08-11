### Exercício 1

**Sintaxe:**
CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

**A:** A primeira linha cria uma primary key usando um tipo caractér variável de até 255 bytes. A segunda linha cria a linha name, também de 255 bytes e
impedida de ser nula. birth_date cria uma linha não nula de tipo data, e gender cria uma linha de máximo 6 bytes, também não nula.
**B:** SHOW DATABASES mostra todos os bancos de dados disponíveis na consulta. SHOW TABLES mostra todas as tabelas disponíveis dentro do banco de dados usado.
**C:** O comando SHOW Actor retorna o erro: "actor is not valid at this position" (erro 1064). Por outro lado, o comando DESCRIBE Actor me retorna a tabela e toda a sua estrutura.

### Exercício 2

**Sintaxe:**
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1973-08-23",
"female"
)

**B:** "Entrada duplicada '002' para a chave "PRIMÁRIA".". Esta mensagem aparece pois a chave primária tem de ser única, e como já há uma chave de valor 002, uma segunda chave de mesmo valor não pode ser criada.
**C:** "Contagem da coluna não combina com o valor contado na linha 1."
**D:** "Campo nome não contem um valor padrão."
**E:** "Valor data incorreto "1950" para birth_date na linha 1."
**F:**
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
"1979-03-26",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
"Antônio Fagundes",
400000,
"1949-04-18",
"male"
);

### Exercício 3

**A:** SELECT _ FROM Actor WHERE gender = "female";
**B:** SELECT salary FROM Actor WHERE name = "Tony Ramos";
**C:** SELECT _ FROM Actor WHERE gender = "invalid"; Retornou com sucesso uma fileira de apenas valores nulos.
**D:** SELECT id, name, salary FROM Actor WHERE salary <= 500000;
**E:** "Coluna 'nome' desconhecida na lista de campos".

### Exercício 4

Sintaxe:
SELECT \* FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000

**A:** A consulta diz para selecionar todas as colunas da tabela ator onde o nome conter A ou J, e o salário for maior que 300000.
**B:**
SELECT \* FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000

**C:**
SELECT \* FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%");

**D:**
SELECT \* FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%")
AND salary BETWEEN 350000 AND 900000

### Exercício 5

**A:**
CREATE TABLE Movies(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
synopsis TEXT NOT NULL,
launch_date DATE NOT NULL,
rating TINYINT NOT NULL
)

Uma vez que as letras B, C, D e E são iguais, vou colocar apenas a sintaxe usada na letra **D:**
INSERT INTO Movies (id, name, synopsis, launch_date, rating)
VALUES(
"004",
"O Auto da Compadecida",
"O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. Somente a aparição da Nossa Senhora poderá salvar esta dupla.",
"2000-09-10", 9)

### Exercício 6

**A:** SELECT id, name, rating FROM Movies where id = "003";
**B:** SELECT \* FROM Movies where name = "O Auto da Compadecida";
**C:** SELECT id, name, synopsis FROM Movies where rating >= 7;

### Exercício 7

**A:** SELECT _ FROM Movies where (name LIKE "%vida%" OR synopsis LIKE "%vida%");
**B:** SELECT _ FROM Movies where (name LIKE "%mãe%" OR synopsis LIKE "%mãe%");
**C:** SELECT \* FROM Movies where (launch_date <= "2020-08-10");
