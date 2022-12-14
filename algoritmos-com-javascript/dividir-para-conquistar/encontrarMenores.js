const listaLivros = require('./arrayDesordenado');

// essa função encontra a quantidade de itens do array que possuem
// preço menor que o pivot, no exemplo da console é a quantidade de livros
// que custam mais barato que o de java (30 reais)
function encontraMenores(pivot, array) {
    let menores = 0;

    for (let atual = 0; atual < array.length; atual++){
        let produtoAtual = array[atual];
        if (produtoAtual.preco < pivot.preco) {
            menores++;
        }
    }

    trocaLugar(array, array.indexOf(pivot), menores)
    return array;
}

// depois de encontrar a quantidade de itens, o pivot precisa mudar de lugar
// por exemplo, se verificamos que existem 3 itens mais baratos, o pivot precisa ir para a 4ª posicao
// para depois ordenarmos esses 4 itens mais baratos que ele
function trocaLugar(array, de, para) {
    const elemento1 = array[de]
    const elemento2 = array[para]

    array[para] = elemento1
    array[de] = elemento2
}

// é uma boa prática utilizar o item do meio do array como pivot
function divideNoPivot(array) {
    let pivot = array[Math.floor(array.length / 2)];
    encontraMenores(pivot, array);
    let valoresMenores = 0;

    for (let analiseArray = 0; analiseArray < array.length; analiseArray++) {
        let atual = array[analiseArray];
        if (atual.preco <= pivot.preco && atual != pivot) {
            trocaLugar(array, analiseArray, valoresMenores);
            valoresMenores++;
        }

        
    }

    return array;
}

console.log(divideNoPivot(listaLivros));
//console.log(encontraMenores(listaLivros[2], listaLivros));
module.exports = trocaLugar;