/* EXERCÍCIO 1 

A. minhaFuncao(2) resulta em um array vazio;
B. minhaFuncao(5) resulta em [0, 1, 0, 1, 2, 3];
C. minhaFuncao(8) resulta em [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

*/ 

/* EXERCÍCIO 2

A. O console printa o número dos índices de cada nome pedido como argumento na função. O nome "Paula" não está presente no array, logo resulta em undefined.
B. Sim. Desta forma, a função ainda sim usa o argumento "nome" para procurar os indexes correspondentes no array.

*/

/* EXERCÍCIO 3
A função metodo recebe um array como parâmetro e partir deste array, faz um laço for of que captura cada uma das suas unidades e guarda nas variáveis 
resultadoA e resultadoB, fazendo uma adição de valores no resultadoA e uma multiplicação de valores no resultadoB.
Estes valores guardados serão, por fim, inseridos no 'arrayFinal'.
Um melhor nome seria 'function encurtadorDeValores(array)"
*/

/* EXERCÍCIO 4 
A.
function idadeHumanaParaCanina(idade) {
    idade = idade * 7;

    return idade;
}

console.log(idadeHumanaParaCanina(19));

B.

function pessoa(nome, idade, endereco, estuda) {
    if (estuda == true) {
        estuda = "sou";
    } else if (estuda == false) {
        estuda = "não sou";
    }

    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e ${estuda} estudante.`);
}

pessoa("João", 19, "Av. Bandeirantes", true);
*/

/* EXERCÍCIO 5

function qualSeculo(ano) {

    if (ano >= 1001 && ano <= 1100) {
        console.log (`O ano ${ano} pertence ao século XI`);
    }

    else if (ano >= 1101 && ano <= 1200) {
        console.log(`O ano ${ano} pertence ao século XII`);
    }

    else if (ano >= 1201 && ano <= 1300) {
        console.log(`O ano ${ano} pertence ao século XIII`);
    }

    else if (ano >= 1301 && ano <= 1400) {
        console.log(`O ano ${ano} pertence ao século XIV`);
    }

    else if (ano >= 1401 && ano <= 1500) {
        console.log(`O ano ${ano} pertence ao século XV`);
    }

    else if (ano >= 1501 && ano <= 1600) {
        console.log(`O ano ${ano} pertence ao século XVI`);
    }

    else if (ano >= 1601 && ano <= 1700) {
        console.log(`O ano ${ano} pertence ao século XVII`);
    }

    else if (ano >= 1701 && ano <= 1800) {
        console.log(`O ano ${ano} pertence ao século XVIII`);
    }

    else if (ano >= 1801 && ano <= 1900) {
        console.log(`O ano ${ano} pertence ao século XIX`);
    }

    else if (ano >= 1901 && ano <= 2000) {
        console.log(`O ano ${ano} pertence ao século XX`);
    }

    else if (ano >= 2001 && ano <= 2100) {
        console.log(`O ano ${ano} pertence ao século XXI`);
    }

}

console.log(qualSeculo(2000));
*/

/* EXERCÍCIO 6

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function tamanhoArray(array) {
    console.log("O array contém " + array.length + " elementos.");
}

// B

function parOuImpar(numero) {
    let par = false;

    if (numero % 2 == 0) {
        console.log("É par");
        par = true;
    } else {
        console.log("É ímpar");
        par = false;
    }
}
// C
let contemPares = function (array) {
    let contemNumPar = false;
    arrayDosPares = []

    array.forEach(function (item) {
        if (item % 2 == 0) {
            arrayDosPares.push(item);
            contemNumPar = true;
        }
    });

    return arrayDosPares;
};


// D
let contemPares2 = function parOuImpar(array) {
    arrayDosPares = [];

    array.forEach(function (item) {
        if (item % 2 == 0) {
            arrayDosPares.push(item);
        } else {
        }
    });

    return arrayDosPares;
}

console.log(contemPares2(array));
*/





