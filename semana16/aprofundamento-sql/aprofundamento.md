## RESPOSTAS

### Exercício 1:

**A:** Deleta a coluna 'salary' da tabela Actor;
**B:** Altera a coluna 'gender' para 'sex' com VARCHAR de máximo 6 bytes na tabela Actor.
**C:** Altera a a coluna 'gender' para 'gender' com VARCHAR de máximo 255 bytes na tabela Actor.
**D:** ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercício 2:

**A:**
UPDATE Actor
SET name = "Moacyr Franco", birth_date = "1940-05-02"
WHERE id = 003;

**B:**
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";

**C:**
UPDATE Actor
SET name = "Juliana Paes", salary = 1000000, birth_date = "1979-03-25", gender = "male"
WHERE id = "005";

**D:**
Mensagem: "0 row(s) affected Rows matched: 0 Changed: 0 Warnings: 0"

### Exercício 3:

**A:**
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

**B:**
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

### Exercício 4:

**A:**
SELECT MAX(salary) AS "Maior salário" FROM Actor;

**B:**
SELECT MIN(salary) AS "Maior salário das atrizes" FROM Actor WHERE gender = "female";

**C:**
SELECT COUNT(\*) AS "Atrizes" FROM Actor WHERE gender = "female";

**D:**
SELECT AVG(salary) AS "Média salarial dos atores e das atrizes" FROM Actor;

### Exercício 5:

**A:**
O resultado é um agrupamento com a contagem de atores e atrizes, separando-os por quantidade e gênero.

**B:**
SELECT name, id FROM Actor
WHERE gender = 'male'
ORDER BY name DESC;

**C:**
SELECT \* FROM Actor
WHERE gender = 'male'
ORDER BY salary DESC;

**D:**
SELECT \* FROM Actor
WHERE gender = 'male'
ORDER BY salary DESC
LIMIT 3;

**E:**
SELECT AVG(salary), gender AS "Médias salariais" FROM Actor
GROUP BY gender;

### Exercício 6:

**A:**
ALTER TABLE Movies
ADD playing_limit_date DATE;

**B:**
ALTER TABLE Movies
MODIFY COLUMN rating DECIMAL;

**C:**
UPDATE Movies
SET playing_limit_date = "2020-08-10"
WHERE id = 001;

UPDATE Movies
SET playing_limit_date = "2021-08-10"
WHERE id = 002;

**D:**
DELETE from Movies
WHERE id = 003;

UPDATE Movies
SET synopsis = "2021-08-10"
WHERE id = 003;

### Exercício 7:

**A:**
SELECT COUNT(\*) FROM Movies WHERE rating > 7.5;

**B:**
SELECT AVG(rating) FROM Movies;

**C:**
SELECT COUNT(\*) FROM Movies WHERE playing_limit_date >= "2020-08-11";

**D:**
SELECT COUNT(\*) FROM Movies WHERE launch_date > "2020-08-11";

**E:**
SELECT MAX(rating) FROM Movies

**F:**
SELECT MIN(rating) FROM Movies

### Exercício 8:

**A:**
SELECT \* FROM Movies
ORDER BY name ASC;

**B:**
SELECT \* FROM Movies
ORDER BY name DESC
LIMIT 5;

**C:**
SELECT \* FROM Movies
ORDER BY launch_date DESC
LIMIT 3;

**D:**
SELECT \* FROM Movies
ORDER BY rating DESC
LIMIT 3;
