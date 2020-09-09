# RESPOSTAS DOS EXERCÍCIOS TEÓRICOS

### EXERCÍCIO 3 
**C:** Na inversão de dependências, a função validateCharacter não é necessária dentro da função performAttack, o que possibilita o teste unitário, uma vez que passaremos a função validateCharacter como um parâmetro genérico, fazendo com que não haja dependências na performAttack.

### EXERCÍCIO 4
**A:** Devemos criar um mock da validateCharacter, uma vez que ela retornará o caso de falha ou sucesso principal do teste, garantindo que os dados inseridos são válidos.