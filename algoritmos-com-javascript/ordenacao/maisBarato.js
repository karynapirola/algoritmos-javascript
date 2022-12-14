//verifica qual o menor número de um array

const livros = require("./livros");

// let menorPreco = 0;

// for (let atual = 0; atual < livros.length; atual++){
//     if (livros[atual].preco < livros[menorPreco].preco) {
//         menorPreco = atual;
//     }
// }

// console.log(`o livro mais barato é: ${livros[menorPreco].titulo}`);


function encontrarMaisBarato(array, posicao) {
    
    let maisBarato = posicao;

    for (let posicaoAtual = posicao; posicaoAtual < array.length; posicaoAtual++){
        if (array[posicaoAtual].preco < array[maisBarato].preco) {
            maisBarato = posicaoAtual;
        }
    }
    return maisBarato;

}


// o raciocínio é o mesmo para encontrar o livro mais caro, mas com  a estrutura condicional pedindo pelo contrário

function encontrarMaisCaro(array, posicao) {
    
    let maisCaro = posicao;

    for (let posicaoAtual = posicao; posicaoAtual < array.length; posicaoAtual++){
        if (array[posicaoAtual].preco > array[maisCaro].preco) {
            maisCaro = posicaoAtual;
        }
    }

    return maisCaro;
}


module.exports = encontrarMaisBarato;