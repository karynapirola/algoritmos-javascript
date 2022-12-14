const listaLivros = require('./arrayDesordenado');

// o mergeSort utiliza a estratégia de dividir para conquistar para ordenar pequenas listas e juntar tudo no final
// assim utiliza menos recursos ao ordenar listas cada vez menores
function mergeSort(array) {
    
    if (array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, meio)); // abrdagem recursiva
        const parte2 = mergeSort(array.slice(meio, array.length));
        array = ordena(parte1, parte2);
    }
    return array;
}

function ordena(parte1, parte2) {
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = [];

    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        let produtoAtualParte1 = parte1[posicaoAtualParte1];
        let produtoAtualParte2 = parte2[posicaoAtualParte2];

        if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
            resultado.push(produtoAtualParte1);
            posicaoAtualParte1++;
        }
        else {
            resultado.push(produtoAtualParte2);
            posicaoAtualParte2++;
        }
    }

    //quando só passa um parâmetro no slice, ele pega da posição até o fim
    return resultado.concat(posicaoAtualParte1 < parte1.length
        ? parte1.slice(posicaoAtualParte1)
        : parte2.slice(posicaoAtualParte2));
}

console.log(mergeSort(listaLivros));