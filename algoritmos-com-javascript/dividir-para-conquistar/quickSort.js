const listaLivros = require('./arrayDesordenado');
const trocaLugar = require('./encontrarMenores');

// esse algoritmo divide o array e ordena a parte da esquerda e da direita
// a partir de um pivot
// ele utiliza a recursao para poder dividir cada vez em partes menores até
// que tenha apenas um elemento e dessa maneira, ele é mais rapido

function quickSort(array, esquerda, direita) {
    
    if (array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);
        if (esquerda < indiceAtual - 1) {
            quickSort(array, esquerda, indiceAtual - 1);
        }
        if (indiceAtual < direita) {
            quickSort(array, indiceAtual, direita);
        }
    }

    return array;
}

function particiona(array, esquerda, direita) {
    let pivot = array[Math.floor((esquerda + direita) / 2)];
    let atualEsquerda = esquerda; // inicia com 0, para o array listaLivros
    let atualDireita = direita; // inicia com 10, para o array listaLivros

    while (atualEsquerda <= atualDireita) {
        while (array[atualEsquerda].preco < pivot.preco) {
            atualEsquerda++;
        }
        while (array[atualDireita].preco > pivot.preco) {
            atualDireita--;
        }
    
        if (atualEsquerda <= atualDireita) {
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));