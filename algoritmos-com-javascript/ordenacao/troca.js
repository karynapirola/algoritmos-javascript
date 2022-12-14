// função a ser aproveitada no insertionSort
function troca(lista, analise) {

            let itemAnalise = lista[analise];
            let itemAnterior = lista[analise-1];

            lista[analise] = itemAnterior;
            lista[analise-1] = itemAnalise;
}

// função a ser aproveitada no seletionSort
function troca(lista, menorValor, analise) {

    let itemMenorValor = lista[menorValor];
    let itemAnalise = lista[analise];


    lista[menorValor] = itemAnalise;
    lista[analise] = itemMenorValor; 
}


module.exports = troca;