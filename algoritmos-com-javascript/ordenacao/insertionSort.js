const livros = require("./livros");
const troca = require("./troca");

//algoritmo que insere o item na ordem correta, em relação ao item que vem antes dele

function insertionSort(lista) {
    
    for (let atual = 0; atual < lista.length; atual++){
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {

            troca(lista, analise);            
            analise--
        }
    }

    console.log(lista);
}

insertionSort(livros);