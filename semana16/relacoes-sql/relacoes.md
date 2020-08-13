## RESPOSTAS

### Exercício 1:

**A:** Uma chave estrangeira é uma chave de uma tabela que permite a relação da mesma com a outra. Exemplo: Podemos ter a tabela sales e a tabela customers, na qual a tabela customers tem a linha "customer_id", e a tabela sales contém, a mesma linha, para cada compra realizada. Logo, a tabela customers e a tabela sales se relacionam através dela.
**B:**
INSERT INTO Rating
VALUES(
"001",
"Muito bom!",
8,
"002"
);

**C:**

#### ERRO:

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`mello_fabricio_rodrigues`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

O resultado se dá porque é impossível atualizar uma chave estrangeira que não existe. Uma vez que uma chave estrangeira é uma linha em comum entre 2 ou mais tabelas, se ela não existem em uma tabela, não tem como atualizá-la apenas em outra tabela.

**D:**
ALTER TABLE Movies
DROP COLUMN rating;

**E:**

#### ERRO

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`mello_fabricio_rodrigues`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

O resultado se dá porque é impossível atualizar/apagar uma chave estrangeira através de seu 'filho'.

### Exercício 2:

**A:**
Essa tabela possui 2 foreign keys apenas, sendo uma tabela N:M, se relacionado com a tabela Actor e a tabela Movies.

**B:**
INSERT INTO MovieCast
VALUES(
"001",
"002"
);

INSERT INTO MovieCast
VALUES(
"002",
"002"
);

INSERT INTO MovieCast
VALUES(
"003",
"002"
);

INSERT INTO MovieCast
VALUES(
"003",
"003"
);

INSERT INTO MovieCast
VALUES(
"006",
"003"
);

INSERT INTO MovieCast
VALUES(
"003",
"001"
);

**C:**

#### ERRO:

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`mello_fabricio_rodrigues`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

O resultado se dá porque é impossível atualizar uma chave estrangeira que não existe.

**D:**

#### ERRO:

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`mello_fabricio_rodrigues`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

O resultado se dá porque é impossível atualizar/apagar uma chave estrangeira através de seu 'filho'.

### Exercício 3:

**A:**
O operador ON declara uma condição na qual as duas foreign keys sejam iguais (movies.id e rating.movie_id).

**B:**
SELECT name, Movies.id, rate FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;

### Exercício 4:

**A:**
SELECT m.id as movie_id, m.name, r.rate as rating, r.comment as rating_comment FROM Movies m
LEFT JOIN Rating r ON m.id = r.movie_id;

**B:**
SELECT m.id as movie_id, m.name, mc.actor_id FROM Movies m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;

**C:**
SELECT AVG(r.rate), m.id, m.name FROM Movies m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);

### Exercício 5:

**A:**
Para que possamos pegar dados das foreign keys de Movies, MovieCast e Actor, precisamos fazer 2 JOINS.

**B:**
SELECT m.id, m.name, a.id, a.name FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

**C:**
Tem uma vírgula errada no lugar de m,title. Seria m.title.

**D:**
SELECT m.name, a.name, r.rate FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id
JOIN Rating r ON r.id = m.id;

### Exercício 6:

**A:**
Relação M:N, uma vez que um mesmo óscar pode ser dado a vários filmes.

**B:**
CREATE TABLE Oscars (
id VARCHAR(255) PRIMARY KEY,
name TEXT NOT NULL,
award_date DATE NOT NULL,
movie_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

**C:**
INSERT INTO Oscars
VALUES(
"001",
"Óscar de melhor filme",
"2008-10-13",
"003"
);

INSERT INTO Oscars
VALUES(
"002",
"Óscar de melhor direção",
"2008-10-13",
"003"
);

**D:**
SELECT m.id as movie_id, m.name, o.name FROM Movies m
JOIN Oscars o ON m.id = o.movie_id;
